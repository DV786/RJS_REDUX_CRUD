import * as actions from "../constants/actionConstants";

/****************GET EMPOLYE***************** */
export const getEmploye = () => {
  return {
    type: actions.getEmployeAction.GET_EMPLOYE,
  };
};

export const getEmployeSuccess = (employe) => {
  console.log("action", employe);
  return {
    type: actions.getEmployeAction.GET_EMPLOYE_SUCCESS,
    payload: employe,
  };
};

export const getEmployeFailed = (error) => ({
  type: actions.getEmployeAction.GET_EMPLOYE_FAILED,
  payload: error,
});
/********************addEmploye*********************** */
export const addEmploye = (data) => {
  return {
    type: actions.addEmployeAction.ADD_EMPLOYE_REQUESTED,
    payload: data,
  };
};

export const SuccessAddEmploye = (addEmploye) => {
  return {
    type: actions.addEmployeAction.ADD_EMPLOYE_SUCCESS,
    payload: addEmploye,
  };
};

export const failedAddEmploye = (error) => ({
  type: actions.addEmployeAction.ADD_EMPLOYE_FAILED,
  payload: error,
});

/****************DeleteEmploye***************** */
export const deleteEmploye = (id) => {
  console.log("action id--->", id);
  return {
    type: actions.deleteEmployeAction.DELETE_EMPLOYE_REQUESTED,
    payload: id,
  };
};

export const deleteEmployeSuccess = () => ({
  type: actions.deleteEmployeAction.DELETE_EMPLOYE_SUCCESS,
});

export const deleteEmployeFailed = (error) => ({
  type: actions.deleteEmployeAction.DELETE_EMPLOYE_FAILED,
  payload: error,
});

/*****************************EDIT EMPOLYE BY ID*********************************** */

export const getEmployeById = (id) => {
  return {
    type: actions.getIDEmployeAction.GET_EMPLOYE_BY_ID_REQUESTED,
    payload: id,
  };
};

export const getEmployeByIdSuccess = (data) => {
  return {
    type: actions.getIDEmployeAction.GET_EMPLOYE_BY_ID_SUCCESS,
    payload: data,
  };
};

export const getEmployeByIdFailed = (error) => ({
  type: actions.getIDEmployeAction.GET_EMPLOYE_BY_ID_FAILED,
  payload: error,
});

/****************************UPDATE EMPOLYE*********************************** */

export const updateEmploye = (id, data) => {
  return {
    type: actions.updateEmployeAction.UPDATE_EMPLOYE,
    payload: { id, data },
  };
};

export const updateEmployeSuccessful = (data) => {
  return {
    type: actions.updateEmployeAction.UPDATE_EMPLOYE_SUCCESS,
    payload: data,
  };
};

export const updateEmployeeFailed = (error) => ({
  type: actions.updateEmployeAction.UPDATE_EMPLOYE_FAILED,
  payload: error,
});
