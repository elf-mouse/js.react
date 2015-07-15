import React from 'react';
import Dog from './components/Dog';

/**
 * @summary Dog -> Effect[render]
 */
const putDog = dog => fetch('/api/v1/dog', {
  method: 'PUT',
  body: JSON.stringify(dog),
})
  .then(response => response.json())
  .then(renderApp)
  .catch()

/**
 * @summary Dog -> Effect[render]
 */
const renderApp = dog => React.render(
  <Dog dog={dog} handleEffects={putDog}/>,
  document.getElementById('app')
)

fetch('/api/v1/dog')
  .then(response => response.json())
  .then(renderApp)
  .catch()
