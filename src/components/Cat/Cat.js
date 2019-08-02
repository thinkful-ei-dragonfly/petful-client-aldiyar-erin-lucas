import React from 'react';
import config from '../../config';
import './Cat.css'
import CatQueue from '../CatQueue/CatQueue';

export default class Cat extends React.Component {

  handleDelete = () => {
    return fetch(`${config.API_ENDPOINT}/cats`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(()=> {
        this.props.handleGetCats();
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
  let cat;
  if(this.props.cat[0]){
    cat = 
    <div>
    <img src={this.props.cat[0].imageURL} className="cat-image" alt={this.props.cat.imageDescription}></img>
    <section className='pet-info'>
      <h3>More about {this.props.cat[0].name}:</h3>
      <p className='pet-name'>Name: {this.props.cat[0].name}</p>
      <p className='pet-breed'>Breed: {this.props.cat[0].breed}</p>
      <p className='pet-sex'>Sex: {this.props.cat[0].sex}</p>
      <p className='pet-age'>Age: {this.props.cat[0].age}</p>
      <p className='pet-story'>Story: {this.props.cat[0].story}</p>
    </section>
    </div>

    if(!this.props.cat){
      cat = 'All animals have been adopted';
    }
  }

return(
  <div className='cat'>
    {cat}
    <button type="button" onClick={() =>{this.handleDelete()}}>Adopt {this.props.cat[0].name}</button>
    <CatQueue cat={this.props.cat}/>
  </div>
)
}
}