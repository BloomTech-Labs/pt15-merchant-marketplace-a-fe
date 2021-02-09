import React, { useEffect } from 'react';
import NavBar from '../../../../common/navBar';
import { connect } from 'react-redux';
import { fetchMyInfo } from '../../../../../state/actions';
import { useOktaAuth } from '@okta/okta-react';

function MyInfo(props, { fetchMyInfo }) {
  const { authState } = useOktaAuth();

  useEffect(() => {
    props.fetchMyInfo(authState, sellerId.idToken.claims.sub);
  }, []);

  function clicked(event) {
    console.log('clicked in infosec');
    props.fetchMyInfo(authState, sellerId.idToken.claims.sub);
  }
  console.log('props in mtInfoSec', props.myInfo);

  const sellerId = JSON.parse(localStorage.getItem('okta-token-storage'));
  console.log('seller id', sellerId.idToken.claims.sub);
  console.log('props.MyInfo', props.myInfo);

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

      <button onClick={clicked}>fetch</button>
    </>
  );
}

const mapStateToProps = state => {
  console.log('state in mapstatetoprops in myinfosec', state.information);
  return {
    myInfo: state.information,
    // myName: state.information.info.seller_name,
    // myAddress: state.information.info.physical_address,
    // myPhoneNumber: state.information.info.phone_number,
    // myEmail: state.information.info.email_address,
    // myDescription: state.information.info.description,
  };
};

export default connect(mapStateToProps, { fetchMyInfo })(MyInfo);
