import React from 'react'
import './Home.css'
import Movies from './movies/Movies'
import Search from './search/Search'


const Home = () => {
   
  return (
    <div>
     <Search/> 
      <Movies/>
     
    </div>
  )
}

export default Home;
 