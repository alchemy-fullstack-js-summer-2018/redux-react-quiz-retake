import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  getTopAnimal } from './reducers';

class TopAnimal extends Component {
  state = {  };

  static propTypes = {  
    getTopAnimal: PropTypes.func
  };  

  render() { 
    return ( 
      <section>
        <h2>Top Animal</h2>
        <div> This is the Top Animal
          <p The top animal is ></p>
        </div>
        
      </section>  

    );
  }
}
 
export default connect(
  state => ({
    animal: getTopAnimal(state)
  }),
  null
)(TopAnimal);