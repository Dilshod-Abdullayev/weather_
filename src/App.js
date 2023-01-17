import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
export default function App() {
  const [val, setVal] = useState("xonqa");
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const sendval = () => {
    alert(val);
  };
  console.log(val + "app");
  return (
    <>
      <div className="input-group">
        <input
          width={"150px"}
          type="text"
          className="form-control"
          placeholder="Search weather in location"
          value={val}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button onClick={sendval} className="btn btn-secondary" type="button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <Card location={val} />
    </>
  );
}
