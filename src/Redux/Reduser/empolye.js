import {
  GET_EMPLOYE,
  GET_EMPLOYE_SUCCESS,
  GET_EMPLOYE_FAILED,
} from "../Constant/empolye";

const intialState = {
  employe: [],
  loading: false,
  error: null,
};

const employeReducer = (state = intialState, action) => {
  switch (action.type) {
    // *************************GET EMPOLYE****************************************/
    case GET_EMPLOYE:
      return {
        ...state,
        loading: true,
      };
    case GET_EMPLOYE_SUCCESS:
      // console.log(
      //   "************Reducer getEmploye****************",
      //   action.payload
      // );
      return {
        ...state,
        loading: false,
        employe: action.payload,
      };
    case GET_EMPLOYE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default employeReducer;
