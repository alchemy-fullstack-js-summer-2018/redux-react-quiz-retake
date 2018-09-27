import React, { Component, Fragment } from 'react';
import logo from '../assets/logo.png';
import TopAnimal from './TopAnimal';
import AnimalLikes from './AnimalLikes';
import './App.css';

class App extends Component {

  render() {

    return (
      <Fragment>
        <header>
          <img src={logo}/>
          <h1>React &amp; Redux Quiz</h1>
        </header>
        <main>
          <TopAnimal/>
          <AnimalLikes/>
        </main>
      </Fragment>
    );
  }
}

export default App;
