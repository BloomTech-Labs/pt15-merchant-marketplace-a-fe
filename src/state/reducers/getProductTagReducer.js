import { requestStatus } from '../types/index';
import {
  GET_PRODUCT_TAG_START,
  GET_PRODUCT_TAG_SUCCESS,
  GET_PRODUCT_TAG_ERROR,
} from '../actions/index';

const initialState = {
  getProductTagArr: [],
  getGetProductTagArrStatus: requestStatus.ready,
};

const getProductTagReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_TAG_START:
      return {
        ...state,
        getGetProductTagArrStatus: requestStatus.loading,
      };
    case GET_PRODUCT_TAG_SUCCESS:
      return {
        ...state,
        getProductTagArr: [...state.getProductTagArr, action.payload],
        getGetProductTagArrStatus: requestStatus.loading,
      };
    case GET_PRODUCT_TAG_ERROR:
      return { ...state, getGetProductTagArrStatus: requestStatus.error };
    default:
      return state;
  }
};

export default getProductTagReducer;
