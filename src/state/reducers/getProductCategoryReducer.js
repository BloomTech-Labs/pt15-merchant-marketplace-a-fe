import { requestStatus } from '../types/index';
import {
  GET_PRODUCT_CATEGORY_START,
  GET_PRODUCT_CATEGORY_SUCCESS,
  GET_PRODUCT_CATEGORY_ERROR,
} from '../actions/index';

const initialState = {
  getProductCategoryArr: [],
  getGetProductCategoryArrStatus: requestStatus.ready,
};

const getProductCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_CATEGORY_START:
      return {
        ...state,
        getGetProductCategoryArrStatus: requestStatus.loading,
      };
    case GET_PRODUCT_CATEGORY_SUCCESS:
      return {
        ...state,
        getProductCategoryArr: [...state.getProductCategoryArr, action.payload],
        getGetProductCategoryArrStatus: requestStatus.loading,
      };
    case GET_PRODUCT_CATEGORY_ERROR:
      return { ...state, getGetProductCategoryArrStatus: requestStatus.error };
    default:
      return state;
  }
};

export default getProductCategoryReducer;
