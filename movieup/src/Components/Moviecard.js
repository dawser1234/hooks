import React from "react";
import {Card,Button} from "react-bootstrap"
import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
export const Moviecard = ({movie}) => {
    return (
        <div > 
        <Card border="success" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.image} style={{height:"300px"}} />
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>
            Some quick example text to bui ld on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Rating name="read-only" value={movie.rating} readOnly />
          <Button as={Link} to={`/${movie.id}`}  variant="primary">Trailer</Button>
        </Card.Body>
      </Card>
      </div>
    )
}
export default Moviecard ; 