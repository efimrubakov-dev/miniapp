import React from 'react'
import ReactDOM from 'react-dom/client'

import './style.css'

function App() {
  return (
    <div className="wrapper">
      <img src="/miniapp/logo.png" alt="Logo" />
      <h1>Hello MiniApp!</h1>
      <button onClick={() => alert('Clicked!')}>Click me</button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)