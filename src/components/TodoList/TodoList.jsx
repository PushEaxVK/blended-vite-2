import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <Grid>
      {todos.map((item, index) => (
        <GridItem key={item.id}>
          <TodoListItem item={item} deleteTodo={deleteTodo} index={index} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
