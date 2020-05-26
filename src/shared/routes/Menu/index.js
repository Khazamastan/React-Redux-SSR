import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "./actions";
import MenuList from "./MenuList";
import Layout from "../../components/Layout";

class Menu extends Component {
  static initialAction() {
    return fetchProducts();
  }

  componentDidMount() {
    // if (!this.props.menu) {
    this.props.dispatch(Menu.initialAction());
    // }
  }

  render() {
    const { menu } = this.props;
    console.log(this.props);
    return <MenuList products={menu} />;
  }
}

const mapStateToProps = (state) => ({
  menu: [],// state.menu,
  restaurants: state.restaurants.data
});

class MenuContainer extends Component {
  render() {
    return (
      <Layout
        type={"container"}
        data={this.props.restaurants && this.props.restaurants[0]}
        content={() => <Menu {...this.props}></Menu>}
      ></Layout>
    );
  }
}

export default connect(mapStateToProps, null)(MenuContainer);
