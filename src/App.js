import React from "react";
import { Route, Routes } from "react-router-dom";
import EmployeNaigation from "./Component/EmployeNaigation";
import EmployeHome from "./Pages/EHome";
import EmpolyeAdd from "./Pages/Eadd";
import EditEmpolye from "./Pages/Eedit";

function App() {
  return (
    <div className="App">
      <EmployeNaigation />
      <Routes>
        <Route path="/" exact element={<EmployeHome />} />
        <Route path="/add" exact element={<EmpolyeAdd />} />
        <Route path="/edit/:id" exact element={<EditEmpolye />} />
      </Routes>
    </div>
  );
}

export default App;
