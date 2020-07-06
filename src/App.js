import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BMIForm from './Components/BMI/BMIForm';
import BMIResult from './Components/BMI/BMIResult';
import PressureForm from './Components/Pressure/PressureForm';
import PressureResult from './Components/Pressure/PressureResult';
import SugarForm from './Components/Sugar/SugarForm';
import SugarResult from './Components/Sugar/SugarResult';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        
        <Route path='/bmi-form' component={BMIForm} />
        <Route path='/bmi-result' component={BMIResult} />

        <Route path='/pressure-form' component={PressureForm} />
        <Route path='/pressure-result' component={PressureResult} />

        <Route path='/sugar-form' component={SugarForm} />
        <Route path='/sugar-result' component={SugarResult} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
