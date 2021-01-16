import React, {useEffect, useState, useContext, Fragment} from 'react'
import {Link, Redirect} from 'react-router-dom'


const Task = () => {

  const [q1, setq1] = useState('')
  const [q2, setq2] = useState('')
  const [q3, setq3] = useState('')
  const [q4, setq4] = useState('')
  const [ans, setAns] = useState(false)
  const [end, setEnd] = useState(false)
  const [count, setCount] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    const c = count + 1;
    setCount(c)
    
    setq1('')
    setq2('')
    setq3('')
    setq4('')
    setAns(true)
  }
  useEffect(() => {
    if(count > 2){
      setEnd(true)
    }
  }, [count])

  if(end) {
    return (<Redirect to="/mathresult" />)
  }
  const divStyle = {
    backgroundColor: '#f5f5f5'
  }
  return (
    <div className="container page">
      <div className="row ">
        <div className="col-md-4 offset-md-4 col-xs-12" style={divStyle}>
          {ans && (
            <Fragment>
            <h3 className="text-center">Попытка {count+1}</h3>
            <h3 className="text-center">Попробуй еще</h3>
            </Fragment>
          )}
          {!ans && (
            <Fragment>
            <h3 className="text-center">Попытка {count+1}</h3>
            <h3 className="text-center">Запиши ответы</h3>
            </Fragment>
          )}
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mt-3">
                <h4>x-5=10</h4>
                <input
                  type="text"
                  className="form-control form-control-lg mb-2"
                  id="q1"
                  placeholder="чему равен x?"
                  value={q1}
                  onChange={e => { setq1(e.target.value); setAns(false) }}
                />
                <hr/>
                <h4>(2x+4y)(-3x+2y)</h4>
                <input
                  type="text"
                  className="form-control form-control-lg mb-2"
                  id="q2"
                  placeholder="раскрой скобки"
                  value={q2}
                  onChange={e => { setq2(e.target.value); setAns(false) }}
                />
                <hr/>
                <h4>(x+10)(x-10)</h4>
                <input
                  type="text"
                  className="form-control form-control-lg mb-2"
                  id="q3"
                  placeholder="используй разность квадратов"
                  value={q3}
                  onChange={e => { setq3(e.target.value); setAns(false) }}
                />
                <hr/>
                <h4>(25x+3y+31)-(5x+16y-42)</h4>
                <input
                  type="text"
                  className="form-control form-control-lg mb-3"
                  id="q4"
                  placeholder="раскрой скобки"
                  value={q4}
                  onChange={e => { setq4(e.target.value); setAns(false) }}
                />
              </div>
              <button
                type="submit"
                className="col-12 btn btn-lg btn-primary"
                onClick={handleSubmit}
              >Готово</button>
            </form>
          </div>
          <ul className="nav mt-2 mb-2">
            <li className="nav-item col text-center">
              <Link to="/">Сдаешься?</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Task
