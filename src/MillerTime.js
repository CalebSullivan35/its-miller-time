import React from "react"
import { useState, useEffect } from "react"
import { getAllURLS } from "./modules/DataManager"
import './MillerTime.css'

export const MillerTime = () => { 
  const [urlRefs, setUrlRefs] = useState([])
  const [randomURL, setRandomURL] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const beerCan = new Audio('https://res.cloudinary.com/wmdrums/video/upload/v1652458769/Beer_Can_Opening_-_Sound_Effect_HD__getmp3.pro_jazj1c.mp3')

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
    <div className="centerContainer">
    <div className="container">
    <div className="millerTime">
      <iframe src={randomURL} title="It's Miller Time" frameborder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope passive:true; picture-in-picture"></iframe>
    </div>
    </div>  
    <div className="buttonLogo">
        <img src='https://res.cloudinary.com/wmdrums/image/upload/v1652456437/millerbutton3-removebg-preview_sylnvv.png' alt="miller lite logo" onClick={() => (handleClick(),beerCan.play())} />
  </div>
  </div>
  </>
  )
 }