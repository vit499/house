import React, {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom'

import useFetch from 'hooks/useFetch'
import {UserContext} from 'contexts/user'
//import useLocalStorage from 'hooks/useLocalStorage'

const Register = () => {

  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [pass2, setPass2] = useState('')
  const [username, setUsername] = useState('')

  const apiUrl = '/users/register'
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)
  const [token, setToken] = useContext(UserContext)
  //const [, saveToken] = useLocalStorage()

  const isAuth = !!token;

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('reg', login, pass);
    doFetch({
      method: 'post',
      data: { 
        login: login, 
        password: pass 
      }
    })

    // setStateUser(state => ({
    //   ...state,
    //   isAuth: true
    // }))
    //setToken('ttttttt')
    //console.log('register click, isAuth:', isAuth);
  }

  console.log('register page, isAuth:', isAuth);

  useEffect(() => {
    if(!response) {
      return
    }
    console.log('response register', response);
    //setToken(response)
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
          <h3 className="text-center">Регистрация</h3>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mt-3">
                <input
                  type="text"
                  className="form-control form-control-lg mb-2"
                  id="username"
                  placeholder="Имя"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  className="form-control form-control-lg mb-2"
                  id="email"
                  placeholder="Почтовый адрес"
                  value={login}
                  onChange={e => setLogin(e.target.value)}
                />
                <input
                  type="password"
                  className="form-control form-control-lg mb-2"
                  id="password"
                  placeholder="Создайте пароль"
                  value={pass}
                  onChange={e => setPass(e.target.value)}
                />
                <input
                  type="password"
                  className="form-control form-control-lg mb-3"
                  id="password2"
                  placeholder="Повторите пароль"
                  value={pass2}
                  onChange={e => setPass2(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="col-12 btn btn-lg btn-primary"
                onClick={handleSubmit}
              >Зарегистрироваться</button>
            </form>
          </div>
          <ul className="nav mt-2 mb-2">
            <li className="nav-item col text-center">
              <Link to="/login">Уже зарегистрированы</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Register
