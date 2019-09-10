import React from 'react'
import config from '../config';
import Cat from '../components/Cat/Cat'
import Dog from '../components/Dog/Dog'

export default class PetPage extends React.Component {
  state = {
    // cat: [ { "imageURL": "https://placekitten.com/200/300", "imageDescription": "Young cat snow", "name": "Cat Snow of House Stark", "sex": "Male", "age": 1, "breed": "Domestic short haired", "story": "Here is a story of Cat Snow...." }, { "imageURL": "https://placekitten.com/200/301", "imageDescription": "Curious cat", "name": "Katron Lannister", "sex": "Male", "age": 1, "breed": "Domestic short haired", "story": "Here is a story of Katron...." }, { "imageURL": "https://placekitten.com/200/302", "imageDescription": "This cat judges you evey day", "name": "Judge Dredd", "sex": "Male", "age": 2, "breed": "Multicolored cat", "story": "Here is a story of Judge Dredd...." }, { "imageURL": "https://placekitten.com/300/304", "imageDescription": "Sleepy head", "name": "Sleepster the Trickster", "sex": "Female", "age": 3, "breed": "Domestic short haired", "story": "Here is a story of Sleepster the Trickster...." } ],
    // dog: [ { "imageURL": "http://place-puppy.com/200x202", "imageDescription": "Doggo", "name": "Shyster the Dog", "sex": "Male", "age": 2, "breed": "Puppy", "story": "Here is a story of Shyster the Dog...." }, { "imageURL": "http://place-puppy.com/200x204", "imageDescription": "Perfect puppy", "name": "Yawny", "sex": "Female", "age": 1, "breed": "Retreiver", "story": "Here is a story of Yawny...." }, { "imageURL": "http://place-puppy.com/200x206", "imageDescription": "Black Fury", "name": "Toothless", "sex": "Male", "age": 3, "breed": "Retreiver", "story": "Here is a story of Toothless...." }, { "imageURL": "http://place-puppy.com/200x210", "imageDescription": "Has big ears", "name": "Expensivy", "sex": "Female", "age": 2, "breed": "Bulldog", "story": "Here is a story of Expensivy...." } ],
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
