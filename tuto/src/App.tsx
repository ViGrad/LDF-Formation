import React from "react"
import "./App.css"
import { ChangeEvent } from "react"
import TextRender from "./components/text-render"

const App: React.FC = () => {
  const [sentence, setSentence] = React.useState(
    "Saut le monde pas comme d'hablitude"
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSentence(event.target.value)
  }

  return <div className="App">
    <div>
      <input onChange={handleChange} />
    </div>
    <TextRender text={sentence}/>
  </div>
}

export default App
