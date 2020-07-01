const initailForm = {
    weight: 0,
    height: 0
}

export const formReducer = (data = initailForm, action) => {
    switch (action.type) {
        case 'CHANE_WEIGHT': return { ...data, weight: action.weight }
        case 'CHANE_HEIGHT': return { ...data, height: action.height }
        default: return data
    }
}

export const bmiReducer = (bmi = 0, action) => {
    switch (action.type) {
        case 'GET_BMI': return action.bmi
        default: return bmi
    }
}