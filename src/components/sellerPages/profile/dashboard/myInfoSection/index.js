import React from 'react';
import NavBar from '../../../../common/navBar';

function MyInfo() {
  var myInfo = {
    name: 'Johns Art',
    address: '123 Four st, alpha, texas, USA',
    phoneNumber: '1234567890',
    email: 'useremail@email.com',
    deliver: 'NO',
    pickup: 'Yes',
  };

  return (
    <>
      <NavBar />
      <h3>Name:{myInfo.name}</h3>
      <h3>Address:{myInfo.address}</h3>
      <h3>Phone Number:{myInfo.phoneNumber}</h3>
      <h3>Email:{myInfo.email}</h3>
      <h3>Deliver:{myInfo.deliver}</h3>
      <h3>In-Store Pickup:{myInfo.pickup}</h3>
    </>
  );
}

export default MyInfo;

// const mapStateToProps = state => ({
//     status: state.addProduct.getAddProductStatus, //We could use this status to see the status of the api call post request
//   });

//   export default connect(mapStateToProps, {})(MyInfo);
