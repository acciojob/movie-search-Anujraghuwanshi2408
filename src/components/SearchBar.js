// import { data } from 'cypress/types/jquery';
import React, { useState } from 'react'
// import { prefetch } from 'webpack'

 const SearchBar = () => {

   const[input , setInput] = useState("")
   const[movieArray , setMovieArray] = useState([])
   const[boolean , setBoolean] = useState("")
    let ApiKey = "e27ab7d6";
    
     function fetchData(e){
        e.preventDefault()
         fetch(`http://www.omdbapi.com/?apikey=${ApiKey}&s=${input}` , {
           method:'GET',
           }).then(response => response.json())
             .then(data =>{
                 
                 setBoolean(data.Response)
                 setMovieArray(data.Search)
                 console.log(movieArray)
             }
                 )
             
             
             
     }

  return (
    <div>
      <h1> Search Movie</h1>
      <form onSubmit={fetchData}>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} />
        <button type='submit'>Search</button>
      </form>
      <ul>
      {
       
       (boolean === "True")  &&  movieArray.map(Element=>(
            <li>{Element.Title}
             <img  src= {Element.Poster}  />
            </li>
            
        ))
      }
      </ul>
      
        {
        (boolean === "False") && <h2 className='error'>Invalid movie name. Please try again.</h2>
        }
    </div>
  )
}

export default SearchBar