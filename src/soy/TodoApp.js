'use strict';

import templates from './TodoApp.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './TodoForm';
import './TodoItem';

import '../todo-app.scss';

class TodoApp extends Component {
}
Soy.register(TodoApp, templates);

export { TodoApp };
export default TodoApp;
