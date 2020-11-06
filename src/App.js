import React, { useState, useEffect } from "react";
import "./index.css";
import './App.css'
import axios from 'axios'
import PhotoCard from './components/PhotoCard.js'
import GetButton from './components/GetButton.js'


export default function App() {

    const [error, setError] = useState('')
    const [isFetchingData, setIsFetchingData] = useState(false)
    const [photoData, setPhotoData] = useState([])

    const BASE_URL= 'https://api.nasa.gov/planetary/apod'

    const getData = () => {
      // console.log('button pushed')
      setIsFetchingData(true)
      axios
      .get(`${BASE_URL}?api_key=c7g6DeHGD0TjXLLzGWOYaYUBnyaBILSYnohSivWW`)
      .then(res => {
        console.log('response', res.data)
        setPhotoData(res.data)
        console.log('photoData', photoData)
        setIsFetchingData(false)
      })
      .catch(error => {
        // console.log(`Error ${error}`)
        setError(error)
        setIsFetchingData(false)
      })
    }
    

  return (
    <div className="App">
      <h1>Astronomy Photo of the Day</h1>
      <GetButton getDataBtn={getData} isFetchingData={isFetchingData}/>
      <PhotoCard photoD={photoData} error={error}/>
    </div>
  );
}

