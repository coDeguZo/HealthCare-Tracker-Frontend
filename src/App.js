import React from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country'
import CountryContainer from './containers/CountryContainer'

class App extends React.Component {
  
  render(){
  return (
    <div className="App">
      <h1> Coronavirus Tracker</h1>
      <CountryContainer />
    </div>
  );
  }
}

export default App;
