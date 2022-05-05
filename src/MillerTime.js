import React from "react"
import { useState, useEffect } from "react"
import './MillerTime.css'

export const MillerTime = () => { 
  const [urlRefs, setUrlRefs] = useState([])
  const [randomURL, setRandomURL] = useState('')
  const [isLoading, setIsLoading] = useState(true)

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

    const testArr = [
      "https://www.youtube.com/embed/RRmK26dkyrY",
      "https://www.youtube.com/embed/q0jYdplEH4Y",
      "https://www.youtube.com/embed/UVpIAc6zX6s"
    ]

    setUrlRefs(testArr)
    setRandomURL(testArr[1])
    setIsLoading(false)
  }, [])


  return (
    <>
    <div className="millerTime">
      <h1 className="title">It's Miller Time</h1>
      <iframe width="560" height="315" src={randomURL} title="It's Miller Time" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope passive:true; picture-in-picture"></iframe>
      <button onClick={() => handleClick()}>
        <img src="/millerbutton4.png" alt="miller lite logo" /></button>
  </div>
  </>
  )
 }