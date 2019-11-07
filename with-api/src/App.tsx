import React from 'react';
import logo from './logo.svg';
import './App.css';
import Articlelist from "./components/article-list"

const App: React.FC = () => {
  return (
    <div className="App">
     <Articlelist/>
    </div>
  );
}

export default App;
