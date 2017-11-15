'use strict';

import templates from './TodoItem.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class TodoItem extends Component {
	handleClick(event) {
		this.emit('todoClick', {
			index: this.index
		});
	}
}
Soy.register(TodoItem, templates);

TodoItem.STATE = {
	index: {
		value: null
	},

	todo: {
		value: null
	}
};

export { TodoItem };
export default TodoItem;
