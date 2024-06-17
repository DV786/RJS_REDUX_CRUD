import { connect } from "react-redux";
import EditEmpolye from "./EditEmploye";
import {
  getEmploye,
  getEmployeById,
  updateEmploye,
} from "../../redux/actions/employeAction";

const mapStateToProps = (state) => ({
  GetUserById: state.EmployeReducer.getEmployeById.employe,
});

const mapDispatchToProps = (dispatch) => ({
  getEmploye: () => {
    dispatch(getEmploye());
  },
  getEmployeById: (id) => {
    dispatch(getEmployeById(id));
  },
  updateEmploye: (id, parametrs) => {
    dispatch(updateEmploye(id, parametrs));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEmpolye);
