import { useState } from 'react'
import HardaatLogo from './assets/hardaat_formal_copy.jpeg'
import ShadapLogo from '/shadap.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/shadab375" target="_blank">
          <img src={ShadapLogo} className="logo" alt="Shadab logo" />
        </a>
        <a href="https://github.com/hardaatbaath" target="_blank">
          <img src={HardaatLogo} className="logo" alt="Hardaat logo" />
        </a>
      </div>
      <h1>Counter testing page (+5)</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR if you want, homie
        </p>
      </div>
      <p className="read-the-docs">
        Click on the profiles to go to the respective github pages
      </p>
    </>
  )
}

export default App
