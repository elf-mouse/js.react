import React, {
  Component
} from 'react'
import {
  extend,
  partial,
  compose
} from 'lodash'

// Actions
// =======

/**
 * Given the model `dog` and the desired new state of `isHungry` return a new
 * representation of the dog, where `isHungry` is the desired new state.
 *
 * @summary Dog -> Boolean -> Dog
 */
const feed = (dog, isHungry) => extend({}, dog, {isHungry})

class Dog extends Component {
  render () {
    /**
     * Here's what the view needs
     */
    const {
      props
    } = this
    const {
      dog,
      handleEffects
    } = props

    // View
    // ====
    return (
      <div>
        <h1>{dog.name} | {dog.age}</h1>
        <p>hungry: {dog.isHungry ? 'yes' : 'nah'}</p>
        <button
          onClick={compose(handleEffects, partial(feed, dog, true))}
        >Feed</button>
      </div>
    )
  }
}

Dog.propTypes = {
  dog: React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    age: React.PropTypes.number,
    isHungry: React.PropTypes.bool
  }),
  handleEffects: React.PropTypes.func.isRequired
}

export default Dog;
