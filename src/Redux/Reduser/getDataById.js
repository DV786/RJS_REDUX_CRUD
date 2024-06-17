import {
  GET_EMPLOYE_BY_ID_REQUESTED,
  GET_EMPLOYE_BY_ID_SUCCESS,
  GET_EMPLOYE_BY_ID_FAILED,
} from "../Constant/empolye";

const initialState = {
  getEmployeById: [],
  getEmployeByIdError: null,
};

const getDataByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    /************************EDIT EMPOLYE BY ID******************************** */
    case GET_EMPLOYE_BY_ID_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case GET_EMPLOYE_BY_ID_SUCCESS:
      // console.log(
      //   "************Reducer GetEmployeById****************",
      //   action.payload
      // );
      return {
        ...state,
        loading: false,
        getEmployeById: action.payload,
      };
    case GET_EMPLOYE_BY_ID_FAILED:
      return {
        ...state,
        loading: false,
        getEmployeByIdError: action.payload,
      };
    default:
      return state;
  }
};
export default getDataByIdReducer;
