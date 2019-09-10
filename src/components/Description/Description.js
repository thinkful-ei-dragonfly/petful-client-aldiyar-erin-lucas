import React from 'react';
import './Description.css'

export default class Description extends React.Component {

renderImage(){
  let image;
  if(this.props.image !== ''){
    image = <img src={this.props.image} className="logo" alt="petful logo"></img>
  }
  return image
}

render() {
return(
  <div className="center">
    {this.renderImage()}
    <p className='intro-text'>{this.props.intro}</p>
  </div>
)
}
}
