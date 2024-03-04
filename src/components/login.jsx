import React from "react";
import NavBar from "./navbar";
import { RegBackground } from "./regbackground";
import LoginForm from "./loginform";

const Login=()=>{
    return(
        <>
        <div id="main">
        <NavBar/>
        <RegBackground/>
        <LoginForm/>
       

        </div>
       

        </>
    );
}
export default Login;