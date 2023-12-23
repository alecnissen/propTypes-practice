import { useState } from 'react'
import './App.css'
// import Component from "Component.jsx";
import Component from './Component'
import React from 'react'

function App() {
  return <Component person={{ name: "Alec", age: 26, favoriteFood: "Pizza"}}/>
}

export default App 
