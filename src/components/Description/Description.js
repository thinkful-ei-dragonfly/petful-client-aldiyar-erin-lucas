import React from 'react';
import { Link } from 'react-router-dom'
import './Description.css'

export default class Description extends React.Component {
render() {
  let image;
  if(this.props.image !== ''){
    image = <img src={this.props.image} className="logo" alt="petful logo"></img>
  }

return(
  <div className="center">
    {image}
    <p className='intro-text'>{this.props.intro}</p>
    <button><Link to="/pets">Adopt!</Link></button>
  </div>
)
}
}
