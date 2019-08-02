import React from 'react';
import './Description.css'

export default function Description(props) {

  let image;
  if(props.image !== ''){
    image = <img src={props.image} className="logo" alt="petful logo"></img>
  }

return(
  <div className="center">
    {image}
    {props.intro}
    <button>Adopt!</button>
  </div>
)
}