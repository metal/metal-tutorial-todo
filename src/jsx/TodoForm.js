'use strict';

import JSXComponent from 'metal-jsx';

class TodoForm extends JSXComponent {
	render() {
		return (
			<form class="todo-form">
				<label for="title">
					Todo
					<input
						name="title"
					/>
				</label>
				<button type="submit">Add</button>
			</form>
		);
	}
}

export default TodoForm;
