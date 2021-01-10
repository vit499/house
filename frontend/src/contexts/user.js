import {useState, createContext, useContext, useEffect} from 'react'


const getLocalStorage = (key) => {
  console.log('get Local Storage in context');
  try {
    const val = localStorage.getItem(key)
    return val ? val : ''
  }
  catch (e) {
    return ''
  }
}
const setLocalStorage = (key, val) => {
  console.log('set local storage in context', key, val);
  try {
    localStorage.setItem(key, val)
  }
  catch(e) {

  }
}

export const UserContext = createContext()


export const UserContextProvider = ({children}) => {
  const [token, setToken] = useState( () => getLocalStorage('token'))
  
  useEffect(() => {
    setLocalStorage('token', token)
  }, [token])

  console.log('user context, token:', token);
  return (
    <UserContext.Provider value={[token, setToken]}>
      {children}
    </UserContext.Provider>
  )
}


