import React from 'react';

export default function Dog(props) {

  let image;
  if(props.imageURL !== ''){
    image = <img src={props.dog.imageURL} className="dog-image" alt={props.dog.imageDescription}></img>
  }

return(
  <div className='dog'>
    {image}
    <section className='pet-info'>
      <p className='pet-name'>{props.dog.name}</p>
      <p className='pet-breed'>{props.dog.breed}</p>
      <p className='pet-sex'>{props.dog.sex}</p>
      <p className='pet-age'>{props.dog.age}</p>
      <p className='pet-story'>{props.dog.story}</p>
    </section>
  </div>
)
}
