import React from 'react';
import { useState, useEffect } from 'react';
import { api } from '../../../services/api'
import  style  from './style.module.scss'
interface CityProps {
  temperature: string;

}

export function InputCity() {

  const [input, setInput] = useState('')
  const [description, setDescription] = useState('')
  const [cityTemperature, setCityTemperature] = useState('')
  const [cityName, setCityName] = useState('')
  const [load, setLoad] = useState(false)


  async function getInput() {

    const response = await api.get(input);
    setLoad(true)
    setCityTemperature(response.data.temperature)
    setDescription(response.data.description)
    setCityName(input)
}
  return (

    <div className={style.grid}>
      <div className={style.columnSide}>
        <div>
      <input
        type="text"
        //value={value}
        onChange={e => { setInput(e.currentTarget.value); }}
        //className={style.input}
      />
       <button type="button"
        onClick={getInput}
      >Search</button>
      </div>
      
      </div>
     
      <div> 
    
      <h1>How's the weather's like in:</h1>
      <h2 className={style.captalized}>{cityName}</h2>
      <h2>{cityTemperature}</h2>
      <h2>{description}</h2>
    </div>
    </div>

  )
}