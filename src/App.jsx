import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <h1>Desert Memory Card Game</h1>
      <div className="scoreboardContainer">
        <div className="scoreContainer">
          <img className="scoreIcon" src="/public/cactus-larger.png" />
          <div className="scoreType">Current Score: </div>
        </div>
        <div className="scoreContainer">
          <img className="scoreIcon" src="/public/cactus-larger.png" />
          <div className="scoreType">Best Score: </div>
        </div>
      </div>
    </>
  )
}

export default App
