'use strict';

import { taskPrototype, listOfTasks } from '../list-prototype.js';

import { logger } from '../../lib/logger.js';

export const createNewListHandler = (event) => {
	// Number 13 is the "Enter" key on the keyboard

	if (event.keyCode !== 13) {
		return;
	}

	const newTask = Object.create(taskPrototype);

	newTask.items = [];

	newTask.state = {
		name: event.target.value,

		open: false,
	};

	const renderedNewTask = newTask.render(document.getElementById('listItems'));

	document.getElementById('lists').appendChild(renderedNewTask);

	event.target.value = '';

	logger.push({
		action: 'create new list',

		event,

		newTask,

		renderedNewTask,
	});
};
