'use strict';

import JSXComponent from 'metal-jsx';

class TodoItem extends JSXComponent {
	render() {
		let elementClasses = `todo-item${this.props.todo.done ? ' todo-item-done' : ''}`;

		return (
			<li
				class={elementClasses}
				data-onclick={this.handleClick.bind(this)}
			>
				{this.props.todo.title}
			</li>
		);
	}

	handleClick(event) {
		this.emit('todoClick', {
			index: this.props.index
		});
	}
}

TodoItem.PROPS = {
	index: {
		value: null
	},

	todo: {
		value: null
	}
};

export {TodoItem}
export default TodoItem;
