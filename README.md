# React &amp; Redux Quiz

This quiz is designed to test your familiarity with basic React and Redux:

* State management with `redux` and `react-redux` (`connect` and `Provider`)
* State management with React (`this.state` and `this.setState()`)
* Components
* mapping Components
* props and prop types
* data down and events up

Follow the expect design specified.

## Submission requirement

* **Do a fork and PR like a normal lab**
* **Read the requirements more than once, it will save you a ton of time**

## Base Requirements

Build an app that displays the top liked animal based on a list of animals by name and type with an "Add Like" button. User can also add a new animal.

See [example.mov](example.mov) for running app.

Important to know:

* Other than `App.js`, you need to create the rest of the components as specified below
* The project already has an `App.js`. You should only need to uncomment the two components, otherwise **don't modify this file**. 
There is no state work that needs to happen in `App.js` 
* There is already a `loadAnimals` action creator in `actions.js` that will start you off with a few animals.
* You _will_ need to setup redux including `store.js` (you do not need any middleware) and setting up the `<Provider>` component in `index.js`
* Follow the technical requirements and specifications below

## Components

* App
    * connect(TopAnimal)
        * TopAnimal
    * connect(AnimalLikes)
        * AnimalLikes
            * Animal
            * AddAnimal

### Details

#### `TopAnimal`

* Use `connect` to add prop `animal` from `state` (`mapStateToProps`)
using a selector `getTopAnimal` (you'll need to write that) that finds the animal with the most likes.
* Renders:
    1. The name and type of the top animal, for example "The top animal is Lassie the Dog"

#### `AnimalLikes`

* Use `connect` to
    * mapStateToProps - add prop `animals` from `state` 
    * mapDispatchToProps - add action props `loadAnimals`, and `addAnimal`, and `likeAnimal`
* In `componentDidMount`, call `loadAnimals`
* Renders:
    1. A list of `Animal` components based on mapping the `animals` prop. Each
    `Animal` component is also passed the `likeAnimal` prop as `onLike`.
    2. An `AddAnimal` component that is passed the `addAnimal` prop

#### `Animal`

* Receives props `animal` and `onLike`
* Renders:
    1. Name and Type of the animal.
    2. Number of current Likes
    3. Button for "Add Like" that calls the
    `onLike` prop with the `id` of this animal

#### `AddAnimal`

* Receives prop `addAnimal`
* Has it's own **local component state**:
    ```js
    state = {
      name: '',
      type: ''
    };
    ```
* Renders:
    1. A `<form>` with 
        * a `<label>` and `<input>` for a animal name bound to `name` state
        * a `<label>` and `<input>` for a animal type bound to `type` state
        * a submit button
* On submit, the `addAnimal` prop is called with an object that has two props based on the `name` and `type` state

## Reducers

These need to include tests:

* `animals`
    * holds list of animals
    * defaults to `[]`
    * actions: 
        * `ANIMALS_LOAD` - replace state with payload
        * `ANIMALS_ADD` - add payload to array
        * `ANIMALS_LIKE` - update animal with id that matches payload by incrementing the like count. should be done in immutable style

### Action Creators

These also need to be tested:

* `loadAnimals` already provided
* `addAnimal` creates action to add supplied animal to `animals` list. **You will need to add an `id` property (use `shortid.generate()`) and a `likes` property set to `0`.
* `likeAnimal` creates action with id of animal to like

## Rules

1. Use standard lab process: fork this repo and clone locally.
1. **Make an initial commit when you start your work**
1. You must complete this work on your own within the allotted time
    * You **need to manage your time** to have PR and last commit before deadline (remember, you can open PR and push your commits frequently).
1. You may use normal resources that a software developer uses on the job (docs, google, your prior work)
1. Working webpack react build system is included (**remember to `npm i` after cloning your forked repo!**)
1. Use general best practices and common sense
    * Highly recommended to implement what is needed, no more no less
    * Blind boilerplate or copying in code will not be helpful and will likely create more work
    * **Focus effort on requirements of the lab**
