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
  items: [],
  render: function () {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('list-btn');
    buttonEl.innerHTML = this.state.name;
    buttonEl.addEventListener('click', this.printState.bind(this));
    buttonEl.addEventListener('click', this.renderInput.bind(this));
    return buttonEl;
  },
  renderInput: function() {
    if(this.state.open === true){
      return
    } else {
      this.state.open = true;
    }

    const form = document.createElement('form');
    form.addEventListener('submit', this.addTodo.bind(this));

    const input = document.createElement('input');
    input.type = "text";
    input.placeholder = "New Todo";
    input.id = "list-item";
    input.classList.add('input');
    
    
    const addBtn = document.createElement('button');
    addBtn.innerHTML = `<i class="fas fa-plus"></i>`;
    addBtn.classList.add('add');

    form.appendChild(input);
    form.appendChild(addBtn);
  
    document.querySelector('.inputList').appendChild(form);
    document.querySelector('.inputList').style.display= "flex";
  },

  addTodo: function (e){
    e.preventDefault();
    const text = e.target.children[0].value;
    const item = {
      text,
      done: false
      };
  
    console.log(item);
    this.items.push(item);
    console.log(this.items);

    const list = document.getElementById('listItems')
    this.renderItems(this.items, list)
    e.target.children[0].value = '';
  },
  renderItems: function(items, itemsList ){
    itemsList.innerHTML = items.map((item, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''}/>
          <input type="text" value="${item.text}">
          <button class='minus'><i class="fas fa-minus"></i></button>
        </li>
      `;
    }).join('');

  }
};
