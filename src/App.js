import React from 'react';
import { Route, Link } from 'react-router-dom'
import LandingPage from './routes/LandingPage';
import PetPage from './routes/PetPage'
import config from './config';
import './App.scss';
import image from './fybfalxjivqrcwdhz00d.png'

class App extends React.Component{

  state = {
    image: '',
    intro: 'Loading...',
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
      <header><Link to='/'><h1>Petful <img src={image} alt='Petful Logo'></img></h1></Link></header>
      <Route
        exact path={'/'}
        component={props =>
          <LandingPage
            image={this.state.image}
            intro={this.state.intro}
            {...props}
            />}
          />
        <Route
          exact path={'/pets'}
          component={PetPage}
          />

    </div>
  );
  }
}

export default App;
