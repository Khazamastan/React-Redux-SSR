import React, { Component } from "react";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import ChooseType from "../../views/ChooseType";
import UserInfo from "../../views/UserInfo";
import { connect } from "react-redux";
import { fetchRestaurant } from "./actions";

class Home extends Component {
  constructor(){
    super();
  }
  static initialAction() {
    return fetchRestaurant();
  }

  componentDidMount() {
    if (!this.props.restaurants) {
      this.props.dispatch(Home.initialAction());
    }
  }
  render(){
    const {restaurants} = this.props;
    return (
      <div>
        <Banner img={"media/banner.jpg"} height={350} />
        <ChooseType></ChooseType>
        <div className="pt-40 pb-40"></div>
        <UserInfo></UserInfo>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.data,
});

class HomeContainer extends Component {
  render(){
    return <Layout data={this.props.restaurants && this.props.restaurants[0]} content={() => <Home  {...this.props}></Home>}></Layout>;
  }
};

export default connect(mapStateToProps, null)(HomeContainer);
