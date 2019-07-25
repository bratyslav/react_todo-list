import React from 'react';

class NewTodo extends React.Component {
  state = {
    optionList: [],
    newTask: '',
    newTaskAuthor: '',
    selectValidationError: false,
    inputValidationError: false
  };

  constructor(props) {
    super(props);
    const { todoList } = this.props;

    const usersSet = new Set(todoList.map(todo => todo.user));
    const optionList = [];

    usersSet.forEach(user => {optionList.push(<option>{user}</option>)});

    this.state = {
      optionList: optionList
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { newTask, newTaskAuthor } = this.state;
    const { addNewTask } = this.props;

    // валидация: проверка на наличие введенных данных
    if (!newTask || !newTaskAuthor) {
      this.setState({
        inputValidationError: !newTask,
        selectValidationError: !newTaskAuthor
      });
    } else {
      addNewTask(newTask, newTaskAuthor);
      this.setState({ newTask: '' });
    };
  };

  handleInputEnter = (event) => {
    const { value } = event.target;

    if (value.length <= 100) { // ограничение количества символов
      this.setState({
        newTask: value,
        inputValidationError: false
      });
    };
  };

  handleSelectChoice = (event) => {
    this.setState({
      newTaskAuthor: event.target.value,
      selectValidationError: false
    });
  };

  render() {
    const {
      optionList,
      newTask,
      selectValidationError,
      inputValidationError
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleInputEnter}
          placeholder="enter task"
          size="18"
          value={newTask}
        ></input>
        <span
          className={
            inputValidationError
              ? 'validationErrorVisible'
              : 'validationErrorNotVisible'
          }
        >
          Please enter the task
        </span>
        <br />
  
        <select onChange={this.handleSelectChoice} >
          <option hidden>Choose a user</option>
          {
            optionList
          }
        </select>
        <span
          className={
            selectValidationError
              ? 'validationErrorVisible'
              : 'validationErrorNotVisible'
          }
        >
          Please choose a user
        </span>
        <br />
  
        <input type="submit" value="Submit"></input>
      </form>
    );
  };
};

export default NewTodo;