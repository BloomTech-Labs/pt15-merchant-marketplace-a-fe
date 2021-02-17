import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../../../../common/navBar';
import { connect } from 'react-redux';
import { fetchMyInfo, editMyInfo } from '../../../../../state/actions';
import { useOktaAuth } from '@okta/okta-react';

function MyInfo(props) {
  const history = useHistory();
  const { authState } = useOktaAuth();
  const [sellerForm, setSellerForm] = useState({
    id: '00ultwew80Onb2vOT4x6',
    seller_name: 'useStateedited',
    email_address: 'llama002@maildrop.cc',
    phone_number: 'useStateedited',
    physical_address: 'edited',
    description: 'edited',
  });

  const editedState = {
    id: '00ultwew80Onb2vOT4x6',
    seller_name: 'edited',
    email_address: 'llama002@maildrop.cc',
    phone_number: 'edited',
    physical_address: 'edited',
    description: 'edited',
  };

  useEffect(() => {
    props.fetchMyInfo(authState);
  }, []);

  function clicked(event) {
    history.push('/myprofile/editinfo');
    // props.editMyInfo(authState, sellerForm);
  }

  return (
    <>
      <NavBar />
      <br />
      <br />
      <div>
        <h3>Name:{props.myInfo.seller_name}</h3>
        <h3>Address:{props.myInfo.physical_address}</h3>
        <h3>Phone Number:{props.myInfo.phone_number}</h3>
        <h3>Email:{props.myInfo.email_address}</h3>
        <h3>Description:{props.myInfo.description}</h3>
      </div>

      <button onClick={clicked}>Edit</button>
    </>
  );
}

const mapStateToProps = state => {
  return {
    myInfo: state.information.myInfo,
  };
};

export default connect(mapStateToProps, { fetchMyInfo, editMyInfo })(MyInfo);
