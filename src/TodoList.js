import React from 'react';
import TodoItem from './TodoItem';
import NewTodo from './NewTodo';
import { todos } from './todos';
import { users } from './users';

class TodoList extends React.Component {
  state = {
    todoList: []
  };

  constructor(props) {
    super(props);

    this.state = {
      todoList: todos.map(todo => {
        const { title, completed, id } = todo;
        const user = users.find(user => user.id === todo.userId);
        const todoId = todos.length + 1 - id;
    
        return {
          title: title,
          completed: completed,
          user: user.name,
          userId: user.id,
          id: todoId
        };
      })
    };
  };

  addNewTask = (newTask, newTaskAutor) => {
    this.setState(prevState => ({
      todoList: [
        {
          title: newTask,
          completed: false,
          user: newTaskAutor,
          userId: users.find(user => user.name === newTaskAutor).id,
          id: prevState.todoList.length + 1
        },
        ...prevState.todoList
      ]
    }));
  };

  render() {
    const { todoList } = this.state;

    return (
      <div>
        <NewTodo todoList={todoList} addNewTask={this.addNewTask} />
        <ul>
          {
            todoList.map(todo => <TodoItem todo={todo} />)
          }
        </ul>
      </div>
    );
  };
};

export default TodoList;