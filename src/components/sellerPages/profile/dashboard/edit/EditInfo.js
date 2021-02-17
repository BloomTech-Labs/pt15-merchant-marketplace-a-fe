import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMyInfo, editMyInfo } from '../../../../../state/actions';
import { useOktaAuth } from '@okta/okta-react';
import NavBar from '../../../../common/navBar';

function EditInfo(props) {
  const history = useHistory();
  const { authState } = useOktaAuth();
  const [sellerForm, setSellerForm] = useState({
    // id: `${props.myInfo.id}`,
    // seller_name:`${props.myInfo.seller_name}` ,
    // email_address: `${props.myInfo.email_address}`,
    // phone_number: `${props.myInfo.phone_number}`,
    // physical_address: `${props.myInfo.physical_address}`,
    // description: `${props.myInfo.physical_description}`

    id: '00ultwew80Onb2vOT4x6',
    seller_name: 'terryd',
    email_address: 'llama002@maildrop.cc',
    phone_number: 'useStateedited',
    physical_address: 'edited',
    description: 'edited',
  });

  // ({
  //     id: '00ultwew80Onb2vOT4x6',
  //     seller_name: 'useStateedited',
  //     email_address: 'llama002@maildrop.cc',
  //     phone_number: 'useStateedited',
  //     physical_address: 'edited',
  //     description: 'edited'
  //   })

  useEffect(() => {
    props.fetchMyInfo(authState);
  }, []);

  function editForm(e) {
    setSellerForm({
      [e.target.value]: e.target.name,
    });
  }

  function cancelEdit(e) {
    history.goBack();
  }

  async function submitEdit(e) {
    await props.editMyInfo(authState, sellerForm);
    history.push('/myprofile/myinfo');
  }

  return (
    <>
      <NavBar />
      <br />
      <br />
      <label>
        Name
        <input value={sellerForm.seller_name} onChange={editForm}></input>
      </label>
      <br />
      <label>
        Address
        <input value={sellerForm.physical_address} onChange={editForm}></input>
      </label>
      <br />
      <label>
        PhoneNumber
        <input value={sellerForm.phone_number} onChange={editForm}></input>
      </label>
      <br />
      <label>
        {' '}
        Email
        <input value={sellerForm.email_address} onChange={editForm}></input>
      </label>
      <br />
      <label>
        Description
        <input value={sellerForm.description} onChange={editForm}></input>
      </label>
      <button onClick={submitEdit}>submit</button>
      <button onClick={cancelEdit}>cancel</button>
    </>
  );
}

const mapStateToProps = state => {
  console.log('state in editInfo', state.information.myInfo);
  return {
    myInfo: state.information.myInfo,
  };
};

export default connect(mapStateToProps, { editMyInfo, fetchMyInfo })(EditInfo);
