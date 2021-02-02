import React from 'react';
import PopContent from './popContent';
import ProductInfo from '../../../pages/ProductInfo/ProductInfo';
import FormButton from '../../../common/FormButton/FormButton';

const initialItem = {
  item_name: '',
  description: '',
  price_in_cents: 0,
  quantity_available: 0,
  published: false,
};

function Finalize({
  setProgress,
  slider,
  formCosolidate,
  setStatus,
  mainInfo,
  specForm,
  photos,
}) {
  const formConfirm = () => {
    formCosolidate();
  };

  const ShowPopContent = ({ setStatus, setProgress }) => {
    return (
      <PopContent
        setProgress={setProgress}
        setStatus={setStatus}
        formConfirm={formConfirm}
      />
    );
  };
  return (
    <div className="contents">
      <ProductInfo
        item={initialItem}
        photos={photos}
        mainInfo={mainInfo}
        specForm={specForm}
      />
      <FormButton
        setProgress={setProgress}
        slider={slider}
        progressPercent={100}
        text="Save Product"
        review="true"
        popContent={() => ShowPopContent(setStatus, setProgress, formConfirm)}
      />
    </div>
  );
}

export default Finalize;
