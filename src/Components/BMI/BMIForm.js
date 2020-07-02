import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './BMI.css'
import { FaHome } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const BMIForm = () => {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)

  const dispatch = useDispatch()

  const getBMI = () => {
    const BMI = weight / (height * height)
    dispatch({ type: 'GET_BMI', bmi: BMI.toFixed(2) })
  }

  return (
    <div className='bmi-body'>
      <div className='container'>
        <div className='bmi-form'>
          <h1>BMI</h1>
          <form>
            <input type='number' step='any' name='' placeholder='น้ำหนัก (kg)' onChange={e => setWeight(e.target.value)}></input>
            <input type='number' step='any' name='' placeholder='ส่วนสูง (cm)' onChange={e => setHeight((e.target.value)/100)}></input>
          </form>

          <Link to={'/bmi-result'} style={{ textDecoration: 'none' }}>
            <button onClick={getBMI}>ประมวณผล</button>
          </Link>

          <Link to={'/'} >
            <FaHome color='#fff' className='home-icon' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BMIForm