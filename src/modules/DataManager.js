import React from "react"

export const getAllURLS = () => { 
  return fetch(`https://wes-mitchell.github.io/miller-time-api/miller.json`)
  .then(res => res.json())
}