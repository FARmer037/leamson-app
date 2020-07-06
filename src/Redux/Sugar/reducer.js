const pressure = {
    sugar: 0,
    isChecked: false
}

export const sugarReducer = (data = pressure, action) => {
    switch (action.type) {
        case 'GET_SUGAR': return {...data, sugar: action.sugar}
        case 'GET_ISCHECKED': return {...data, isChecked: action.isChecked}
        default: return data
    }
}