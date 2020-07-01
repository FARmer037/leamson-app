import React from 'react';
import Home from './Components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BMIForm from './Components/BMI/BMIForm';
import BMIResult from './Components/BMI/BMIResult';
import BMISuggestion from './Components/BMI/BMISuggestion';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        
        <Route path='/bmi-form' component={BMIForm} />
        <Route path='/bmi-result' component={BMIResult} />
        <Route path='/bmi-suggestion' component={BMISuggestion} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
