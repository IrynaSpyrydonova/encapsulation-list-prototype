'use strict';

/* List Prototype

  This object will contain all the methods for your many lists
  in your app you will use Object.create(listPrototype) to create many lists
  it will include all the functions you need for a list:
    logic
    views
    handlers

  You will need to use binding (or arrow functions) to connect handlers to views

*/

export const listPrototype = {
  printState: function () {
    console.log(this.state.name);
  },
  render: function () {
    const buttonEl = document.createElement('button');
    buttonEl.innerHTML = this.state.name;
    buttonEl.addEventListener('click', this.printState.bind(this));
    return buttonEl;
  }
};
