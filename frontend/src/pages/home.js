import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import useFetch from 'hooks/useFetch'

const Home = () => {

  

  const divStyle = {
    backgroundColor: '#ffecb3'
  }
  return (
    <div className="container page">
      <div className="row ">
        <div className="col-md-4 offset-md-4 col-xs-12" style={divStyle}>
          <h3 className="text-center">xx</h3>
          <div>
            
          </div>
          <ul className="nav mt-2 mb-2">
            <li className="nav-item col text-center">
              <Link to="/mathinfo">Убрать надпись</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
