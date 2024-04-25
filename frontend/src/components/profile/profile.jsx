import React from "react";
import { useState } from "react";
import man from "../../assets/360_F_243587666_DXAiHEZwwbQBDWQRmu2KtfP1qofmEmrH.webp";

export default function Profile() {
  const [name, setName] = useState("Md Aabid Hussain");
  const [email, setEmail] = useState("aabidhussainpas@gamil.com");
  const [phone, setPhone] = useState("+91 8264782290");
  const [address, setAddress] = useState("Ghaziabad");
  const [properties, setProperties] = useState([
    "Home",
    "Laptop",
    "Mobile",
    "Earpods",
  ]);
  return (
    <div>
      <div
        style={{ marginTop: "80px" }}
        className="container font-sans-serif  "
      >
        <img
          src={man}
          style={{ width: "200px", height: "200px" }}
          className="rounded-circle"
        />
      </div>

      <div  style={{borderRadius:"15px"}} className="container border shadow mt-2 p-3 font-sans-serif ">
        <h2 className="m-1">Contact Details</h2>
        <div className="container">
          <div className="row px-0 py-2">
            <div className="col">
              <h4>Name</h4>
            </div>
            <div className="col">
              <h4>Email</h4>
            </div>
          </div>
          <div className="row px-0 py-1">
            <div className="col">
              <div style={{borderRadius:"10px"}}  className="container  border shadow">
                <p className="text-dark d-f justify-content-center">{name}</p>
              </div>
            </div>
            <div className="col">
              <div  style={{borderRadius:"10px"}}  className="container border shadow">
                <p className="text-dark d-f justify-content-center">{email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-2 font-sans-serif">
          <div className="row  px-0 py-2">
            <div className="col">
              <h4>Phone No</h4>
            </div>
            <div className="col">
              <h4>Address</h4>
            </div>
          </div>
          <div className="row  px-0 py-1 ">
            <div className="col">
              <div style={{borderRadius:"10px"}}  className="container  border shadow">
                <p className="text-dark d-f justify-content-center">{phone}</p>
              </div>
            </div>
            <div className="col">
              <div style={{borderRadius:"10px"}}  className="container border shadow ">
                <p className="text-dark ">{address}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container  my-3 ">
          <button className="btn btn-primary">Update</button>
        </div>
      </div>

      <div style={{borderRadius:"15px"}} className="container my-3 border  shadow py-2 font-sans-serif">
        <div className="container my-1 mx-0">
          <h3>Properties</h3>
        </div>

        <div style={{borderRadius:"20px"}} className="container  -lg  mx-0 font-sans-serif ">
          <div className="row mt-0 p-0 border ">
            <div className="col-6 ">
              <p className="font-weight-lg">Property</p>{" "}
            </div>
            <div className="col">Status</div>
            <div className="col">Price</div>
          </div>
        </div>

        <div className="container border rounder-lg shadow mx-0 font-sans-serif">
          {properties.map((item,index) => (
            <div key={index} className="row border-bottom m-0 p-2">
              <div className="col-6">{item}</div>
              <div className="col"><span className="badge badge-success">Secured</span></div>
              <div className="col"></div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: "500px" }}></div>
    </div>
  );
}