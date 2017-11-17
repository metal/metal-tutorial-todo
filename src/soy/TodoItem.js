'use strict';

import templates from './TodoItem.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class TodoItem extends Component {
}
Soy.register(TodoItem, templates);

export { TodoItem };
export default TodoItem;
