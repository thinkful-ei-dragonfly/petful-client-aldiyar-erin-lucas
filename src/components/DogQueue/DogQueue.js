import React from 'react';

export default function DogQueue(props) {
  let mappedPets;
  if(props.dog.length > 1){
    let currentDog = props.dog[0];
    mappedPets = props.dog.filter(dogs => dogs.name !== currentDog.name).map(otherDog => {
    return <li className="thumbnail"><img src={otherDog.imageURL} alt={otherDog.imageDescription}></img></li>}
    );
  }

return(
  <div>
    <ul className='dog-queue'>
      {mappedPets}
    </ul>
  </div>
)
}