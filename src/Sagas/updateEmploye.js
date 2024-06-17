import { call, put, takeEvery } from "redux-saga/effects";
import {
  updateEmployeSuccessful,
  updateEmployeeFailed,
} from "../Redux/Action/empolye";
import axios from "axios";

const EmployeUPDATE = async (id, data) => {
  // console.log("Api Id", id);
  // console.log("Api data", data);
  return await axios.put(`http://localhost:4005/Employe/` + id, data);
};

function* updateEmploye({ payload }) {
  //  console.log("sagas id--->", payload.id);
  //  console.log("data in sagas--->", payload.data);
  try {
    const empolye = yield call(EmployeUPDATE, payload.id, payload.data);
    yield put(updateEmployeSuccessful(empolye.data));
    // console.log("get Emplye From saga file", empolye);
  } catch (error) {
    yield put(updateEmployeeFailed(error.empolye));
  }
}

function* watchAddEmploye() {
  yield takeEvery("UPDATE_EMPLOEY", updateEmploye);
}

export default watchAddEmploye;

// import { call, put, takeEvery } from "redux-saga/effects";
// import * as types from "../Redux/Constant/empolye";
// import {
//   updateEmployeSuccessful,
//   updateEmployeeFailed,
// } from "../Redux/Action/empolye";
// import axios from "axios";

// const updateEmployeData = () => axios.put("http://localhost:4005/Employe/");

// function* newUpdateEmploye(action) {
//   console.log("sagas id--->", action);
//   try {
//     const employe = yield call(updateEmployeData);
//     yield put(updateEmployeSuccessful(employe.data));
//     console.log("Saga Employee data---->", employe);
//   } catch (error) {
//     yield put(updateEmployeeFailed(error));
//   }
// }

// function* watchUpdateEmploye() {
//   takeEvery("UPDATE_EMPLOYE", newUpdateEmploye);
// }

// export default watchUpdateEmploye;
