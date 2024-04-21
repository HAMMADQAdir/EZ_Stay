import React, { useState } from "react";
import { auth } from "../firebaseConfig/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userId:"",
    FirstName: "",
    LastName: "",
    STREETNO: 0,
    Locality: "",
    Pincode: ""
    
    
  });

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      formData.userId = user.uid;
      console.log("User created:", user);
      await RegisteringInMySql(formData);
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating user:", errorCode, errorMessage);
    } finally {
      setLoading(false);
    }
    navigate("/");
  };

  return (
    <>
    <div className="backGround" style={{marginTop:'100px'}}>
      <div className="form_container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 100)",
          width: "100vw",
          flexWrap: "nowrap",
          margin: "10px",
          flexDirection: "column", 
        }}
      >
        <form onSubmit={register} style={{width:"40%"}}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              value={formData.FirstName}
              onChange={(e) => setFormData({ ...formData, FirstName: e.target.value })}
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              value={formData.LastName}
              onChange={(e) => setFormData({ ...formData, LastName: e.target.value })}
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <div className="mb-3">
            <label>Phone Number</label>
            <input
              type="text"
           
              className="form-control"
              placeholder="Enter Phone number"
            />
          </div>
          <div className="mb-3">
            <label>Pincode</label>
            <input
              type="text"
              value={formData.Pincode}
              onChange={(e) => setFormData({ ...formData, Pincode: e.target.value })}
              className="form-control"
              placeholder="Pincode"
            />
          </div>
          <div className="mb-3">
            <label>Street Number</label>
            <input
              type="number"
              value={formData.STREETNO}
              onChange={(e) => setFormData({ ...formData, STREETNO: e.target.value })}
              className="form-control"
              placeholder="Street Number"
            />
          </div>
          <div className="mb-3">
            <label>Locality</label>
            <input
              type="text"
              value={formData.Locality}
              onChange={(e) => setFormData({ ...formData, Locality: e.target.value })}
              className="form-control"
              placeholder="Enter Locality"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered{" "}
            <span
              onClick={() => navigate("/login")}
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "blue",
              }}
            >
              Sign in
            </span>
          </p>
        </form>
      </div>
      </div>
    </>
  );
}

const RegisteringInMySql = async (formData) => {
  try {
    const response = await axios.post("/register", formData);
    console.log(response.data);
    
  } catch (error) {
    console.error("Error registering user:", error);
  }
};