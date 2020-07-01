import { combineReducers } from "redux";
import { formReducer, bmiReducer } from "./BMI/reducer";

export const reducers = combineReducers({
    bmiForm: formReducer,
    bmi: bmiReducer
})