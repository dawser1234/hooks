import './App.css';
import { useState } from 'react';
import {moviesData} from "./Components/Moviedata";
import Movielist from './Components/Movielist';
import Mynavbar from './Components/Mynavbar';
import {Route,Routes} from "react-router-dom"
import Movietrailer from './Movietrailer';
function App() {
  const  [movies , setMovies] = useState (moviesData);
  const  [name , setName ] = useState ("")
  const [value ,setValue]=useState(0)

  return (
      
    <div className="App">
    <Mynavbar setName={setName} value={value} setValue={setValue}/>
    <Routes>
    <Route path='/home' element={<Movielist movies={movies} name={name} value={value} />}/>
    <Route path="/:id" element={<Movietrailer movies={movies} />}/>
    </Routes>
    
    
    
     
    </div>
  );
}

export default App;
