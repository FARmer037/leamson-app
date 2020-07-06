import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaHome, FaAngleDoubleLeft } from 'react-icons/fa'
import './Sugar.css'

function SugarResult() {
    const sugar = useSelector(state => state.sugar)

    const [label, setLabel] = useState('')
    const [color, setColor] = useState('')

    const result = () => {
        if (sugar.isChecked) {
            if (sugar.sugar >= 183) {
                setLabel('กลุ่มป่วย ระดับ 3')
                setColor('red')
            }
            else if (sugar.sugar >= 155) {
                setLabel('กลุ่มป่วย ระดับ 2')
                setColor('orange')
            }
            else if (sugar.sugar >= 126) {
                setLabel('กลุ่มป่วย ระดับ 1')
                setColor('yellow')
            }
            else if (sugar.sugar < 126) {
                setLabel('ควบคุมได้')
                setColor('green')
            }
        }
        else {
            if (sugar.sugar >= 183) {
                setLabel('สงสัยป่วย')
                setColor('red')
            }
            else if (sugar.sugar >= 155) {
                setLabel('สงสัยป่วย')
                setColor('orange')
            }
            else if (sugar.sugar >= 126) {
                setLabel('สงสัยป่วย')
                setColor('yellow')
            }
            else if (sugar.sugar >= 100) {
                setLabel('กลุ่มเสี่ยง')
                setColor('lightgreen')
            }
            else if (sugar.sugar < 100) {
                setLabel('ปกติ')
                setColor('white')
            }
        }
    }

    useEffect(() => {
        result()
    }, [])

    return (
        <div className='sugar-body'>
            <div className='result-container'>
                <div className='card'>
                    <div className={'face face1 ' + color}>
                        <div className='content'>
                            <h1>{sugar.sugar}</h1>
                            <h3>{label}</h3>
                        </div>
                    </div>
                    <div className='face face2'>
                        <div className='content'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                            <div className='btn-container'>
                                <Link to={'/sugar-form'} >
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

export default SugarResult
