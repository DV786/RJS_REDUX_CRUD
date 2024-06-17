import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteEmploye, getEmploye } from "../Redux/Action/empolye";
import { Link } from "react-router-dom";

const EmployeHome = (props) => {
  let dispatch = useDispatch();

  let employe = useSelector((state) => state.employeReducer.employe);
  // console.log("emp", employe);

  useEffect(() => {
    dispatch(getEmploye());
  }, [dispatch]);

  const employeDelete = (id) => {
    // console.log("Component id ---> ", id);
    dispatch(deleteEmploye(id));
    dispatch(getEmploye());
  };

  return (
    <div className="container" style={{ marginBottom: "22px" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employe &&
            employe.map((data) => {
              // console.log("data", data);
              return (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.Name}</td>
                  <td>{data.Email}</td>
                  <td>{data.Phone}</td>
                  <td>{data.Address}</td>
                  <td>
                    <Link
                      className="btn btn-primary mr-2"
                      style={{ marginRight: "4px" }}
                      to={`/edit/${data.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mr-2"
                      style={{ marginRight: "4px" }}
                      onClick={() => employeDelete(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeHome;
