import { Button } from 'antd';
import React, { useState } from 'react';
import { Form, Popover, InputNumber } from 'antd';
import ItemCard from '../../../common/cards/normalItem';
import { Link } from 'react-router-dom';
// May remove, I need to figure out passing props
import popContent from './popContent';
import ProductInfo from '../../../pages/ProductInfo/ProductInfo';

function Finalize(props) {
  const [price, setPrice] = useState();

  const [form] = Form.useForm();

  const onFinish = values => {
    props.setData(values);
  };

  const formConfirm = () => {
    props.formCosolidate();
  };

  const onChange = values => {
    setPrice(values.price);
  };

  const popoverContent = (
    <div className="popContent">
      <h2>What would you like to do with this item?</h2>
      <Link to="/myprofile/inventory">
        <Button
          onMouseEnter={() => {
            props.setStatus('');
            props.setProgress(100);
          }}
          onClick={() => {
            formConfirm();
          }}
        >
          Create and Stock Item
        </Button>
      </Link>
      <Link to="/myprofile/inventory">
        <Button
          onMouseEnter={() => {
            props.setStatus('active');
            props.setProgress(90);
          }}
        >
          Save Item as Draft
        </Button>
      </Link>
      <Link to="/myprofile/inventory">
        <Button
          onMouseEnter={() => {
            props.setStatus('exception');
            props.setProgress(0);
          }}
        >
          Cancel
        </Button>
      </Link>
    </div>
  );

  return (
    <div className="contents">
      <ProductInfo />
      <Form form={form} onFieldsChange={onChange} onFinish={onFinish}>
        <Form.Item>
          <Popover content={popoverContent}>
            <Button
              htmlType="submit"
              onMouseEnter={() => {
                props.setProgress(80);
                props.setData(form.getFieldsValue);
              }}
            ></Button>
          </Popover>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Finalize;
