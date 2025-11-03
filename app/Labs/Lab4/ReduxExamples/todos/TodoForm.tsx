import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { RootState } from "../../store";


export default function TodoForm(
) {
    const { todo } = useSelector((state: RootState) => state.todosReducer);
    const dispatch = useDispatch();
  return (
    <ListGroupItem className="d-flex">
        <Button onClick={() => dispatch(addTodo(todo))} className="order-3 btn-success"
            id="wd-add-todo-click"> Add </Button>
        <Button onClick={() => dispatch(updateTodo(todo))} className="order-2 me-2 btn-warning"
            id="wd-update-todo-click"> Update </Button>
        <FormControl value={todo.title} className="order-1 me-5"
            onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
    </ListGroupItem>
  )
}
