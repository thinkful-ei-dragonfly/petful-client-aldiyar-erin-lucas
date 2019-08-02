import React from 'react';
import Description from '../components/Description';

export default class LandingPage extends React.Component {

  render() {
    return(
      <div>
        <Description image={this.props.image} intro={this.props.intro}/>
      </div>
    )
  }
}