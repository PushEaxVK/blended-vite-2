import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map(item => (
        <GridItem key={item.id}>
          <TodoListItem item={item} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
