import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BMIForm from './Components/BMI/BMIForm';
import BMIResult from './Components/BMI/BMIResult';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        
        <Route path='/bmi-form' component={BMIForm} />
        <Route path='/bmi-result' component={BMIResult} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
