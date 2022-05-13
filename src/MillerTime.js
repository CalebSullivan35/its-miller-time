import React from "react"
import { useState, useEffect } from "react"
import { getAllURLS } from "./modules/DataManager"
import './MillerTime.css'

export const MillerTime = () => { 
  const [urlRefs, setUrlRefs] = useState([])
  const [randomURL, setRandomURL] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const beerCan = new Audio('./beerCanOpen.mp3')

  const getRandomURL = (arr) => {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

  const handleClick = () => {
    setIsLoading(true)
    const randomVid = getRandomURL(urlRefs)
    setRandomURL(randomVid)
    setIsLoading(false)
  }



  useEffect(() => {
    getAllURLS()
    .then(allURLS => {
      setUrlRefs(allURLS.urls)
      setRandomURL(allURLS.urls[0])
    }).then(() => setIsLoading(false))
  }, [])

  return (
    <>
    <div className="millerTime">
      {/* <h1 className="title">It's Miller Time</h1> */}
      {/* <div classname="millerLogo">
        <img src='/millerTime.png' alt="miller time logo" className="millerLogo"/>
      </div> */}
      <iframe src={randomURL} title="It's Miller Time" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope passive:true; picture-in-picture"></iframe>
        <img src="/millerbutton4.png" alt="miller lite logo" onClick={() => (handleClick(),beerCan.play())} />
  </div>
  </>
  )
 }