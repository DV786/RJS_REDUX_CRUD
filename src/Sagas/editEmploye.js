import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "../Redux/Constant/empolye";
import {
  getEmployeByIdSuccess,
  getEmployeByIdFailed,
} from "../Redux/Action/empolye";
import axios from "axios";

const fetchGetUsers = (value) =>
  axios.get(`http://localhost:4005/Employe/${value}`);
function* GetEmploye(action) {
  try {
    // console.log("Sagaas id--->", action.payload);
    const empolye = yield call(fetchGetUsers, action.payload);
    yield put(getEmployeByIdSuccess(empolye.data));
    // console.log("get Emplye From saga file", empolye);
  } catch (error) {
    yield put(getEmployeByIdFailed(error.empolye));
  }
}

function* watchEmployee() {
  yield takeEvery(types.GET_EMPLOYE_BY_ID_REQUESTED, GetEmploye);
}

export default watchEmployee;
