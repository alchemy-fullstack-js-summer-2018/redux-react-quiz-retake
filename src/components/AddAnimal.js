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
    this.setState({ name: '', type: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() { 
    const { name } = this.state;
    const { type } = this.state;

    return ( 
      <Fragment>
        <h2>Add Animal</h2>
        <form onSubmit={this.handleSubmit}>
          <label> Name </label>
          <input type="text" name="name" value={ name } onChange={this.handleChangeAnimal}/>
          <label> Type </label>
          <input type="text" name="type" value={ type } onChange={this.handleChangeType}/>
          <button type="submit">Add</button>
        </form>
      </Fragment>
    );
  }
}
 
export default AddAnimal;