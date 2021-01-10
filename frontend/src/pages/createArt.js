import React, {useEffect} from 'react'
import {Redirect} from 'react-router-dom'

import ArticleForm from 'components/articleForm'
import Loading from 'components/loading'
import useFetch from 'hooks/useFetch'

const CreateArt = () => {

  const apiUrl = '/a/articles'
  const [{response, isLoading, error}, doFetch] = useFetch(apiUrl);

  const handleSubmit = (article) => {
    console.log('create article submit', article);
    doFetch({
      method: 'post',
      data: {
        article
      }
    })
  }

  useEffect(() => {
    if(!response) { 
      return
    }
    console.log('create article response');
  }, [response])

  if(isLoading) { 
    return <Loading />
  }
  if(response) {
    return (<Redirect to="/getall" />)
  }
  return (
    <ArticleForm
      onSubmit={handleSubmit}
      error={error}
    />
  )
}

export default CreateArt
