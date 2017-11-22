'use strict';

import JSXComponent from 'metal-jsx';

class TodoItem extends JSXComponent {
	render() {
		return (
			<li
				class="todo-item"
			>
				[TODO]
			</li>
		);
	}
}

export {TodoItem}
export default TodoItem;
