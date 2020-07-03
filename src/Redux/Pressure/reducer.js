const pressure = {
    systolic: 0,
    diastolic: 0
}

export const pressureReducer = (data = pressure, action) => {
    switch (action.type) {
        case 'GET_SYSTOLIC': return {...data, systolic: action.systolic}
        case 'GET_DIASTOLIC': return {...data, diastolic: action.diastolic}
        default: return data
    }
}