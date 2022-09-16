import React from "react";
import "./header.scss";
import { useState, useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";

function Header() {
  const [bildChange, setBildChange] = useState("hi");
  // const adressa = () => {
  //   {
  //     <h1>{Adresse}</h1>;
  //   }
  // };
  // useEffect(() => {}, []);

  return (
    <div className="main-div">
      <h1>CREATIVE GLASS SRL</h1>
      <hr></hr>

      <h3>Грузовые перевозки</h3>
      <hr></hr>
      <h3 className="logic">Logistica</h3>
      {/* <button onClick={adressa}> click</button> */}
      <Sidebar />

      <img src="lkw.jpg" alt="lkw" />
    </div>
  );
}

export default Header;
