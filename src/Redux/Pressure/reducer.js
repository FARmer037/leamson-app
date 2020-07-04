const pressure = {
    systolic: 0,
    diastolic: 0,
    isChecked: false
}

export const pressureReducer = (data = pressure, action) => {
    switch (action.type) {
        case 'GET_SYSTOLIC': return {...data, systolic: action.systolic}
        case 'GET_DIASTOLIC': return {...data, diastolic: action.diastolic}
        case 'GET_ISCHECKED': return {...data, isChecked: action.isChecked}
        default: return data
    }
}