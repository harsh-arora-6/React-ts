import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos:React.FC = () => {
    const todoCtx = useContext(TodosContext);

    return <ul className={classes.todos}>
        {/* binding the parameter of onDelete so that it is automatically called with that parameter in IodoIem */}
        {todoCtx.items.map(item => <TodoItem key={item.id} text={item.text} onDelete = {todoCtx.removeTodo.bind(null,item.id)}/>)}
    </ul>
}
export default Todos;