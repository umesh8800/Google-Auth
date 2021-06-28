import React from 'react';
import './HomePage.css'
import Home from './Images/home.jpg'
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';

function HomePage() {
    return (
        <>
            <div className="navbar">
                <h3> Get the latest on our COVID-19 response</h3>
            </div>
            <div class="container">
                <img src={Home} alt="Snow" style={{ width: "100%", height: "692px" }} />
                <div class="top-right">
                    <h5>Switch to hosting</h5>
                    <LanguageIcon />
                    <div className='icons'>
                        <MenuIcon />
                        <AccountCircleIcon />
                    </div>
                </div>
                <div className='centered'>
                <h3 style={{textAlign:"center"}}> Places to stay</h3> <br/>
               <div className='main'>
              <div>
                  <h4>Location</h4> <h5>Where are you going?</h5>
              </div> <div class="vl"></div><br/>
              <div>
                  <h4>Check in</h4> <h5>Adds dates</h5>
              </div> <div class="vl"></div><br/>
              <div>
                  <h4>Check out</h4> <h5>Adds dates</h5>
              </div> <div class="vl"></div><br/>
              <div>
                  <h4>Guests</h4> <h5>Add guests</h5>
              </div>
              <div className='circle'>
                  <SearchIcon className='search'/>
              </div>
               </div> <br/> 

               <div className='text'>
                   <h1>Go</h1><span>
                   <h1>Near</h1></span>
                   <div className='last'>
                   <h3>Explore nearby stays</h3>
               </div>
               </div>
               
               

            </div>
            </div>
            
        </>
    )
}

export default HomePage
