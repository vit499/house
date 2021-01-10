import {useState, useEffect, useCallback} from 'react'

const key = 'token';
const read = (key) => {
  const val = localStorage.getItem(key) || '';
  console.log('get item from storage in hook:', val);
  return val;
}

const useLocalStorage = (key, initialValue = '') => {
   const [value, setValue] = useState(() => {
     return read(key)
   })

  // const [key1, setKey1] = useState(key)
  //const [value, setValue] = useState(initialValue)

  const ss = useCallback( (val) => {
    setValue(val);
  }, [])
  // useEffect(() => {
  //   const val = localStorage.getItem(key) || initialValue;
  //   console.log('get item from storage:', val);
  //   if(val) ss(val)
  //   //return val;
  // }, [])
  // useEffect(() => {
  //   console.log('local storage effect (save)', value);
  //   localStorage.setItem(key, value)
  // }, [key, value])

  // const saveToken = (val) => {
  //   console.log('local storage effect (save)', val);
  //   setValue(val)
  //   localStorage.setItem(key, val)
  // }
  const saveToken = useCallback( (val) => {
    console.log('local storage effect (save)', val);
    setValue(val)
    localStorage.setItem(key, val)
  }, [])

  return [value, saveToken];
}

export default useLocalStorage
