import React, {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom'

import useFetch from 'hooks/useFetch'
import {UserContext} from 'contexts/user' 

const Login = () => {

  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')

  const apiUrl = '/users/login'
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)
  const [token, setToken] = useContext(UserContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('login', login, pass);
    doFetch({
      method: 'post',
      data: { 
        login: login, 
        password: pass 
      }
    })
  }

  useEffect(() => {
    if(!response) {
      return
    }
    console.log('response login', response.token);
    setToken(response.token)
  }, [response])

  const divStyle = {
    backgroundColor: '#f5f5f5'
  }
  return (
    <div className="container page">
      <h3 className="text-center mt-3">Вот вы говорили, я ничего не умею делать</h3>
      <hr />
      <div className="row ">
        <div className="col-md-4 offset-md-4 col-xs-12" style={divStyle}>
          <h3 className="text-center">Вход</h3>
          <div>
            <form>
              <div className="mt-3 mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="inputEmail3"
                  placeholder="Почтовый адрес"
                  value={login}
                  onChange={e => setLogin(e.target.value)}
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="password"
                  placeholder="Пароль"
                  value={pass}
                  onChange={e => setPass(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="col-12 btn btn-lg btn-primary"
                onClick={handleSubmit}
              >Войти</button>
            </form>
          </div>
          <ul className="nav mt-2">
            <li className="nav-item col text-center">
              <Link to="/register">Регистрация</Link>
            </li>
          </ul>
          <div className="mt-3 text-muted text-center">Войти через соцсети</div>
          <div className="text-muted text-center">(соцсети-зло)</div>
        </div>
      </div>
    </div>
  )
}

export default Login
