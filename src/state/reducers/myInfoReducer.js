import {
  FETCH_MY_INFO_START,
  FETCH_MY_INFO_SUCCESS,
  FETCH_MY_INFO_ERROR,
} from '../actions/index';

const initialState = {
  name: 'redux Johns Art',
  address: 'redux123 Four st, alpha, texas, USA',
  phoneNumber: 'redux1234567890',
  email: 'reduxuseremail@email.com',
  deliver: 'reduxNO',
  pickup: 'reduxYes',
};

const myInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MY_INFO_START:
      return { state };
    case FETCH_MY_INFO_SUCCESS:
      console.log(action.payload);
      return {
        state,
      };
    case FETCH_MY_INFO_ERROR:
      return { state };
    default:
      return state;
  }
};

export default myInfoReducer;
