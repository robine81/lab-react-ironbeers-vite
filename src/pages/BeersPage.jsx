import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';

function BeersPage() {
  const [allBeers, setBeers] = useState([])

  //using fetch
  const fetchBeers = async () => {
    try {
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers")
      const parsed = await response.json()
      console.log(parsed)
      setBeers(parsed)
    } 
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
      fetchBeers() 
    }, [])

  // using axios
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
  //     console.log(response.status)
  //     if (response.status === 200){
  //       setBeers(response.data)
  //     }
  //   } catch (error) {
  //     console.log(error) 
  //   }
  // }
  // useEffect(() => {
  //   fetchBeers() 
  // }, []
  // )

  return (
    <>
    <nav>
      <Link to='/'>
        <img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' alt='home'></img>
      </Link>
    </nav>
    { 
      allBeers.map((beer) => (
      <div class="beer-list">
        <div>
        <Link to='/beers/:beerId'> 
         <img class='list_images' src={beer.image_url} alt={beer.name}/>
        </Link>
        </div>
        <div class='beer-list-details'>
          <Link to={`/beers/${beer._id}`}>
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <p><strong>Created by: </strong>{beer.contributed_by}</p>
          </Link>
          <Link to={`/beers/${beer._id}`}>View Details</Link>
        </div>
      </div>
    ))
    }
    </>
  )
}

export default BeersPage


