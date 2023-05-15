import React from "react";
import { Link } from "react-router-dom";
import beerImg from '../assets/beers.png'
import newBeerImg from '../assets/new-beer.png'
import randomBeerImg from '../assets/random-beer.png'


function HomePage() {
  return (
    <div>
     <Link to="/beers">
                <img src={beerImg} alt="beers" />
                    <h1 class='home'>All Beers</h1>
      </Link>
                <div class='home'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec luctus vulputate magna, id egestas elit vulputate nec. 
                    Vestibulum tincidunt vel augue eget cursus. Quisque placerat turpis ac leo consequat, non aliquet erat rutrum. 
                    Curabitur interdum vitae ligula blandit faucibus. Curabitur vel turpis at dolor eleifend tristique at eu sapien.
                    </p>
                </div>
      <Link to="/random-beer">
                <img src={randomBeerImg} alt="beers" />
                    <h1 class='home'>Random Beer</h1>
      </Link>
                <div class='home'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec luctus vulputate magna, id egestas elit vulputate nec. 
                    Vestibulum tincidunt vel augue eget cursus. Quisque placerat turpis ac leo consequat, non aliquet erat rutrum. 
                    Curabitur interdum vitae ligula blandit faucibus. Curabitur vel turpis at dolor eleifend tristique at eu sapien.
                    </p>
                </div>
      <Link to="/new-beer">
                <img src={newBeerImg} alt="beers" />
                    <h1 class='home'>New Beer</h1>
      </Link>
                <div class='home'>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec luctus vulputate magna, id egestas elit vulputate nec. 
                    Vestibulum tincidunt vel augue eget cursus. Quisque placerat turpis ac leo consequat, non aliquet erat rutrum. 
                    Curabitur interdum vitae ligula blandit faucibus. Curabitur vel turpis at dolor eleifend tristique at eu sapien.
                    </p>
                </div>
  </div>
  )
}

export default HomePage