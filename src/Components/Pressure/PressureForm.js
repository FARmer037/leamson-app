import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Pressure.css'
import { FaHome } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const PressureForm = () => {
  const [systolic, setSystolic] = useState(0)
  const [diastolic, setDiastolic] = useState(0)
  const [isChecked, setIsCheck] = useState(false)

  const dispatch = useDispatch()

  const getPressure = () => {
    dispatch({ type: 'GET_SYSTOLIC', systolic })
    dispatch({ type: 'GET_DIASTOLIC', diastolic })
    dispatch({ type: 'GET_ISCHECKED', isChecked })
  }

  return (
    <div className='pressure-body'>
      <div className='container'>
        <div className='bmi-form'>
          <h1>ความดันเลือด</h1>
          <form>
            <input type='number' step='any' name='' placeholder='ตัวบน' onChange={e => setSystolic(e.target.value)}></input>
            <input type='number' step='any' name='' placeholder='ตัวล่าง' onChange={e => setDiastolic(e.target.value)}></input>
            <div className='checkbox'>
              <input type="checkbox" onChange={e => setIsCheck(e.target.checked)} />
              <label>เป็นผู้ป่วย</label>
            </div>
          </form>

          <Link to={'/pressure-result'} style={{ textDecoration: 'none' }}>
            <button onClick={getPressure}>ประมวณผล</button>
          </Link>

          <Link to={'/'} >
            <FaHome color='#fff' className='home-icon' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PressureForm