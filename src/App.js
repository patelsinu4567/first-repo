import react from "react";
import { BrowserRouter as router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/about";
import contact from "./components/contact";

function NotFound() {
  return(
    <div style={{ textAling:"center",marginTop:"50px"}}>
      <h1>404-page Not Found</h1>
      <p>The page your are Looking for does not exist.</p>
    </div>
  );
}

function app() {
  return (
    <router>
      <Navbar />{/*Navigation bar will be visible on all pages */}
      <routes>
        <Route path="/" element={<home/>} />
        <Route path="/" About={<About/>} />
        <Route path="/" contact={<contact/>} />
        <Route path="/" element={<NotFound/>} />{/*Catch-all route */}
         </routes>
    </router>
    <
  )
}