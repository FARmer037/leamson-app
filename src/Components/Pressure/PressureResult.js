import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaHome, FaAngleDoubleLeft } from 'react-icons/fa'
import './Pressure.css'

const PressureResult = () => {
    const pressure = useSelector(state => state.pressure)

    const [label, setLabel] = useState('')
    const [color, setColor] = useState('')

    const result = () => {
        if (pressure.systolic >= 180 || pressure.diastolic >= 110) {
            setLabel('กลุ่มป่วย ระดับ 3')
            setColor('red')
        }
        else if (pressure.systolic >= 160 || pressure.diastolic >= 100) {
            setLabel('กลุ่มป่วย ระดับ 2')
            setColor('orange')
        }
        else if (pressure.systolic >= 140 || pressure.diastolic >= 90) {
            setLabel('กลุ่มป่วย ระดับ 1')
            setColor('yellow')
        }
        else if (pressure.systolic >= 120 || pressure.diastolic >= 80) {
            setLabel('กลุ่มเสี่ยง')
            setColor('green')
        }
        else if (pressure.systolic < 120 || pressure.diastolic < 80) {
            setLabel('ปกติ')
            setColor('white')
        }
    }

    useEffect(() => {
        result()
    }, [])
    return (
        <div className='pressure-body'>
            <div className='result-container'>
                <div className='card'>
                    <div className={'face face1 ' + color}>
                        <div className='content'>
                            <h1>{pressure.systolic}/{pressure.diastolic}</h1>
                            <h3>{label}</h3>
                        </div>
                    </div>
                    <div className='face face2'>
                        <div className='content'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                            <div className='btn-container'>
                                <Link to={'/pressure-form'} >
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

export default PressureResult
