import React from "react";  
import {Moviecard} from "./Moviecard";

const Movielist = ({movies,name,value}) => {
    return(
    <div className="moviecard">
    {
    movies.filter(el=>(el.name).toLowerCase().includes(name.toLowerCase().trim())&& value<=el.rating).map(movie=><Moviecard movie={movie}/> )
    }
    </div>
    ) 

}
export default Movielist