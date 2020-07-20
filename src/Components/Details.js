import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { SERIES } from "../Shared/Series";
import Quiz from "./Quiz";

// function RenderSeries({series}) {
//         return (
//             <Card>
//                 {/* <Link to={`/quiz`} > */}
//                     <CardImg width="100%" src={series.image} alt={series.name} />
//                     <CardBody>
//                         <CardTitle>{series.name}</CardTitle>
//                         <CardText>{series.description}</CardText>
//                     </CardBody>
//                 {/* </Link> */}
//             </Card>
//         );
//     }

//     const  Details = (props) => {
//         if (props.series!= null) {
//             return (
//                 <div className="row">
//                     <div className="col-12 col-md-5 m-1">
//                         <RenderSeries series={props.series}/>
//                         <Switch>
//                             <Route path='/quiz' component={() => <Quiz />} />
//                         </Switch>
//                     </div>
//                 </div>
//             );
//         }
//         else {
//             return (
//                 <div></div>
//             );
//         }
//     }

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: SERIES,
    };
    console.log(this.props.series.id);
    console.log("ndjd");
  }

  render() {
    // const QuizPage = () => <Quiz series={this.state.series} />

    return (
      <div className="container">
        <Switch>
          <Quiz series={this.state.series} />
        </Switch>
      </div>
    );
  }
}

export default Details;
