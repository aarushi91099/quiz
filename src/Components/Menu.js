import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuItem({ series, onClick }) {
  return (
    //   <Card className="wrapper">
    //     <CardBody className="content">
    //       <Link to={`/menu/${series.id}`}>
    //         <CardImg className="image" src={series.image} alt={series.name} />
    //       </Link>
    //       <CardText className="cardTitle">
    //         <b>{series.name}</b>
    //       </CardText>
    //       {/* <CardText className="text">{series.description}</CardText> */}
    //     </CardBody>
    //   </Card>
    <Card className="cards">
      <Link to={`/menu/${series.id}`}>
        <CardImg
          className="imgs"
          width="100%"
          src={series.image}
          alt={series.name}
        />
      </Link>
      <CardTitle className="title">
        <b>{series.name}</b>
      </CardTitle>
      <CardText className="text">{series.description}</CardText>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.series.map((series) => {
    console.log(series.id);
    return (
      <div key={series.id}>
        <RenderMenuItem series={series} />
      </div>
    );
  });
  console.log("Hi");
  return (
    <div className="container">
      <div className="flex-container">
        {/* <div className="col-lg-8"> */}
        <br />
        {menu}
        <br />
        {/* </div> */}
      </div>
    </div>
  );
};
export default Menu;
