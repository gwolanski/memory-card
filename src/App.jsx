import { useState } from 'react'
import './App.css'
import PhotoCard from './components/ImageCard'

function App() {
  const photoObjects = [
    {
      id: 'brown-rock-formations-under-white-sky-at-daytime-mC1qftGwYtE',
      description: 'Rock Formation'
    },
    {
      id: 'antelope-canyon-EVZxXuOEk3w',
      description: 'Slot Canyon'
    },
    {
      id: 'j7B9qYyDdZY',
      description: 'Cactus'
    },
    {
      id: 'a-group-of-people-riding-camels-in-front-of-a-pyramid--LIYZ8fAaHM',
      description: 'Pyramids'
    },
    {
      id: 'a-person-standing-at-the-entrance-to-a-cave-kXbit_yx8t4',
      description: 'Arch'
    },
    {
      id: 'brown-camel-at-field-kdqFhe7I8ek',
      description: 'Camel'
    }
  ]

  const [photoIds, setPhotoIds] = useState([
    'brown-rock-formations-under-white-sky-at-daytime-mC1qftGwYtE',
    'antelope-canyon-EVZxXuOEk3w',
    'j7B9qYyDdZY',
    'a-group-of-people-riding-camels-in-front-of-a-pyramid--LIYZ8fAaHM',
    'a-person-standing-at-the-entrance-to-a-cave-kXbit_yx8t4',
    'brown-camel-at-field-kdqFhe7I8ek'
  ]);

  const displayPhotos = photoIds.map(photo =>
    <PhotoCard id={photo} key={photo} />)

  return (
    <>
      <h1>Desert Memory Card Game</h1>
      <div className="scoreboardContainer">
        <div className="scoreContainer">
          <img className="scoreIcon" src="/vibrant-cactus.png" />
          <div className="scoreType">Current Score: </div>
        </div>
        <div className="scoreContainer">
          <img className="scoreIcon" src="/vibrant-cactus.png" />
          <div className="scoreType">Best Score: </div>
        </div>
      </div>
      <div className="cardSectionContainer">
        {displayPhotos};
      </div>
    </>
  )
}

export default App
