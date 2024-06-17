import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmpolye, getEmploye } from "../Redux/Action/empolye";

const NewEmployeeForm = () => {
  const [formempolye, setEmpolye] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { Name, Email, Phone, Address } = formempolye;
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setEmpolye({
      ...formempolye,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Name || !Email || !Phone || !Address) {
      setError("Warning: Please Fill the all Input");
    } else {
      dispatch(addEmpolye(formempolye));
      dispatch(getEmploye());
      setError("");
      navigate("/");
    }
  };

  return (
    <div className="container" style={{ marginTop: "22px" }}>
      <h3>Add Empolye</h3>
      <h4 style={{ color: "red" }}>{error}</h4>
      <div className="row" style={{ marginTop: "17px" }}>
        <div className="col-8">
          <form>
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

export default NewEmployeeForm;
