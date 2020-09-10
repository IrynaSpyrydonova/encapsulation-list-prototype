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

export const listOfTasks = [];

export const taskPrototype = {
    printState: function() {
        console.log(this.state.name);
    },
    items: [],

    /*  This method adds a task to Task List */
    addToTaskList: function() {
        return listOfTasks.push(this);
    },
    /* End a of a method */

    /* This is a getter for items[] property */
    getItemsArray: function() {
        return this.items;
    },
    /* End of a method */

    /* Clears node which contains items*/
    clearItemList: function(list, form) {

        list.innerHTML = '';

    },

    clearItemForm: function(form) {
        if (form.length !== 0) {
            form.forEach(item => item.remove());
        }
    },

    render: function(list, form) {
        const buttonEl = document.createElement('button');

        /* Sets data attribute as an index of this particular task in the Task List */
        buttonEl.setAttribute('data-number', this.addToTaskList() - 1);

        buttonEl.classList.add('list-btn');
        buttonEl.innerHTML = this.state.name;
        //  buttonEl.addEventListener('click', this.printState.bind(this));
        buttonEl.addEventListener('click', this.renderInput.bind(this, list));
        return buttonEl;
    },
    renderInput: function(list) {

        if (this.state.open === true) {
            //return
        } else {
            this.state.open = true;
        }

        // Before adding a new form for a task, let us remove the existing form to avoid duplication of them 
        this.clearItemForm(document.querySelectorAll('.taskForm'));

        // Also we are clering the list of items for the previous task
        this.clearItemList(list);

        // If a task contains no items
        if (this.items.length === 0) {

            const form = document.createElement('form');
            form.setAttribute('class', 'taskForm');
            form.addEventListener('submit', this.addTodo.bind(this));

            const input = document.createElement('input');
            input.type = "text";
            input.placeholder = "New Todo";
            input.id = "list-item";
            input.classList.add('input');

            form.appendChild(input);

            const addBtn = document.createElement('button');
            addBtn.innerHTML = `<i class="fas fa-plus"></i>`;
            addBtn.classList.add('add');


            form.appendChild(addBtn);

            document.querySelector('.inputList').appendChild(form);
            document.querySelector('.inputList').style.display = "flex";

        } else {
            /* If a task already has some items 
             we recreate a list of tasks taking items name from the items[] */
            this.renderItems(this.items, list);

        }

    },

    addTodo: function(e) {
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

    renderItems: function(items, itemsList) {
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