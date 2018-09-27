import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Animal from './Animal';
import AddAnimal from './AddAnimal';
import { addAnimal, loadAnimals, likeAnimal } from './actions';
import { animals, getAnimals } from './reducers';

class AnimalLikes extends Component {
  state = {  };

  static propTypes = {  
    animals: PropTypes.array,
    loadAnimals: PropTypes.func,
    addAnimal: PropTypes.func,
    likeAnimal: PropTypes.func
  };

  componentDidMount() {
    this.props.loadAnimals();
  }

  handleSelectedColor = animal => {
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
 
export default (
  state => ({
    
    animals: getAnimals(state)
  }),
  { loadAnimals, addAnimal, likeAnimal }
)(AnimalLikes);