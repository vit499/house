import React, {useState} from 'react'

const ArticleForm = ({onSubmit, error}) => {
  const [name, setName] = useState('')
  const [cost, setCost] = useState('')
  const [category, setCategory] = useState('')
  const [descr, setDescr] = useState('')
  const [tags, setTags] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const article = {
      name: name,
      cost: cost,
      category: category,
      descr: descr,
      tags: tags
    }
    onSubmit(article)
  }

  return (
    <div className="container">
      <form className="row g-3 col-md-6 offset-md-3" onSubmit={handleSubmit}>
        <h5 className="text-center mt-3">Тут нужно ввести, что купили</h5>
        <div className="col-12">
          <input type="text" className="form-control" 
            id="name" placeholder="название" 
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="col-12">
          <input type="text" className="form-control" 
            id="cost" placeholder="цена" 
            value={cost}
            onChange={e => setCost(e.target.value)}
          />
        </div>
        <div className="col-12">
          <input type="text" className="form-control" 
            id="category" placeholder="категория" 
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
        </div>
        <div className="col-12">
          <input type="text" className="form-control" 
            id="descr" placeholder="описание" 
            value={descr}
            onChange={e => setDescr(e.target.value)}
          />
        </div>
        <div className="col-12">
          <input type="text" className="form-control" 
            id="tags" placeholder="теги" 
            value={tags}
            onChange={e => setTags(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="col-12 btn btn-primary"
        >Добавить</button>
      </form>
    </div>
    
  )
}

export default ArticleForm
