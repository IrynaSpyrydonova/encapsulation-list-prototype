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
	printState: function () {
		console.log(this.state.name);
	},
	items: [],

	/*  This method adds a task to Task List */
	addToTaskList: function () {
		return listOfTasks.push(this);
	},
	/* End a of a method */

	/* This is a getter for items[] property */
	getItemsArray: function () {
		return this.items;
	},
	/* End of a method */

	/* Clears node which contains items*/
	clearItemList: function (list) {
		list.innerHTML = '';
	},

	clearItemForm: function (form) {
		if (form.length !== 0) {
			form.forEach((item) => item.remove());
		}
	},

	render: function (list) {
		const buttonEl = document.createElement('button');

		/* Sets data attribute as an index of this particular task in the Task List */
		buttonEl.setAttribute('data-number', this.addToTaskList() - 1);

		buttonEl.classList.add('list-btn');
		buttonEl.innerHTML = this.state.name;
		//  buttonEl.addEventListener('click', this.printState.bind(this));
		buttonEl.addEventListener('click', this.renderInput.bind(this, list));
		return buttonEl;
	},
	renderInput: function (list) {
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

		const form = document.createElement('form');
		form.setAttribute('class', 'taskForm');
		form.addEventListener('submit', this.addTodo.bind(this));

		const input = document.createElement('input');
		input.type = 'text';
		input.placeholder = 'New Todo';
		input.id = 'list-item';
		input.classList.add('input');

		form.appendChild(input);

		const addBtn = document.createElement('button');
		addBtn.innerHTML = `<i class="fas fa-plus"></i>`;
		addBtn.classList.add('add');

		form.appendChild(addBtn);

		document.querySelector('.inputList').appendChild(form);
		document.querySelector('.inputList').style.display = 'flex';

		/* If a task already has some items 
             we recreate a list of tasks taking items name from the items[] */
		if (this.items.length !== 0) {
			this.renderItems(this.items, list);
		}
	},

	addTodo: function (e) {
		e.preventDefault();
		const text = e.target.children[0].value;
		const item = {
			text,
			done: false,
		};

		console.log(item);
		this.items.push(item);
		console.log(this.items);

		const list = document.getElementById('listItems');
		this.clearItemList(list);
		this.renderItems(this.items, list);
		e.target.children[0].value = '';
	},

	renderItems: function (items, itemsList) {
		for (let element of items) {
			const liEl = document.createElement('li');
			const inputEl = document.createElement('input');
			inputEl.addEventListener('click', this.isChecked.bind(this));
			inputEl.dataset.index = items.indexOf(element);
			inputEl.type = 'checkbox';

			if (element.done) {
				inputEl.checked = true;
			}

			const secondInput = document.createElement('input');
			secondInput.type = 'text';
			secondInput.value = element.text;
			const buttonEl = document.createElement('button');
			buttonEl.classList.add('.minus');
			const iEl = document.createElement('i');
			iEl.classList.add('fa');
			iEl.classList.add('fa-minus');
			buttonEl.appendChild(iEl);

			liEl.appendChild(inputEl);
			liEl.appendChild(secondInput);
			liEl.appendChild(buttonEl);
			itemsList.appendChild(liEl);
		}
	},

	isChecked: function (e) {
		const target = e.target;
		this.items[target.dataset.index].done = !this.items[target.dataset.index].done;
	},
};
