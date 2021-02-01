import React from 'react';
import PopContent from './popContent';
import ProductInfo from '../../../pages/ProductInfo/ProductInfo';
import FormButton from '../../../common/FormButton/FormButton';

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
        item={''}
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
