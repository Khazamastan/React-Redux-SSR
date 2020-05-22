import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import wizards from "./wizards.jpg";
// import "./index.css";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import ChooseType from '../../views/ChooseType';
import UserInfo from '../../views/UserInfo';

const Home = (props) => {
  return <div>
    <Banner img={'media/banner.jpg'} height={350}/>
    <ChooseType></ChooseType>
    <div className="pt-40 pb-40"></div>
    <UserInfo></UserInfo>
  </div>
}
 const HomeContainer = () => {
   
  return (
    <Layout content={() => <Home></Home>}></Layout>
  );
 }

 export default HomeContainer;