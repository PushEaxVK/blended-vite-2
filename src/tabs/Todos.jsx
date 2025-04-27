import { useState } from 'react';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';
import { nanoid } from 'nanoid';

const Todos = () => {
  const [todoText, setTodoText] = useState('');

  const [todos, setTodos] = useState([
    { id: '1', text: 'Practice more' },
    { id: '2', text: 'Get all tasks done on time' },
  ]);

  const addNewTodo = queryString => {
    const newItem = { id: nanoid(), text: queryString };
    console.log(newItem);
    // setTodoText(queryString);
    setTodos(prev => {
      const newItem = { id: nanoid(), text: queryString };
      return [...prev, newItem];
    });
  };

  const deleteTodo = id => {
    setTodos(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />
      {todos.length > 0 ? (
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

export default Todos;
