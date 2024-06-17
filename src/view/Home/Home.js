import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../component/NavBar/NavBar";

const Home = (props) => {
  const { getEmploye, deleteEmploye, employe } = props;

  useEffect(() => {
    getEmploye();
  }, []);

  const employeDelete = (id) => {
    deleteEmploye(id);
    getEmploye();
  };

  return (
    <>
      <NavBar />
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
                        to={`/editEmploye/${data.id}`}
                      >
                        EDIT
                      </Link>
                      <button
                        className="btn btn-danger mr-2"
                        style={{ marginRight: "4px" }}
                        onClick={() => employeDelete(data.id)}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
