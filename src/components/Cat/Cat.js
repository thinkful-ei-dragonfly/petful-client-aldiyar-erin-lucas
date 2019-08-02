import React from 'react';

export default function Cat(props) {
  let image;
  if(props.cat[0].imageURL !== ''){
    image = <img src={props.cat[0].imageURL} className="cat-image" alt={props.cat.imageDescription}></img>
  }

  let mappedPets;
  if(props.cat.length > 1){
    let currentCat = props.cat[0];
    mappedPets = props.cat.filter(cats => cats.name !== currentCat.name).map(otherCat => {
    return <li><img src={otherCat.imageURL} alt={otherCat.imageDescription}></img></li>}
    );
  }

return(
  <div className='cat'>
    {image}
    <section className='pet-info'>
      <p className='pet-name'>{props.cat[0].name}</p>
      <p className='pet-breed'>{props.cat[0].breed}</p>
      <p className='pet-sex'>{props.cat[0].sex}</p>
      <p className='pet-age'>{props.cat[0].age}</p>
      <p className='pet-story'>{props.cat[0].story}</p>
    </section>
    <h2>Additional Cats</h2>
    <ul>
      {mappedPets}
    </ul>
    {/* <button onClick={() =>{
          await props.setGenre(e.target.value);
          await props.getGenrePlaylist();
          await TokenService.saveGenreToken('genre');
          await props.history.push('/results');
        }}</div>>Adopt Me</button> */}
  </div>
)
}