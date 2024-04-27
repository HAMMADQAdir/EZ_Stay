import React from "react";
import image from "../images/ezstay.jpg";


export default function Card() {
  return (
    <div class="card border rounded-lg" style={{ width: "500px" }}>
    <img src={image} className="card-img-top" alt="..." />
    <div className="card-body">
      <div className="container-fluid my-2 p-0 d-flex justify-content-between">
        <h2 className="card-title fs-3">Card title</h2>
        <span class="badge badge-lg text-bg-success fs-5" >Price</span>
      </div>

      <p className="card-text my-2">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <div className="container-fluid m-0 p-0 d-flex justify-content-center">
        
        <a href="#" className="btn btn-lg btn-primary">
          Buy/Sell
        </a>
      </div>
    </div>
  </div>
  );
}
