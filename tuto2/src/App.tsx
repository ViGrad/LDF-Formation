import React from "react"
import "./App.css"
import TextRender from "./components/text-render"
import Input from "./components/input"

const App: React.FC = () => {
  const [sentence, setSentence] = React.useState(
    "Salut le monde pas comme d'habitude"
  )
  
  return <div className="App">
    <Input defaultValue={sentence} onChange={setSentence} />
    <TextRender text={sentence} />
  </div>
}

export default App