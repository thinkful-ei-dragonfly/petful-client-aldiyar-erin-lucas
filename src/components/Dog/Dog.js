import React from 'react';
import config from '../../config';
import DogQueue from '../DogQueue/DogQueue'

export default class Dog extends React.Component {

  handleDelete = () => {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
      method: 'DELETE',
      headers: {
        'content-type': 'applidogion/json',
      }
    })
      .then(()=> {
        this.props.handleGetDogs();
      })
      .catch(err => {
        console.log(err);
      })
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
        button = <button type="button" onClick={() =>{this.handleDelete()}}>Adopt {this.props.dog[0].name}</button>
      } else {
        button = (
          <button type="button" onClick={() =>{this.handleDelete()}}>{this.props.dog[0].name} has been adopted by {this.props.dog[0].adopter.name}. Click here to see if your turn is next</button>
        )
      }
    } else {
      button = <button type="button" onClick={() =>{this.handleDelete()}}>Adopt {this.props.dog[0].name}</button>
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