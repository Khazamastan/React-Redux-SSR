import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../../ducks";
import MenuList from "./MenuList";
import Layout from "../../components/Layout";

class Menu extends Component {
  static initialAction() {
    return fetchNews();
  }

  componentDidMount() {
    if (!this.props.news) {
      this.props.dispatch(Menu.initialAction());
    }
  }

  render() {
    const { news } = this.props;
    return <MenuList news={news} />;
  }
}

const mapStateToProps = state => ({
  news: state.news
});

const MenuContainer = (props) => {
  return <Layout type={'container'} content={() => <Menu {...props}></Menu>}></Layout>;
};

export default connect(mapStateToProps)(MenuContainer);
