import { combineReducers } from "redux";
import employeReducer from "./empolye";
import addEmployeReducer from "./addEmploye";
import deleteEmployeReducer from "./deleteEmploye";
import getDataByIdReducer from "./getDataById";
import updateReducer from "./updateEmploye";

export default combineReducers({
  employeReducer: employeReducer,
  addEmployeReducer: addEmployeReducer,
  deleteEmployeReducer: deleteEmployeReducer,
  getDataByIdReducer: getDataByIdReducer,
  updateReducer: updateReducer,
});
