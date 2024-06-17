import {
  addEmployeAction,
  deleteEmployeAction,
  getEmployeAction,
  getIDEmployeAction,
  updateEmployeAction,
} from "../constants/actionConstants";

const addEmploye = {
  addEmploye: {},
};
const employe = {
  employe: [],
};
const updateEmploye = {
  updateEmploye: [],
};

const getEmployeById = {
  getEmployeById: [],
};
const intialState = {
  ...addEmploye,
  ...employe,
  ...getEmployeById,
  ...updateEmploye,
  apiError: null,
};

const EmployeReducer = (state = intialState, action) => {
  /*************************GET EMPLOYE******************************** */
  switch (action.type) {
    case getEmployeAction.GET_EMPLOYE:
      return {
        ...state,
        apiLoading: true,
      };
    case getEmployeAction.GET_EMPLOYE_SUCCESS:
      return {
        ...state,
        employe: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    case getEmployeAction.GET_EMPLOYE_FAILED:
      return {
        ...state,
        employe: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };

    /***************************ADD EMPOLYE************************************** */
    case addEmployeAction.ADD_EMPLOYE_REQUESTED:
      return {
        ...state,
        apiLoading: true,
      };
    case addEmployeAction.ADD_EMPLOYE_SUCCESS:
      //  console.log("************Reducer addEmploye****************",action.payload);
      return {
        ...state,
        addEmploye: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    case addEmployeAction.ADD_EMPLOYE_FAILED:
      return {
        ...state,
        addEmploye: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };

    /******************************DELETE EMPOLYE*************************************** */

    case deleteEmployeAction.DELETE_EMPLOYE_REQUESTED:
      return {
        ...state,
        apiLoading: true,
      };
    case deleteEmployeAction.DELETE_EMPLOYE_SUCCESS:
      return {
        ...state,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    case deleteEmployeAction.DELETE_EMPLOYE_FAILED:
      return {
        ...state,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };

    /******************************GETID EMPLOYE******************************************** */
    case getIDEmployeAction.GET_EMPLOYE_BY_ID_REQUESTED:
      return {
        ...state,
        apiLoading: true,
      };
    case getIDEmployeAction.GET_EMPLOYE_BY_ID_SUCCESS:
      // console.log(
      //   "************Reducer GetEmployeById****************",
      //   action.payload
      // );
      return {
        ...state,
        getEmployeById: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    case getIDEmployeAction.GET_EMPLOYE_BY_ID_FAILED:
      return {
        ...state,
        getEmployeById: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };

    /**********************************UPDATE EMPLOYE******************************************* */
    case updateEmployeAction.UPDATE_EMPLOYE:
      return {
        ...state,
        apiLoading: true,
      };
    case updateEmployeAction.UPDATE_EMPLOYE_SUCCESS:
      // console.log(
      //   "****************UPDATE REDUCER**************************",
      //   action.payload
      // );
      return {
        ...state,
        updateEmploye: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };
    case updateEmployeAction.UPDATE_EMPLOYE_FAILED:
      return {
        ...state,
        updateEmploye: action.payload,
        apiLoading: action.payload.apiLoading,
        apiGetDataSuccess: action.payload.apiGetDataSuccess,
        apiGetDataFail: action.payload.apiGetDataFail,
      };

    default:
      return state;
  }
};
export default EmployeReducer;
