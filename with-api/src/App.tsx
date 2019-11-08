import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Articlelist from "./components/article-list"
import ArticleDetail from "./components/article-detail"

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/article/:id">
            <ArticleDetail />
          </Route>
          <Route exact path="/article">
            <Articlelist />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
