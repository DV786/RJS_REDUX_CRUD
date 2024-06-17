import { call, put, takeEvery } from "redux-saga/effects";
import { SuccessAddEmpoloye, failedAddEmploye } from "../Redux/Action/empolye";
import axios from "axios";

const EmployeADD = async (employe) =>
  await axios.post("http://localhost:4005/Employe", employe);

function* addEmploye({ payload }) {
  // console.log("sagas data--->", payload);
  try {
    const empolye = yield call(EmployeADD, payload);
    yield put(SuccessAddEmpoloye(empolye.data));
    // console.log("get Emplye From saga file", empolye);
  } catch (error) {
    yield put(failedAddEmploye(error.empolye));
  }
}

function* watchAddEmploye() {
  yield takeEvery("ADD_EMPLOYE_REQUESTED", addEmploye);
}

export default watchAddEmploye;
