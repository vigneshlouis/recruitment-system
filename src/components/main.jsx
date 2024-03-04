import React from "react";
import NavBar from "./navbar";
import MainText from "./mainText";
import "../main.css";
const MainPage=()=>{
    return(
        <>
        <NavBar/>
        <div className="container-fluid main">
            <MainText/>

        </div>
        </>
    );
}
export default MainPage;