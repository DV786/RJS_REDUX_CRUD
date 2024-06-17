import { connect } from "react-redux";
import Home from "./Home";
import { getEmploye, deleteEmploye } from "../../redux/actions/employeAction";

const mapStateToProps = (state) => {
  return {
    employe: state.EmployeReducer.employe.employe,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmploye: () => {
      dispatch(getEmploye());
    },
    deleteEmploye: (id) => {
      dispatch(deleteEmploye(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
