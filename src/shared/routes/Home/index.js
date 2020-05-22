import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import wizards from "./wizards.jpg";
// import "./index.css";
import Layout from "../../components/Layout";

const Home = (props) => {
  return <div>
    <h1>Home Page</h1>
  </div>
}
 const HomeContainer = () => {
   
  return (
    <Layout content={() => <Home></Home>}></Layout>
  );
 }

 export default HomeContainer;