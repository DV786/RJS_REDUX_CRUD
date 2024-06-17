import {
  UPDATE_EMPLOYE,
  UPDATE_EMPLOYE_FAILED,
  UPDATE_EMPLOYE_SUCCESS,
} from "../Constant/empolye";

const intialState = {
  updateEmploye: [],
  updateError: null,
};

const updateReducer = (state = intialState, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYE:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_EMPLOYE_SUCCESS:
      // console.log(
      //   "****************UPDATE REDUCER**************************",
      //   action.payload
      // );
      return {
        ...state,
        updateEmploye: action.payload,
        loading: false,
      };
    case UPDATE_EMPLOYE_FAILED:
      return {
        ...state,
        loading: false,
        updateError: action.payload,
      };
    default:
      return state;
  }
};
export default updateReducer;
