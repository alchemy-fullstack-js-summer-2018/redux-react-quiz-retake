import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Animal extends Component {
  state = {  };

  static propTypes = { 
    animal: PropTypes.string,
    onSelect: PropTypes.func,
    
  };

  render() { 
    const { animal, onSelect } = this.props;
    
    return ( 
      <li onClick={() => onSelect(animal) }>
        { animal }
      </li>
    );
  }
}
 
export default Animal;