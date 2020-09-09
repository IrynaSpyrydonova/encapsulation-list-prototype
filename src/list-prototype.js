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
    buttonEl.classList.add('list-btn');
    buttonEl.innerHTML = this.state.name;
    buttonEl.addEventListener('click', this.printState.bind(this));
    buttonEl.addEventListener('click', this.renderInput.bind(this));
    return buttonEl;
  },
  renderInput: function(e) {
    const listBox = document.createElement('div');
    listBox.classList.add('inputList');

    const input = document.createElement('input');
    input.type = "text";
    input.placeholder = "New Todo";
    input.id = "list-item";
    input.classList.add('input');
    
    const addBtn = document.createElement('button');
    addBtn.innerHTML = `<i class="fas fa-plus"></i>`;
    addBtn.classList.add('add');

    listBox.appendChild(input);
    listBox.appendChild(addBtn);
  
    document.getElementById('newItem').appendChild(listBox);
  },
};
