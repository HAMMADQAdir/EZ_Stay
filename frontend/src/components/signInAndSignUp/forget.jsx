import React, { useState } from 'react';
import { auth } from "../firebaseConfig/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';

export default function Forget() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(""); // State for success message
    const navigate = useNavigate();

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loader
       
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setMessage("Password reset email sent successfully."); // Set success message
                setTimeout(() => {
                    setMessage(""); // Clear message after a few seconds
                    navigate('/login');
                }, 2000); 
            })
            .catch(err => {
                console.log(err);
                alert("Error sending password reset email. Please try again.");
            })
            .finally(() => {
                setLoading(false); // Stop loader
            });
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
        }}>
            {loading ? (
               <Loader Loading={loading} />
            ) : (
                <form onSubmit={handleForgotPassword}>
                    <h3>Forgot Password</h3>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Enter email"
                        />
                        <button type="submit" className="btn btn-primary" style={{ margin: "20px" }}>
                            Submit
                        </button>
                    </div>
                    {message && <p className="text-success">{message} redirecting to login page</p>}
                </form>
            )}
        </div>
    );
}
