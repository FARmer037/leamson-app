export const bmiReducer = (bmi = 0, action) => {
    switch (action.type) {
        case 'GET_BMI': return action.bmi
        default: return bmi
    }
}