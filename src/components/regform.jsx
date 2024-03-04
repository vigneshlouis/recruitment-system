import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Form = () => {
   
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

  
    const handleSubmit = (e) => {
        e.preventDefault();

      
        setUsernameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');

     
        if (!username) {
            setUsernameError('Username is required');
        }

        
        if (!email) {
            setEmailError('Email is required');
        }

       
        if (!password) {
            setPasswordError('Password is required');
        }

       
        if (!confirmPassword) {
            setConfirmPasswordError('Please confirm your password');
        } else if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match');
        }

       
        if (username && email && password && confirmPassword === password) {
        
            console.log('Form submitted with username:', username, 'email:', email, 'and password:', password);
        }
    };

    return (
        <>
            <div className="container text-center" id="formbox">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                        <h2 className="text-center mb-4">Register</h2>
                        <form onSubmit={handleSubmit} className='m-3'>
                            <div className="mb-3">
                                <label htmlFor="username" className="label float-start">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                {usernameError && <div className="text-danger">{usernameError}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="label float-start">Email</label>
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
                                <label htmlFor="password" className="label float-start">Password</label>
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
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="label float-start">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    placeholder="Confirm your password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {confirmPasswordError && <div className="text-danger">{confirmPasswordError}</div>}
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ marginTop: "20px" }}>Register</button>
                            <div>Already have an account? <Link to="/login">Login</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
