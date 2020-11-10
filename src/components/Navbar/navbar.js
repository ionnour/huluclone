import React from 'react';
import requests from '../requests';

export default function Navbar({setOption}) {
  return (
    <section className="navbar">
      <div className="nav-container">
        {
          requests.map((item, index) => {
            return(
              <h2 key={index} onClick={()=> setOption(item.category)} >
                {item.title}
              </h2>
            )
          })
        }
      </div>
    </section>
  )
}
