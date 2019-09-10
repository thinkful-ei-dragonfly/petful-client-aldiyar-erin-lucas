import React from 'react';
import config from '../../config';
import './Cat.css'
import CatQueue from '../CatQueue/CatQueue';

export default class Cat extends React.Component {

  componentDidMount(){
    let intervalId = setInterval(this.startProcess, 3000)
    this.setState({ intervalId })
  }

  continueProcess = () => {
    return fetch(`${config.API_ENDPOINT}/cats`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(()=> {
        this.props.handleGetCats();
        let intervalId = setInterval(this.startProcess, 3000)
        this.setState({ intervalId })
      })
      .catch(err => {
        console.log(err);
      })
  }

  startProcess = () => {
    if(this.props.cat[0].adopter === 'ME' || this.props.cat[0].adopter === null){
      clearInterval(this.state.intervalId)
    } else {
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
  }

  findPlace = () => {
    let placeInLine;
    this.props.cat.forEach((cat, index) => {
      if(cat.adopter === null || cat.adopter === 'ME'){
          placeInLine = index -1
        }      
    })
    return placeInLine;
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
      cat = `All animals have been adopted. Check back in an hour to see if they've been returned`;
    }
  }
  let button = ''
    if (this.props.cat[0].adopter) {
      if (this.props.cat[0].adopter.name === 'ME' ) {
        button = (
          <>
            <p>It's your turn to adopt!</p>
            <button type="button" onClick={this.continueProcess}> Adopt {this.props.cat[0].name}</button>
          </>
        )
      } else {
        let next
        if (this.props.cat[1].adopter && this.props.cat[1].adopter.name !== 'ME') {
            next = <p>Up next is {this.props.cat[1].adopter.name}.  Your place in line: {this.findPlace()}</p>
        } else if (!this.props.cat[1].adopter || this.props.cat[1].adopter.name === 'ME') {
          next = <p>You're up next!</p>
        }
        button = (
          <>
            <p>It is currently not your turn. {this.props.cat[0].name} has been adopted by {this.props.cat[0].adopter.name}.</p>
            {next}
            <button type="button" disabled>Adopt {this.props.cat[0].name}</button>
          </>
        )
      }
    } else {
      button = (
        <>
          <p>It's your turn to adopt!</p>
          <button type="button" onClick={this.continueProcess}> Adopt {this.props.cat[0].name}</button>
        </>
    )
    }

return(
  <div className='cat'>
    {cat}
    {button}
    <CatQueue cat={this.props.cat}/>
  </div>
)
}
}
