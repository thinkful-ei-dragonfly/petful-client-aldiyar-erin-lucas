import React from 'react';
import config from '../../config';
import './Cat.css'
import CatQueue from '../CatQueue/CatQueue';

export default class Cat extends React.Component {

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
  if(this.props.cat[0].imageURL !== ''){
    image = <img src={this.props.cat[0].imageURL} className="cat-image" alt={this.props.cat.imageDescription}></img>
  }

return(
  <div className='cat'>
    {image}
    <section className='pet-info'>
      <h3>More about {this.props.cat[0].name}:</h3>
      <p className='pet-name'>Name: {this.props.cat[0].name}</p>
      <p className='pet-breed'>Breed: {this.props.cat[0].breed}</p>
      <p className='pet-sex'>Sex: {this.props.cat[0].sex}</p>
      <p className='pet-age'>Age: {this.props.cat[0].age}</p>
      <p className='pet-story'>Story: {this.props.cat[0].story}</p>
    </section>
    <button type="button" onClick={() =>{this.handleDelete()}}>Adopt {this.props.cat[0].name}</button>
    <CatQueue cat={this.props.cat}/>
  </div>
)
}
}