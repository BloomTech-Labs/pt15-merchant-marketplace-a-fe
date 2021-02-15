import React, { useState } from 'react';
import { Input, Form, Button } from 'antd';
import { AimOutlined, SearchOutlined } from '@ant-design/icons';
import './BrowserBar.css';

function BrowserBar() {
  const [search, setSearch] = useState({ location: '', item: '' });
  const searchHandle = e => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  const submitHandler = () => {
    console.log('hi');
    //If user searches for product, take them to the search results page
    //if the user searches for a specific seller, take them to sellerPages
    //if the user searches by zip code, show them a map of nearby users.
  };
  return (
    <Form className="search-bar" onFinish={submitHandler}>
      <div className="location">
        {' '}
        <Input
          prefix={<AimOutlined />}
          name="location"
          value={search.location}
          placeholder="Enter zipcode city/town"
          onChange={searchHandle}
          onSubmit={submitHandler}
        />
      </div>

      <Input
        name="item"
        value={search.item}
        onChange={searchHandle}
        placeholder="What are you looking for?"
        onSubmit={submitHandler}
      />
      <Button htmlType="submit">
        <SearchOutlined />
      </Button>
    </Form>
  );
}

export default BrowserBar;
