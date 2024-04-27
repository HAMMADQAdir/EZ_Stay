import React from "react";
import { useState, useEffect } from "react";
import GridLayout from "react-grid-layout";
import Card from "./card";

export default function filter() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];
  return (
    <div className="container-fluid my-5 text-center ">
    <div className="row m-0 py-3  px-0 d-flex align-items-center justify-content-center">
      <div className="col-3  my-2 mx-1">
        <Card />
      </div>
      <div className="col-3  my-2 mx-1">
        <Card />
      </div>
      <div className="col-3 my-2 mx-1">
        <Card />
      </div>
       <div className="col-3 my-2 mx-1">
        <Card />
      </div>
      <div className="col-3 my-2 mx-1">
        <Card />
      </div>
      <div className="col-3 my-2 mx-1">
        <Card />
      </div>
    </div>
  </div>
  
  );
}
