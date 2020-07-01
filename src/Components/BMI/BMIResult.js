import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaAngleDoubleLeft } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const BMIResult = () => {
    const bmi = useSelector(state => state.bmi)
    const [label, setLabel] = useState('')

    useEffect(() => {
        result()
    }, [])

    const result = () => {
        if (bmi > 30)
            setLabel('โรคอ้วนอันตราย')
        else if (bmi > 25)
            setLabel('โรคอ้วน')
        else if (bmi > 23)
            setLabel('น้ำหนักเกิน')
        else if (bmi > 18.5)
            setLabel('สมส่วน')
        else
            setLabel('น้ำหนักต่ำกว่ามาตรฐาน')
    }

    return (
        <div className='bmi-body'>
            <div className='result-container'>
                <div className='card'>
                    <div className='face face1'>
                        <div className='content'>
                            <h1>{bmi}</h1>
                            <h3>{label}</h3>
                        </div>
                    </div>
                    <div className='face face2'>
                        <div className='content'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                            <div className='btn-container'>
                                <Link to={'/bmi-form'} >
                                    <FaAngleDoubleLeft color='#333' className='bottom-icon' />
                                </Link>
                                <Link to={'/'} >
                                    <FaHome color='#333' className='bottom-icon' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BMIResult
