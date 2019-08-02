import React from 'react';
import { Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage';
import config from './config';
import './App.css';

class App extends React.Component{

  state = {
    image: 'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/06/02/Photos/Processed/pets1-kYdB--621x414@LiveMint.jpg',
    intro: 'Hello, we are petful'
  }

  componentDidMount(){
    return fetch(`${config.API_ENDPOINT}/`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        return (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
      .then(res => {
        this.setState({
          image: res.image,
          intro: res.intro
        })
      })
      .catch(err => {
        console.log(err);
      })
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
