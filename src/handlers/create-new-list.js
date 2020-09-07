'use strict';

import { listPrototype } from '../list-prototype.js';
import { logger } from '../../lib/logger.js';

export const createNewListHandler = (event) => {

  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode !== 13) {
    return;
  }

  const newList = Object.create(listPrototype);
  newList.state = {
    name: event.target.value
  };

  const renderedNewList = newList.render();


  document.getElementById('lists')
    .appendChild(renderedNewList);

  logger.push({
    action: 'create new list',
    event,
    newList,
    renderedNewList
  });

};
