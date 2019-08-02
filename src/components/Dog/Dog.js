import React from 'react';
import DogQueue from '../DogQueue/DogQueue'

export default class Dog extends React.Component {

  handleDelete = () => {
    console.log('deleted')
    // return fetch(`${config.API_ENDPOINT}/cats`, {
    //   method: 'DELETE',
    //   headers: {
    //     'content-type': 'application/json',
    //   }
    // })
    //   .then(res => {
    //     return (!res.ok)
    //       ? res.json().then(e => Promise.reject(e))
    //       : res.json()
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }

  render() {
  
  let image;
  if(this.props.dog[0].imageURL !== ''){
    image = <img src={this.props.dog[0].imageURL} className="dog-image" alt={this.props.dog.imageDescription}></img>
  }

return(
  <div className='dog'>
    {image}
    <section className='pet-info'>
    <h3>More about {this.props.dog[0].name}:</h3>
      <p className='pet-name'>Name: {this.props.dog[0].name}</p>
      <p className='pet-breed'>Breed: {this.props.dog[0].breed}</p>
      <p className='pet-sex'>Sex: {this.props.dog[0].sex}</p>
      <p className='pet-age'>Age: {this.props.dog[0].age}</p>
      <p className='pet-story'>Story: {this.props.dog[0].story}</p>
    </section>
    <button type="button" onClick={() =>{this.handleDelete()}}>Adopt {this.props.dog[0].name}</button>
    <DogQueue dog={this.props.dog}/>
  </div>
)
}
}
