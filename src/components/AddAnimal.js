import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';


class AddAnimal extends Component {
  state = { 
    animal: ''
  };

  static propTypes = {
    animal: PropTypes.string,
    addAnimal: PropTypes.func,
  
  };

  handleSubmit = (event) => {
    event.preventDefault();
  
    this.props.addAnimal(this.state.animal);
    this.setState({ animal: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() { 
    const { animal } = this.state;
    const { type } = this.state;

    return ( 
      <Fragment>
        <h2>Add Animal</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="animal" value={ animal } onChange={this.handleChangeAnimal}/>
          <input type="text" name="type" value={ type } onChange={this.handleChangeType}/>
          <button type="submit">Add</button>
        </form>
      </Fragment>
    );
  }
}
 
export default AddAnimal;