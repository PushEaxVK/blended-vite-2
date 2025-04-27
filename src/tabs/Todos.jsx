import { useState } from 'react';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';

const Todos = () => {
  const [todoText, setTodoText] = useState('');

  const addNewTodo = queryString => {
    console.log(queryString);
    setTodoText(queryString);
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />
      <Text textAlign="center">There are no any todos ...</Text>
      <Text textAlign="center">{todoText}</Text>
    </>
  );
};

export default Todos;
