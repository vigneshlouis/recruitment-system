import React, { useState } from "react";
import "../form.css";
const LoginForm = () => {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    
        setEmailError("");
        setPasswordError("");

    
        if (!email) {
            setEmailError("Email is required");
        }

       
        if (!password) {
            setPasswordError("Password is required");
        }

       
        if (email && password) {
          
            console.log("Form submitted with email:", email, "and password:", password);
        }
    };

    return (
        <>
            <div className="formcontainer text-center" id="formbox">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit} className="m-4">
                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {emailError && <div className="text-danger">{emailError}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {passwordError && <div className="text-danger">{passwordError}</div>}
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
