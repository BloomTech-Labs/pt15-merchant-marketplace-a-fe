import {
  FETCH_MY_INFO_START,
  FETCH_MY_INFO_SUCCESS,
  FETCH_MY_INFO_ERROR,
} from '../actions/index';

const initialState = {
  seller_name: 'redux',
  physical_address: 'redux',
  phone_number: 'redux',
  email_address: 'redux',
  description: 'redux',
};
const myInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MY_INFO_START:
      return { ...state };
    case FETCH_MY_INFO_SUCCESS:
      //   const newState = action.payload;
      return action.payload;
    case FETCH_MY_INFO_ERROR:
      return { ...state };

    default:
      return state;
  }
};

export default myInfoReducer;
