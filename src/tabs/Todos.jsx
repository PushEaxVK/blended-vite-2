import { useState } from 'react';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  const [todoText, setTodoText] = useState('');

  const todos = [
    { id: '1', text: 'Practice more' },
    { id: '2', text: 'Get all tasks done on time' },
  ];

  const addNewTodo = queryString => {
    console.log(queryString);
    setTodoText(queryString);
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />
      {todos.length > 0 ? (
        <TodoList todos={todos} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

export default Todos;
