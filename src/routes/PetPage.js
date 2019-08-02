import React from 'react'
import config from '../config';
import Cat from '../components/Cat/Cat'
import Dog from '../components/Dog/Dog'

export default class PetPage extends React.Component {
  state = {
    cat: {
      imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
      imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
      name: 'Fluffy',
      sex: 'Female',
      age: 2,
      breed: 'Bengal',
      story: 'Thrown on the street'
    },
    dog: {
      imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away'
    }
  }

  componentDidMount() {
    const requestCat = fetch(`${config.API_ENDPOINT}/cat`).then(res => res.json())
    const requestDog = fetch(`${config.API_ENDPOINT}/dog`).then(res => res.json())
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
        <h1>Here are the pets available for Adoption</h1>
        <main className='pets-wrapper'>
          <Cat
            cat={this.state.cat}
            />
          <Dog
            dog={this.state.dog}
            />
        </main>
      </>
    )
  }
}
