import React, { Component } from "react";
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
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

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
    const MenuPage = () => {
      return <Menu series={this.state.series} />;
    };

    const SeriesWithId = ({ match }) => {
      if (parseInt(match.params.seriesId) === 1) {
        return <Sherlock />;
      }
      if (parseInt(match.params.seriesId) === 2) {
        return <Friends />;
      }
      if (parseInt(match.params.seriesId) === 3) {
        return <Got />;
      }
      if (parseInt(match.params.seriesId) === 4) {
        return <Dark />;
      }
      if (parseInt(match.params.seriesId) === 5) {
        return <Breakbad />;
      }
      if (parseInt(match.params.seriesId) === 6) {
        return <Tbbt />;
      }
    };

    return (
      <div>
        <React.Fragment>
          <BrowserRouter>
            <Header />
            <br />
            <br />
            <div className="container">
              <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={MenuPage} />
                <Route path="/menu/:seriesId" component={SeriesWithId} />
                <Redirect to="/home" />
              </Switch>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Footer />
          </BrowserRouter>
        </React.Fragment>
      </div>
    );
  }
}

export default Main;
