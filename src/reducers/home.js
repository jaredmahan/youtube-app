import * as types from "../constants/actionTypes";

export const initialState = {
  errorMessage: null,
  loading: false,
  query: "",
  result: null
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_QUERY_RESULTS_START:
      return {
        ...state,
        query: action.query,
        order: action.order,
        errorMessage: null,
        loading: true
      };
    case types.GET_QUERY_RESULTS_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.res
      };
    case types.GET_QUERY_RESULTS_FAILURE:
      return {
        ...state,
        errorMessage: action.message,
        result: null,
        loading: false
      };
    default:
      return state;
  }
};

export default Reducer;
