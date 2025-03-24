import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

fuction Home() {
    const navigate = useNavigate();

    return(
        <div>
        <h1>Welcome to the Home Page</h1>
        <button onClick={() => navigate("/about")}>Go to About</button>
        </div>
    );
}
export default Home;