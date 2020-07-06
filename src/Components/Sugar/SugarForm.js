import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import './Sugar.css'
import { useDispatch } from 'react-redux'

function SugarForm() {
    const [sugar, setSugar] = useState('')
    const [isChecked, setIsCheck] = useState(false)

    const dispatch = useDispatch()

    const getSugar = () => {
        dispatch({ type: 'GET_SUGAR', sugar })
        dispatch({ type: 'GET_ISCHECKED', isChecked })
    }

    return (
        <div className='sugar-body'>
            <div className='container'>
                <div className='bmi-form'>
                    <h1>น้ำตาลในเลือด</h1>
                    <form>
                        <input type='number' step='any' name='' placeholder='ค่าน้ำตาลในเลือด' onChange={e => setSugar(e.target.value)} />
                        <div className='checkbox'>
                            <input type="checkbox" onChange={e => setIsCheck(e.target.checked)} />
                            <label>เป็นผู้ป่วย</label>
                        </div>
                    </form>

                    <Link to={'/sugar-result'} style={{ textDecoration: 'none' }}>
                        <button onClick={getSugar}>ประมวณผล</button>
                    </Link>

                    <Link to={'/'} >
                        <FaHome color='#fff' className='home-icon' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SugarForm
