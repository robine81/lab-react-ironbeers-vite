import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import axios from 'axios';

function BeersPage() {
  const [allBeers, setBeers] = useState([])

  const fetchBeers = async () => {
    try {
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers")
      const parsed = await response.json()
      console.log(parsed)
      setBeers(parsed)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
      fetchBeers() 
    }, [])

  return (
    <>
    <nav>
      <Link to='/'>
        <img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' alt='home'></img>
      </Link>
    </nav>
    <h1>All Beers</h1>
    { 
      allBeers.map((beer) => (
      <img src={beer.image_url} alt={beer.name}/>
    ))
    }
    </>
  )
}

export default BeersPage


