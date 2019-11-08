import React from "react"
import { iarticle as IArticle } from "../models/article"
import { useParams, useLocation } from "react-router"
import { Redirect, useHistory } from "react-router-dom"

const ArticleDetails = () => {
  const [currentArticle, setCurrentAticle] = React.useState<IArticle>()
  const [isLoading, setIsLoading] = React.useState(false)
  const [hasToGoBack, setHasToGoBack] = React.useState(false)

  React.useEffect(() => {
    refresh()
  }, [])

  let history = useHistory()

  const handleChange = (key: string) => (event: any) => {
    if (currentArticle)
      setCurrentAticle({ ...currentArticle, [key]: event.target.value })
  }

  const handleSaveClick = (event: any) => {
    event.preventDefault()
    if (currentArticle != undefined) {
      fetch("http://localhost:3001/posts/" + currentArticle.id, {
        method: "PUT",
        body: JSON.stringify({
          id: currentArticle.id,
          title: currentArticle.title,
          body: currentArticle.body,
          userId: currentArticle.userId
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(() => {
          history.push("/article")
        })
        .catch(console.error)
    }
  }

  const handleCancelClick = (event: any) => {
    event.preventDefault()
    setHasToGoBack(true)
  }

  // @ts-ignore
  const idArticle = useParams().id
  const refresh = () => {
    setIsLoading(true)
    fetch("http://localhost:3001/posts/" + idArticle)
      .then(response => response.json())
      .then(json => setCurrentAticle(json))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false))
  }
  if (currentArticle == undefined) {
    return <div>loading</div>
  } else if (hasToGoBack) {
    return <Redirect to="/article"></Redirect>
  } else {
    return (
      <form>
        <div>
          <label> Id :{currentArticle.id}</label>
        </div>
        <div>
          <label>User Id :{currentArticle.userId} </label>
        </div>
        <div>
          <label>Title : </label>
          <input
            value={currentArticle.title}
            onChange={handleChange("title")}
          />
        </div>
        <div>
          <label>Body : </label>
          <textarea
            value={currentArticle.body}
            onChange={handleChange("body")}
          />
        </div>
        <div>
          <button onClick={handleCancelClick}>Cancel</button>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      </form>
    )
  }
}

export default ArticleDetails
