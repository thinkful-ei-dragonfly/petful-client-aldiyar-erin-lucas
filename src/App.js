import React from 'react';
import { Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage';
import './App.css';

class App extends React.Component{

  state={
    image: 'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/06/02/Photos/Processed/pets1-kYdB--621x414@LiveMint.jpg',
    intro: 'Hello, we are petful'
  }
render() {
  return (
    <div className="App">
      <h1>Petful</h1>
      <Route 
        exact path={'/'}
        component={props => 
          <LandingPage
            image={this.state.image}
            intro={this.state.intro}
            {...props}
            />} 
          />
    </div>
  );
  }
}

export default App;
