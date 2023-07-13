
import { Component } from 'react';
import './App.css';
import { TravelPlan } from './Travel';

export class App extends Component {
  render() {
  return (
    <div className='background'>
    <div className="container">
      <h1>Take with you on a trip</h1>
    </div>
      <TravelPlan/>
    </div>
  );
}
}

export default App;
