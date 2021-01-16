import React from 'react'
import {Link} from 'react-router-dom'

const MathResult = () => {

  const divStyle = {
    backgroundColor: '#dce775'
  }
  return (
    <div className="container page">
    <div className="row ">
      <div className="col-md-4 offset-md-4 col-xs-12" style={divStyle}>
        <h3 className="text-center">Сожалеем, ты пока не готов.</h3>
        <h3 className="text-center">Видимо, дело в том, что ты еще не сделал номер из тетради.</h3>
        <ul className="nav mt-2 mb-2">
          <li className="nav-item col text-center">
            <Link to="/">Попробуй еще</Link>
          </li>
        </ul>
        <h5 className="text-center">Или отправь смс на номер мамы с текстом "Я лентяй"</h5>
      </div>
    </div>
    </div>
  )
}

export default MathResult

