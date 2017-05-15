import React from 'react'

export default class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <label>Username</label>
        <input type="text"></input>
        <input type="password"></input>
        <button type="submit"></button>
      </form>
    )
  }
}

// class Button extends React.Component {
//   render() {
//     return React.createElement('button', {}, 'Click me!');
//   }
// }
