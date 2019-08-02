import React from 'react';

export default function Dog(props) {
  let image;
  if(props.dog[0].imageURL !== ''){
    image = <img src={props.dog[0].imageURL} className="dog-image" alt={props.dog.imageDescription}></img>
  }

  let mappedPets;
  if(props.dog.length > 1){
    let currentDog = props.dog[0];
    mappedPets = props.dog.filter(dogs => dogs.name !== currentDog.name).map(otherdog => {
    return <li><img src={otherdog.imageURL} alt={otherdog.imageDescription}></img></li>}
    );
  }

return(
  <div className='dog'>
    {image}
    <section className='pet-info'>
      <p className='pet-name'>{props.dog[0].name}</p>
      <p className='pet-breed'>{props.dog[0].breed}</p>
      <p className='pet-sex'>{props.dog[0].sex}</p>
      <p className='pet-age'>{props.dog[0].age}</p>
      <p className='pet-story'>{props.dog[0].story}</p>
    </section>
    <h2>Additional Dogs</h2>
    <ul>
      {mappedPets}
    </ul>
  </div>
)
}
