import { connect } from "react-redux";
import AddEmpolye from "./AddEmploye";
import { addEmploye, getEmploye } from "../../redux/actions/employeAction";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addEmploye: (parameter) => {
    dispatch(addEmploye(parameter));
  },
  getEmploye: () => {
    dispatch(getEmploye());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEmpolye);
