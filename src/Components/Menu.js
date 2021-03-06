import React from "react";
import { Card, CardImg, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

function RenderMenuItem({ series, onClick }) {
  return (
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
        <br />
        {menu}
        <br />
      </div>
    </div>
  );
};
export default Menu;
