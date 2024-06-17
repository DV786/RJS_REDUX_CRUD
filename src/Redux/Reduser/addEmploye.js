import {
  ADD_EMPLOYE_REQUESTED,
  ADD_EMPLOYE_SUCCESS,
  ADD_EMPLOYE_FAILED,
} from "../Constant/empolye";

const intialState = {
  addEmploye: {},
  addError: null,
};

const addEmployeReducer = (state = intialState, action) => {
  /*************************ADD EMPOLYE******************************** */
  switch (action.type) {
    case ADD_EMPLOYE_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case ADD_EMPLOYE_SUCCESS:
      //  console.log("************Reducer addEmploye****************",action.payload);
      return {
        ...state,
        addEmploye: action.payload,
        loading: false,
      };
    case ADD_EMPLOYE_FAILED:
      return {
        ...state,
        loading: false,
        addError: action.payload,
      };
    default:
      return state;
  }
};
export default addEmployeReducer;
