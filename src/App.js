import './App.css';
import React from 'react';
import FirstComponent from './components/FirstComponent'
import { useState } from "react";

const App = () => {
 const [open, setOpen] = useState(false);

 return (
  <div className="App">
   <button onClick={() => setOpen((prev) => !prev)}>toggle</button>
   <div className={open ? "open" : "close"}>
    I'm {open ? "opened" : "closed"}
   </div>
  </div>
 );
};
export default App;
