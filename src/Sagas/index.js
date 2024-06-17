import { all } from "@redux-saga/core/effects";
import EmployeSaga from "./getEmploye";
import addEmploye from "./addEmploye";
import deleteEmploye from "./deleteEmploye";
import getByIdEmploye from "./editEmploye";
import updateEmploye from "./updateEmploye";

export default function* rootSaga() {
  yield all([
    EmployeSaga(),
    addEmploye(),
    deleteEmploye(),
    getByIdEmploye(),
    updateEmploye(),
  ]);
}
