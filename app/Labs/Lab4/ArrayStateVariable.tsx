import { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export default function ArrayStateVariable() {
    const { todos } = useSelector((state: RootState) => state.todosReducer);
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
        setArray(array.filter((item, i) => i !== index));
    }
  return (
    <div id="wd-array-state-variables">
        <h2>Array State Variable</h2>
        <button onClick={addElement} className="btn btn-success mb-2">Add Element</button>
        <fieldset className="border w-25">
            <ListGroup>
                {array.map((item, index) => (
                    <ListGroup.Item key={index}> <b>{item}</b>
                        <button className="float-end btn btn-danger" onClick={() => deleteElement(index)}>
                            Delete</button>
                    </ListGroup.Item>))}
            </ListGroup>
        </fieldset>
        <ListGroup>
            {todos.map((todo) => (
                <ListGroupItem key={todo.id}>
                    {todo.title}
                </ListGroupItem>
            ))}
        </ListGroup>
        <hr/>
    </div>
  )
}
