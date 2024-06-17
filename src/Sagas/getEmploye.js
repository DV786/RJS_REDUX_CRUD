import { call, put, takeEvery } from "redux-saga/effects";
import * as types from "../Redux/Constant/empolye";
import { getEmployeSuccess, getEmployeFailed } from "../Redux/Action/empolye";
import axios from "axios";

const fetchGetUsers = () => axios.get("http://localhost:4005/Employe");

function* GetEmploye(action) {
  try {
    const empolye = yield call(fetchGetUsers);
    yield put(getEmployeSuccess(empolye.data));
    // console.log("get Emplye From saga file", empolye);
  } catch (error) {
    yield put(getEmployeFailed(error.empolye));
  }
}

function* watchEmployee() {
  yield takeEvery(types.GET_EMPLOYE, GetEmploye);
}

export default watchEmployee;
