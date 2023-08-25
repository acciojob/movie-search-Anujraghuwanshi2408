// import { data } from 'cypress/types/jquery';
import React, { useState } from 'react'

 const SearchBar = () => {

   const[input , setInput] = useState("")
   const[movieArray , setMovieArray] = useState([])
   const[boolean , setBoolean] = useState("")
    let ApiKey = "e27ab7d6";
    
     function fetchData(){
         fetch(`http://www.omdbapi.com/?apikey=${ApiKey}&s=${input}` , {
           method:'GET',
           }).then(response => response.json())
             .then(data =>{
                 
                 setBoolean(data.Response)
                 setMovieArray(data.Search)
             }
                 )
             
             
            
     }

  return (
    <div>
      <h1> Search Movie</h1>
      <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={fetchData}>Search</button>
      {
       (boolean === "True")  &&  movieArray.map(Element=>(
            <h2>{Element.Title}</h2>
            
        ))
      }
      
        {
        (boolean === "False") && <h2>Enter Valid Movie Name</h2>
        }
    </div>
  )
}

export default SearchBar