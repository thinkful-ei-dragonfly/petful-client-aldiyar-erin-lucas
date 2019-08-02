import React from 'react';
import Description from '../components/Description';

export default class LandingPage extends React.Component {
  
  // componentDidMount(){

  // }

  render() {
    return(
      <div>
        <Description image={this.props.image} intro={this.props.intro}/>
      </div>
    )
  }
}