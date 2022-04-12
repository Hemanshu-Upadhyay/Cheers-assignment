import React from "react";
import { Card } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        width="250rem"
        src="https://media.istockphoto.com/photos/movie-projector-on-dark-background-picture-id1007557230?k=20&m=1007557230&s=612x612&w=0&h=hWEw8rA6ASt-Z18pNvUKk2GtQZVLj1GHv3HFlNB4p6U="
      />
      <Card.Body>
        <Card.Title>
          <b>Movie Name: </b> <span>{movie.name}</span>
        </Card.Title>
        <Card.Title> Released Year : {movie.released_year}</Card.Title>
        <Card.Text> Rating : {movie.rating}</Card.Text>
      </Card.Body>
      <hr></hr>
      <br></br>
    </Card>
  );
};

export default MovieCard;
