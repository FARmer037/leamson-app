import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='body'>
            <Link to={'/bmi-form'} ><p className='btn bmi'>BMI</p></Link>
            <Link to={'/pressure-form'} ><p className='btn pressure'>ความดัน</p></Link>
            <Link to={'/sugar-form'} ><p className='btn sugar'>น้ำตาลในเลือด</p></Link>
        </div>
    )
}

export default Home
