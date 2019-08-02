import React from 'react';

export default function Description(props) {

  let image;
  if(props.image !== ''){
    image = <img src={props.image} alt="petful logo"></img>
  }

return(
  <div>
    {image}
    {props.intro}
  </div>
)
}