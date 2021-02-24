import React, { useEffect, useState } from 'react';
import { Input, Button, Select, Form } from 'antd';
import { Link } from 'react-router-dom';
import './searchbarStyles.css';
import { useSelector } from 'react-redux';

function SearchBar({ searchVisible, setData }) {
  const [inView, setInView] = useState('nope');
  const { Search } = Input;
  const { Option } = Select;
  const categories = useSelector(state => state.categories.categories);
  const tags = useSelector(state => state.tags.tags);
  const [srtChange, setSrtChange] = useState('');
  const formRef = React.createRef();

  function onSearch(values) {
    setData(values);
  }
  function onChange(e) {
    setData(e.target.value);
  }
  function sortChange(value) {
    setSrtChange(value);
  }

  function categoryChange(value) {
    let catValue = '&*$@category' + value;
    setData(catValue);
  }

  function tagChange(value) {
    let tagValue = '&*$@tag' + value;
    setData(tagValue);
  }

  function sortReset() {
    formRef.current.setFieldsValue({
      sortby: 'Sort By',
      category: 'Grouping Items',
      tag: 'Grouping Items',
    });
    setSrtChange('');
    setData('');
  }

  function publishedChange() {
    setData('$#&published');
  }
  function unPublishedChange() {
    setData('$#&unpublished');
  }
  function mainChange() {
    setData('$#&main');
  }

  useEffect(() => {
    if (searchVisible === false) {
      setInView('inView');
    }
  });

  return (
    <div className={inView}>
      <div className="searchOuter">
        <div className="searchBtns">
          <Button onClick={mainChange}>Main</Button>
          <Button onClick={publishedChange}>Published</Button>
          <Button onClick={unPublishedChange}>Drafts</Button>
          <Button>Archives</Button>
        </div>
        <div className="searchBtns"></div>
        <Search
          placeholder="Search through your inventory"
          className="searchBar"
          onSearch={onSearch}
          onChange={onChange}
          name="searchItem"
          initialValue=""
        />

        {/**---------------SORT BY FORM------------------- */}
        <div>
          <Form
            className="dynamic_form_nest_item"
            onFinish={sortReset}
            ref={formRef}
            style={{ display: 'flex', flexDirection: 'row', height: '20px' }}
            initialValues={{
              sortby: 'Sort By',
              category: 'Grouping Items',
              tag: 'Grouping Items',
            }}
          >
            <Form.Item name="sortby">
              <Select onChange={sortChange} style={{ width: '150px' }}>
                <Option value="category">Category</Option>
                <Option value="tag">Tag</Option>
              </Select>
            </Form.Item>
            {/**---------------SORT BY CATEGORY------------------- */}
            {srtChange === 'category' ? (
              <Form.Item name="category">
                <Select onChange={categoryChange} style={{ width: '150px' }}>
                  {categories
                    .sort((a, b) =>
                      a.category_name.toLowerCase() >
                      b.category_name.toLowerCase()
                        ? 1
                        : -1
                    )
                    .map(category => {
                      return (
                        <Option value={category.id} autoFocus={true}>
                          {category.category_name}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>
            ) : (
              <Form.Item name="tag">
                <Select onChange={tagChange} style={{ width: '150px' }}>
                  {tags
                    .sort((a, b) =>
                      a.tag_name.toLowerCase() > b.tag_name.toLowerCase()
                        ? 1
                        : -1
                    )
                    .map(tag => {
                      return (
                        <Option value={tag.id} autoFocus={true}>
                          {tag.tag_name}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>
            )}
            <Button htmlType="submit">Sort Reset</Button>
          </Form>
        </div>

        {/**-------------------------------------------- */}
        <div>
          <Link to="/myprofile/inventory/additem">
            <Button className="add-item-button">+ Add Item</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
