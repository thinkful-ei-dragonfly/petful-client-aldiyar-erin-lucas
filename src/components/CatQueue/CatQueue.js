import React from 'react';
import './CatQueue.css';

export default function CatQueue(props) {
  let mappedPets;
  if(props.cat.length > 1){
    let currentCat = props.cat[0];
    mappedPets = props.cat.filter(cats => cats.name !== currentCat.name).map(otherCat => {
    return <li className="thumbnail"><img src={otherCat.imageURL} alt={otherCat.imageDescription}></img></li>}
    );
  }

return(
  <div>
    <ul className='cat-queue'>
      {mappedPets}
    </ul>
  </div>
)
}