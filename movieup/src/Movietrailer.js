import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Movietrailer =({movies})=>{
    const {id} = useParams()
    return(
        <div>
       {movies.filter((el)=>el.id==id).map((el)=>
        <div key={el.id}> 
        <h2 style={{color:"white"}}>{el.name}</h2>
        <iframe width="560" height="315" src={el.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <Button as={Link} to="/home">Go Home</Button>
        </div>)}
        </div>
    )
}
export default Movietrailer