import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../Redux/Constant/empolye";
import {
  deleteEmployeSuccess,
  deleteEmployeFailed,
} from "../Redux/Action/empolye";
import axios from "axios";
const deleteEmploye = async (id) =>
  await axios.delete(`http://localhost:4005/Employe/${id}`);

function* DeleteEmploye({ id }) {
  // console.log("id saga", id);
  try {
    const empolye = yield call(deleteEmploye, id);
    yield put(deleteEmployeSuccess(id));
    // console.log("*****Saga Delete Emp*******", empolye);
  } catch (error) {
    yield put(deleteEmployeFailed());
  }
}

function* watchDeleteEmploye() {
  yield takeLatest(types.DELETE_EMPLOYE_REQUESTED, DeleteEmploye);
}
export default watchDeleteEmploye;
