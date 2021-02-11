import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import '../inventoryStyles.css';
import FormButton from '../../../common/FormButton/FormButton';
import { Form, Input, Button, Select, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { addCategory, fetchCategories } from '../../../../state/actions';

function MoreInfo({ setData, setProgress, slider }) {
  const { Option } = Select;
  const categories = useSelector(state => state.categories.categories);
  const catState = useSelector(state => state.addCategory.newCategory);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Enter category name:');

  const onFinish = values => {
    setData(values);
  };
  function onChange(value) {
    let selCat = categories.filter(el => value === el.id);
    let hasBeenChoosen = selectedCategory.filter(el => el.id === selCat[0].id);
    if (hasBeenChoosen.length > 0) {
      warning(
        selCat[0].category_name,
        'category has been choosen, please select another one'
      );
    } else {
      setSelectedCategory([...selectedCategory, selCat[0]]);
    }
  }
  const deleteItem = categoryName => {
    let selCat = selectedCategory.filter(
      cat => cat.category_name !== categoryName
    );
    setSelectedCategory(selCat);
  };

  const createNewCategoryChange = e => {
    setNewCategory(e.target.value);
  };

  function warning(name, warningString) {
    Modal.warning({
      title: 'Category exists',
      content: `${name} ${warningString}`,
    });
  }
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('Create a new Category');
    let selCat = categories.filter(
      el => newCategory.toLowerCase() === el.category_name.toLowerCase()
    );
    if (selCat.length > 0) {
      warning(
        selCat[0].category_name,
        'category exists, please enter another category name or cancel'
      );
    } else {
      dispatch(addCategory(newCategory, authState));
      setConfirmLoading(true);
      setTimeout(() => {
        setVisible(false);
        setConfirmLoading(false);
      }, 2000);
    }
  };
  useEffect(() => {
    dispatch(fetchCategories(authState));
    console.log('Redux category fetchCategories state: ', categories);
  }, [catState]);

  const handleCancel = () => {
    setVisible(false);
  };
  const onModalFinish = () => {
    console.log('modalFinish');
  };

  return (
    <div className="contents">
      <h1>Categories</h1>
      <p>
        Please, choose product categories. If a desired category does not exist,
        create the new one.
      </p>
      <Form
        className="dynamic_form_nest_item"
        onFinish={() => onFinish(selectedCategory)}
      >
        <section className="spec-inputs">
          {/**--------------Select Category---------------------- */}
          <Form.Item name="specification">
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a category"
              optionFilterProp="children"
              onChange={onChange}
            >
              {categories
                .sort((a, b) =>
                  a.category_name.toLowerCase() > b.category_name.toLowerCase()
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
          {/**---------------Choosen Categories------------------- */}
          <h3>Choosen Categories:</h3>
          {selectedCategory.length === 0 && (
            <p className="category-warning">
              Please, select category or create the new one.
            </p>
          )}
          {selectedCategory &&
            selectedCategory.map(cat => (
              <div className="choosen-categories">
                <div>{cat.category_name}</div>
                <div
                  className="delete"
                  onClick={() => deleteItem(cat.category_name)}
                >
                  <DeleteOutlined style={{ color: 'red' }} />
                </div>
              </div>
            ))}
          {/**------------Add New Category----------------- */}
          <div className="modal-button">
            <Button type="primary" onClick={showModal}>
              Create New Category
            </Button>
          </div>

          <Modal
            title="New Category"
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <p>{modalText}</p>
            <Form className="dynamic_form_nest_item" onFinish={onModalFinish}>
              <Form.Item
                name="category_name"
                rules={[
                  {
                    required: true,
                    message: 'Please input category name',
                  },
                ]}
              >
                <Input
                  placeholder="Name of Category"
                  onChange={createNewCategoryChange}
                />
              </Form.Item>
            </Form>
          </Modal>
        </section>
        <FormButton
          setProgress={setProgress}
          slider={slider}
          progressPercent={40}
          text="Next"
        />
      </Form>
    </div>
  );
}

export default MoreInfo;
