import {
  GET_EMPLOYE,
  GET_EMPLOYE_SUCCESS,
  GET_EMPLOYE_FAILED,
  ADD_EMPLOYE_REQUESTED,
  ADD_EMPLOYE_SUCCESS,
  ADD_EMPLOYE_FAILED,
  DELETE_EMPLOYE_REQUESTED,
  DELETE_EMPLOYE_SUCCESS,
  DELETE_EMPLOYE_FAILED,
  GET_EMPLOYE_BY_ID_REQUESTED,
  GET_EMPLOYE_BY_ID_SUCCESS,
  GET_EMPLOYE_BY_ID_FAILED,
  UPDATE_EMPLOYE,
  UPDATE_EMPLOYE_SUCCESS,
  UPDATE_EMPLOYE_FAILED,
} from "../Constant/empolye";

/****************GET EMPOLYE***************** */
export const getEmploye = () => ({
  type: GET_EMPLOYE,
});

export const getEmployeSuccess = (employe) => ({
  type: GET_EMPLOYE_SUCCESS,
  payload: employe,
});

export const getEmployeFailed = (error) => ({
  type: GET_EMPLOYE_FAILED,
  payload: error,
});
/********************addEmploye*********************** */
export const addEmpolye = (data) => {
  //console.log("action data-->", data);
  return {
    type: ADD_EMPLOYE_REQUESTED,
    payload: data,
  };
};

export const SuccessAddEmpoloye = (addEmploye) => {
  // console.log("action emp", addEmploye);
  return {
    type: ADD_EMPLOYE_SUCCESS,
    payload: addEmploye,
  };
};

export const failedAddEmploye = (error) => ({
  type: ADD_EMPLOYE_FAILED,
  payload: error,
});

/****************DeleteEmploye***************** */
export const deleteEmploye = (id) => {
  // console.log("action id--->", id);
  return {
    type: DELETE_EMPLOYE_REQUESTED,
    id,
  };
};

export const deleteEmployeSuccess = () => ({
  type: DELETE_EMPLOYE_SUCCESS,
});

export const deleteEmployeFailed = (error) => ({
  type: DELETE_EMPLOYE_FAILED,
  payload: error,
});

/*****************************EDIT EMPOLYE BY ID*********************************** */

export const getEmployeById = (id) => {
  // console.log("action id--->", id);
  return {
    type: GET_EMPLOYE_BY_ID_REQUESTED,
    payload: id,
  };
};

export const getEmployeByIdSuccess = (data) => {
  // console.log("action data----->", data);
  return {
    type: GET_EMPLOYE_BY_ID_SUCCESS,
    payload: data,
  };
};

export const getEmployeByIdFailed = (error) => ({
  type: GET_EMPLOYE_BY_ID_FAILED,
  payload: error,
});

/****************************UPDATE EMPOLYE*********************************** */

export const updateEmploye = (id, data) => {
  // console.log("action id---->", id);
  // console.log("action data--->", data);
  return {
    type: UPDATE_EMPLOYE,
    payload: { id, data },
  };
};

export const updateEmployeSuccessful = (data) => {
  //console.log("action data", data);
  return {
    type: UPDATE_EMPLOYE_SUCCESS,
    payload: data,
  };
};

export const updateEmployeeFailed = (error) => ({
  type: UPDATE_EMPLOYE_FAILED,
  payload: error,
});

// const updateEmp = (updateData) => ({
//   type: UPDATE_EMPLOYE,
//   payload: updateData,
// });

// const errorUpdateEmploye = (error) => ({
//   type: ERROR_IN_UPDATE_EMPLOYE,
//   payload: error,
// });

// export const updateEmploye = (updateEmploye, id) => {
//   return (dispatch) => {
//     try {
//       axios
//         .put("http://localhost:4005/Employe/" + id, updateEmploye)
//         .then((res) => {
//           console.log("res", res);
//           dispatch(updateEmp(res));
//           dispatch(getEmploye());
//         });
//     } catch (error) {
//       errorUpdateEmploye("Here is Some Error to Delete the Employe", error);
//     }
//   };
// };
