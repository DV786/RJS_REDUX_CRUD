import { all } from "@redux-saga/core/effects";
import EmployeSagas from "./employeSagas";

export default function* rootSaga() {
  yield all([EmployeSagas()]);
}
