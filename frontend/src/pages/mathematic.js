import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import useFetch from 'hooks/useFetch'

const Mathematic = () => {

  

  const divStyle = {
    backgroundColor: '#ffab91'
  }
  return (
    <div className="container page">
      <div className="row ">
        <div className="col-md-4 offset-md-4 col-xs-12" style={divStyle}>
          <h5 className="text-center">
            Ты уверен, что хочешь убрать надпись?<br/>
            Для этого тебе придется сначала решить парочку уравнений.<br/>
            Сначала сделай один номер из тетради.
          </h5>
          <div>
          </div>
          <ul className="nav mt-2 mb-2">
            <li className="nav-item col text-center">
              <Link to="/task">Нажми, если готов</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Mathematic
