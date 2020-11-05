import React, { useState, useEffect } from "react";
import "./index.css";
import axios from 'axios'
import PhotoCard from './components/PhotoCard.js'
import MoreButton from './components/MoreButton.js'


export default function App() {

    const [error, setError] = useState('')
    const [isFetchingData, setIsFetchingData] = useState(false)
    const [photo, setPhoto] = useState([])

    const getData = () => {
      console.log('button pushed')
      axios
      .get('https://api.nasa.gov/planetary/apod')
      .then(res => {
        console.log('response', res.data)
        setPhoto(res.data)
        console.log('photo', photo)
      })
      .catch(error => {
        console.log(`Error ${error}`)
        setError(error)
      })
    }
    

  return (
    <div className="App">
      <h1>Astronomy Photo of the Day</h1>
      <MoreButton getDataBtn={getData} />
      <PhotoCard name={'Space X'}/>
    </div>
  );
}

