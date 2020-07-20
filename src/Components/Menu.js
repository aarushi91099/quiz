import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuItem({ series, onClick }) {
  return (
    <Card>
      <Link to={`/menu/${series.id}`}>
        <CardImg width="100%" src={series.image} alt={series.name} />
      </Link>
      <CardTitle>
        <b>{series.name}</b>
      </CardTitle>
      <CardText>{series.description}</CardText>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.series.map((series) => {
    console.log(series.id);
    return (
      <div className="col-md m-1" key={series.id}>
        <RenderMenuItem series={series} />
      </div>
    );
  });
  console.log("Hi");
  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">{menu}</div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};
export default Menu;
