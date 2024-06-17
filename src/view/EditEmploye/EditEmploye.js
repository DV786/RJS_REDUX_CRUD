import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmploye = (props) => {
  const { GetUserById, getEmploye, getEmployeById, updateEmploye } = props;
  const [formemploye, setEmploye] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
  });

  const { id } = useParams();

  const navigate = useNavigate();
  const [error, setError] = useState("");

  let { Name, Email, Phone, Address } = formemploye;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setEmploye({
      ...formemploye,
      [name]: value,
    });
  };

  useEffect(() => {
    getEmployeById(id);
  }, [id]);

  useEffect(() => {
    setEmploye({
      ...GetUserById,
    });
  }, [GetUserById]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Name || !Email || !Phone || !Address) {
      setError("Warning: Please Fill the all Input");
    } else {
      updateEmploye(id, formemploye);
      getEmploye();
      setError("");
      navigate("/");
    }
  };
  return (
    <div className="container" style={{ marginTop: "22px" }}>
      <h3>Edit Empolye</h3>
      <h4 style={{ color: "red" }}>{error}</h4>
      <div className="row" style={{ marginTop: "17px" }}>
        <div className="col-12">
          <form>
            {/* <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Id"
                name="Id"
                value={Id}
                onChange={(e) => handleInputChange(e)}
              />
            </div> */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Name"
                name="Name"
                value={Name}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Email"
                name="Email"
                value={Email}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Phone"
                name="Phone"
                value={Phone}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Address"
                name="Address"
                value={Address}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="d-grid gap-2">
              <button
                className="btn btn-primary"
                type="button"
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </button>
              <br />
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEmploye;
