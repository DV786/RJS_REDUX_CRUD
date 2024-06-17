import {
  DELETE_EMPLOYE_SUCCESS,
  DELETE_EMPLOYE_REQUESTED,
  DELETE_EMPLOYE_FAILED,
} from "../Constant/empolye";

const intialState = {};

const deleteEmployeReducer = (state = intialState, action) => {
  /***********************DELETE EMPOLYE**************************** */
  switch (action.type) {
    case DELETE_EMPLOYE_REQUESTED:
      return {
        ...state,
        loading: false,
      };
    case DELETE_EMPLOYE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_EMPLOYE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default deleteEmployeReducer;
