import React from 'react';
import { Link } from 'react-router-dom'
import Description from '../components/Description/Description';

export default class LandingPage extends React.Component {

  render() {
    return(
      <div className='landing-page'>
        <Description image={this.props.image} intro={this.props.intro} {...this.props}/>
        <Link to="/pets"><button>Adopt!</button></Link>
      </div>
    )
  }
}
