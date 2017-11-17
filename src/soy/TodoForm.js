'use strict';

import templates from './TodoForm.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class TodoForm extends Component {
}
Soy.register(TodoForm, templates);

export { TodoForm };
export default TodoForm;
