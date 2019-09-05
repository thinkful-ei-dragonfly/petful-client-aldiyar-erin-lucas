import React from 'react';
import config from '../../config';

import DogQueue from '../DogQueue/DogQueue'

export default class Dog extends React.Component {

  handleDelete = () => {
    this.startProcess()
    setInterval(this.startProcess, 5000)
  }

  startProcess = () => {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }
      })
        .then(() => {
          this.props.handleGetDogs();
        })
        .catch(err => {
          console.log(err);
        })
  }

  findPlace = () => {
    let placeInLine;
    this.props.dog.forEach((dog, index) => {
      if(dog.adopter === null){
        placeInLine = index - 1
      }
    })
    return placeInLine;
  }

  render() {
    let dog;
    if(this.props.dog[0]){
      dog =
      <div>
      <img src={this.props.dog[0].imageURL} className="dog-image" alt={this.props.dog.imageDescription}></img>
      <section className='pet-info'>
        <h3>More about {this.props.dog[0].name}:</h3>
        <p className='pet-name'>Name: {this.props.dog[0].name}</p>
        <p className='pet-breed'>Breed: {this.props.dog[0].breed}</p>
        <p className='pet-sex'>Sex: {this.props.dog[0].sex}</p>
        <p className='pet-age'>Age: {this.props.dog[0].age}</p>
        <p className='pet-story'>Story: {this.props.dog[0].story}</p>
      </section>
      </div>

      if(!this.props.dog){
        dog = `All animals have been adopted. Check back in an hour to see if they've been returned`;
      }
    }
  let button = ''
  if (this.props.dog[0].adopter) {
    if (this.props.dog[0].adopter.name === 'ME' ) {
      button = (
        <>
          <p>It's your turn to adopt!</p>
          <button type="button" onClick={() =>{this.handleDelete()}}> Adopt {this.props.dog[0].name}</button>
        </>
      )
    } else {
      let next
      if (this.props.dog[1].adopter && this.props.dog[1].adopter.name !== 'ME') {
          next = <p>Up next is {this.props.dog[1].adopter.name} Your place in line: {this.findPlace()}</p>
      } else if (!this.props.dog[1].adopter || this.props.dog[1].adopter.name === 'ME') {
        next = <p>You're up next!</p>
      }
      button = (
        <>
          <p>It is currently not your turn. {this.props.dog[0].name} has been adopted by {this.props.dog[0].adopter.name}.</p>
          {next}
          <button type="button" onClick={() =>{this.handleDelete()}}>Next dog</button>
        </>
      )
    }
  } else {
    button = (
      <>
        <p>It's your turn to adopt!</p>
        <button type="button" onClick={() =>{this.handleDelete()}}> Adopt {this.props.dog[0].name}</button>
      </>
  )
  }

return(
  <div className='dog'>
    {dog}
    
    {button}
    <DogQueue dog={this.props.dog}/>
  </div>
)
}
}
