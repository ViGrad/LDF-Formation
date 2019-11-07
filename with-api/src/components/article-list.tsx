import React from "react"
import { iarticle as IArticle } from "../models/article"

// interface IArtilceListprops{
//     data : IArticle[]
// }

const Articlelist = () => {
  // STATES
  const [articles, setArticles] = React.useState<IArticle[]>([])
  const [isLoading, setIsloading] = React.useState(false)
  const [isEditing, setisEditing] = React.useState(-1)
  const [selectedArticle, setSelectedArticle] = React.useState<IArticle>()

  //USE EFECT
  React.useEffect(() => {
    refresh()
  }, [])
  //  const selectedarticle : IArticle = {
  //    userId: -1,
  //    id:-1,
  //    title: '',
  //    body: ''
  //  }

  const refresh = () => {
    setIsloading(true)
    fetch("http://localhost:3001/posts")
      .then(response => response.json())
      .then(json => setArticles(json))
      .catch(err => console.error(err))
      .finally(() => setIsloading(false))
  }

  //HANDLERS
  const handleDeleteClick = (id: number) => () => {
    fetch("http://localhost:3001/posts/" + id, {
      method: "DELETE"
    }).then(() => {
      setArticles(
        articles.filter(current => {
          return current.id !== id
        })
      )
    })
  }

  const handleUpdateClick = (article: IArticle) => () => {
    setisEditing(article.id)
    setSelectedArticle(article)
  }

  const handleSaveClick = () => () => {
    if (selectedArticle != undefined) {
      fetch("http://localhost:3001/posts/"+selectedArticle.id, {
        method: "PUT",
        body: JSON.stringify({
          id: selectedArticle.id,
          title: selectedArticle.title,
          body: selectedArticle.body,
          userId: selectedArticle.userId
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(refresh)
    }
    setisEditing(-1)
  }

  const handleChange = (key: string) => (event: any) => {
    // @ts-ignore
    //selectedArticle[key] = event.target.value
    //if(selectedArticle) alert( selectedArticle.title)
    setSelectedArticle({ ...selectedArticle, [key]: event.target.value })
  }

  if (isLoading) {
    return <div>loading...</div>
  }

  return (
    <table>
      <tr>
        <td>User ID</td>
        <td>Title</td>
        <td>Body</td>
        <td></td>
        <td></td>
      </tr>
      {articles.map(x => {
        if (isEditing === x.id && selectedArticle) {
          return (
            <tr>
              <td>{selectedArticle.userId}</td>
              <td>
                <input
                  value={selectedArticle.title}
                  onChange={handleChange("title")}
                />
              </td>
              <td>
                <input
                  value={selectedArticle.body}
                  onChange={handleChange("body")}
                />
              </td>
              <td>
                <a href="#" onClick={handleSaveClick()}>
                  Save
                </a>
              </td>
              <td>
                <a href="#" onClick={handleDeleteClick(x.id)}>
                  Delete
                </a>
              </td>
            </tr>
          )
        } else {
          return (
            <tr>
              <td>{x.userId}</td>
              <td>{x.title}</td>
              <td>{x.body}</td>
              <td>
                <a href="#" onClick={handleUpdateClick(x)}>
                  Update
                </a>
              </td>
              <td>
                <a href="#" onClick={handleDeleteClick(x.id)}>
                  Delete
                </a>
              </td>
            </tr>
          )
        }
      })}
    </table>
  )
}

export default Articlelist
