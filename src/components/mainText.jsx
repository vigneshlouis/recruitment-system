import {Link} from "react-router-dom";
const MainText=()=>
{
    return(
        <>
        <div className="container maintext ">
            <div className="row">
            <div className="col-lg-8">
                <div className="row ">
            <h1 className="text">Unlock Your Potential, Secure Your Future</h1>
            <h2 >we understand that talent is the driving force behind every successful organization. That's why we've created a revolutionary recruitment platform designed to connect exceptional talent with incredible opportunities.</h2>
            </div>
             <div className="row" >
                <Link to="/Registration">
                <button className="btn btnstart">Get Started</button>
                </Link>
             </div>
            </div>
            <div className="col-lg-4 mainimg">
                <img src="images\pexels-resume-genius-18848927.jpg"/>
                </div>
                </div>
            </div></>
    );
}
export default MainText;