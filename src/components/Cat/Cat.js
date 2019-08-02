import React from 'react';

export default function Cat(props) {
  debugger;
  let image;
  if(props.imageURL !== ''){
    image = <img src={props.cat.imageURL} className="cat-image" alt={props.cat.imageDescription}></img>
  }

return(
  <div className='cat'>
    {image}
    <section className='pet-info'>
      <p className='pet-name'>{props.cat.name}</p>
      <p className='pet-breed'>{props.cat.breed}</p>
      <p className='pet-sex'>{props.cat.sex}</p>
      <p className='pet-age'>{props.cat.age}</p>
      <p className='pet-story'>{props.cat.story}</p>
    </section>
  </div>
)
}
