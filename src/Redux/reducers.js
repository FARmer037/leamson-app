import { combineReducers } from "redux";
import { bmiReducer } from "./BMI/reducer";
import { pressureReducer } from "./Pressure/reducer";
import { sugarReducer } from "./Sugar/reducer"

export const reducers = combineReducers({
    bmi: bmiReducer,
    pressure: pressureReducer,
    sugar: sugarReducer
})