import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Menu";
import Header from "./Header";
import Home from "./Home";
import Sherlock from "./Sherlock";
import Friends from "./Friends";
import Got from "./Got";
import Dark from "./Dark";
import Breakbad from "./Breakbad";
import Tbbt from "./Tbbt";
import Footer from "./Footer";
import { SERIES } from "../Shared/Series";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: SERIES,
    };
  }

  onDishSelect(seriesId) {
    this.setState({ selectedseries: seriesId });
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    const SeriesWithId = ({ match }) => {
      if (match.params.seriesId == 1) {
        return <Sherlock />;
      }
      if (match.params.seriesId == 2) {
        return <Friends />;
      }
      if (match.params.seriesId == 3) {
        return <Got />;
      }
      if (match.params.seriesId == 4) {
        return <Dark />;
      }
      if (match.params.seriesId == 5) {
        return <Breakbad />;
      }
      if (match.params.seriesId == 6) {
        return <Tbbt />;
      }
    };

    return (
      <div>
        <Header />
        <br />
        <br />
        <div className="container">
          {/* <BrowserRouter> */}
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route
              exact
              path="/menu"
              component={() => <Menu series={this.state.series} />}
            />
            <Route path="/menu/:seriesId" component={SeriesWithId} />
            <Redirect to="/home" />
          </Switch>
          {/* </BrowserRouter> */}
        </div>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Main;
