import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function OneBeerPage() {
  const { beerId } = useParams()
  const navigate = useNavigate()
  const [oneBeer, setBeer] = useState()
  
  const axiosData = async () => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      console.log(response.status)
      console.log(response.data)
      if(response.status === 200) {
        setBeer(response.data)
      }
    }
    catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    axiosData()
  }, [beerId])

  if(!oneBeer) {
    return <div>Loading beer...</div>
}

  return (
    <div>
      <nav>
        <Link to='/'>
          <img src='https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png' alt='home'></img>
        </Link>
      </nav>
      <div class='home'>
      <h1>{oneBeer.name}</h1>
        <img class='list_images' src={oneBeer.image_url} alt={oneBeer.name}/>
        <h4>{oneBeer.tagline}</h4>
        <h4>{oneBeer.first_brewed}</h4>
        <h4>{oneBeer.attenuation}</h4>
        <h4>{oneBeer.description}</h4>
        <h4>{oneBeer.contributed_by}</h4>
        </div>
    </div>
  )
}

export default OneBeerPage