import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import wizards from "./wizards.jpg";
// import "./index.css";
import Layout from "../../components/Layout";
import Banner from "../../components/Layout";

const Home = (props) => {
  return <div>
    <Banner img={'media/banner.jpg'}/>
  </div>
}
 const HomeContainer = () => {
   
  return (
    <Layout content={() => <Home></Home>}></Layout>
  );
 }

 export default HomeContainer;