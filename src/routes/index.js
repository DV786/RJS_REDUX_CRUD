import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../view/Home";
import AddEmploye from "../view/AddEmploye";
import EditEmploye from "../view/EditEmploye";

function Routers(props) {
  const { history } = props;
  return (
    <BrowserRouter basename="/" location={history} navigator={history}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addEmploye" element={<AddEmploye />} />
        <Route exact path="/editEmploye/:id" element={<EditEmploye />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
