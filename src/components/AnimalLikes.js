import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Animal from './Animal';
import AddAnimal from './AddAnimal';
import { addAnimal, loadAnimals, likeAnimal } from './actions';
import { animals, getAnimals } from './reducers';

class AnimalLikes extends Component {
  state = {  };

  static propTypes = {  
    animals: PropTypes.func,
    loadAnimals: PropTypes.func,
    addAnimal: PropTypes.func,
    getAnimals: PropTypes.array,
    likeAnimal: PropTypes.func
  };

  componentDidMount() {
    this.props.loadAnimals();
  }

  handleLikeAnimal = animal => {
    this.props.likeAnimal(animal);
  };

  render() { 
    
    const { animals, addAnimal } = this.props;

    return ( 
      <section>
        <h2>Animals List</h2>
        <ul>
          {animals.map(animal => (
            <Animal 
              key={animal} 
              color={animal}
              onSelect={this.handleLikeAnimal}
            />
          ))}


        </ul>

        <AddAnimal  addAnimal={addAnimal}/>
        
      </section>  

    );
  }
}
 
export default connect(
  state => ({
    animals: getAnimals(state)
  }),
  { loadAnimals, addAnimal, likeAnimal }
)(AnimalLikes);