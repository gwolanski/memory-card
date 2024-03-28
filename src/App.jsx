import { useState, useEffect } from 'react'
import './App.css'
import PhotoCard from './components/ImageCard'

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const [photoInfo, setPhotoInfo] = useState([
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
      description: 'Pyramid'
    },
    {
      id: 'a-person-standing-at-the-entrance-to-a-cave-kXbit_yx8t4',
      description: 'Arch'
    },
    {
      id: 'brown-camel-at-field-kdqFhe7I8ek',
      description: 'Camel'
    }
  ]);

  useEffect(() => {
    setPhotoInfo(shuffleArray(photoInfo));
  }, []);

  useEffect(() => {
    if (currentScore === 6) {
      endGame();
      alert('You win!');
    }
  }, [currentScore])

  function shuffleArray(array) {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  function handleSelect(description) {
    if (selectedPhotos.includes(description)) {
      endGame();
      alert('You already chose this photo card. Game over!');
      return;
    }
    setSelectedPhotos([...selectedPhotos, description]);
    setCurrentScore(currentScore + 1);
    setPhotoInfo(shuffleArray(photoInfo));
  }

  function endGame() {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setCurrentScore(0);
    setSelectedPhotos([]);
  }

  return (
    <>
      <h1>Desert Memory Card Game</h1>
      <div className="gameDescription">Score points by clicking on an image card that you haven't previously selected.</div>
      <div className="scoreboardContainer">
        <div className="scoreContainer">
          <img className="scoreIcon" src="/vibrant-cactus.png" />
          <div className="scoreType">Current Score: </div>
          <div className="score">{currentScore}</div>
        </div>
        <div className="scoreContainer">
          <img className="scoreIcon" src="/vibrant-cactus.png" />
          <div className="scoreType">Best Score: </div>
          <div className="score">{bestScore}</div>
        </div>
      </div>
      <div className="cardSectionContainer">
        {photoInfo.map(photo => (
          <PhotoCard id={photo.id} key={photo.id} description={photo.description} onClick={handleSelect} />
        ))}
      </div>
    </>
  )
}

export default App