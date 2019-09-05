import React from 'react'
import config from '../config';
import Cat from '../components/Cat/Cat'
import Dog from '../components/Dog/Dog'

export default class PetPage extends React.Component {
  state = {
    cat: [{
      imageURL: '',
      imageDescription: '',
      name: '',
      sex: '',
      age: '',
      breed: '',
      story: '',
      adopter: '',
    }],
    dog: [{
      imageURL: '',
      imageDescription: '',
      name: '',
      sex: '',
      age: '',
      breed: '',
      story: '',
      adopter: '',
    }],
    user: ''
  }

  handleGetDogs = () => {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
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
      console.log(res)
      this.setState({
        dog: res
      })
    })
      .catch(err => {
        console.log(err);
      })
  }

  handleGetCats = () => {
    return fetch(`${config.API_ENDPOINT}/cats`, {
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
        cat: res
      })
    })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    const requestCat = fetch(`${config.API_ENDPOINT}/cats`).then(res => res.json())
    const requestDog = fetch(`${config.API_ENDPOINT}/dogs`).then(res => res.json())
    Promise.all([
      requestCat,
      requestDog
    ])
    .then(res => {
      console.log(res)
      this.setState({
        cat: res[0],
        dog: res[1]
      })
    })
  }


  render() {
    return (
      <>
        <h2>Here are the pets available for Adoption</h2>
        <main className='pets-wrapper'>
          <Cat
            cat={this.state.cat}
            user={this.state.user}
            handleGetCats={this.handleGetCats}
            />
          <Dog
            dog={this.state.dog}
            user={this.state.user}
            handleGetDogs={this.handleGetDogs}
            />
        </main>
      </>
    )
  }
}
