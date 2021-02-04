import React from 'react';
import NavBar from '../../../../common/navBar';
import { connect } from 'react-redux';

function MyInfo(props) {
  var myIn = {
    name: 'Johns Art',
    address: '123 Four st, alpha, texas, USA',
    phoneNumber: '1234567890',
    email: 'useremail@email.com',
    deliver: 'NO',
    pickup: 'Yes',
  };
  // console.log("stateinMyInfo", info.name)
  return (
    <>
      <NavBar />
      <br />
      <br />
      <h3>Name:{props.myName}</h3>
      <h3>Address:{props.myAddress}</h3>
      <h3>Phone Number:{props.myPhoneNumber}</h3>
      <h3>Email:{props.myEmail}</h3>
      <h3>Deliver:{props.myDeliveryStatus}</h3>
      <h3>In-Store Pickup:{props.myStoreStatus}</h3>
    </>
  );
}

// export default MyInfo;

const mapStateToProps = state => {
  console.log('state in mapstatetoprops in myinfosec', state);
  return {
    myName: state.information.name,
    myAddress: state.information.address,
    myPhoneNumber: state.information.phoneNumber,
    myEmail: state.information.email,
    myDeliveryStatus: state.information.deliver,
    myStoreStatus: state.information.pickup,
  };
};

export default connect(mapStateToProps, {})(MyInfo);
