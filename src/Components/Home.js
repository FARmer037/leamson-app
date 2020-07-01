import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='body'>
            <Link to={'/bmi-form'} ><p className='btn'>BMI</p></Link>
            <Link to={'/'} ><p className='btn'>ความดัน</p></Link>
            <Link to={'/'} ><p className='btn sugar'>น้ำตาลในเลือด</p></Link>
        </div>
    )
}

export default Home
