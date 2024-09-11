/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/

import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Buttons/Button.jsx";
import ButtonBuy from "./Buttons/ButtonBuy.jsx";
import Student from "./Student.jsx";

function App() {

  return(
    <>
      <Header/>
      <Student name="SpongeBobssss" age={20} isStudent={false}/>
      <Student name="Patrick" age={10} isStudent={true}/>
      <Student name="Squid" age={40} isStudent={false}/>
      <Student name="Sandy" age={60} isStudent={true}/>
      <Student/>
      <Button type={1}/>
      <ButtonBuy/>
      <Food/>
      <Card/>
      <Footer/>
    </>
  );
}

export default App
