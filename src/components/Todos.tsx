import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos:React.FC<{items:Todo[],onDelete:(id:string)=>void}> = (props) => {
    return <ul className={classes.todos}>
        {/* binding the parameter of onDelete so that it is automatically called with that parameter in IodoIem */}
        {props.items.map(item => <TodoItem key={item.id} text={item.text} onDelete = {props.onDelete.bind(null,item.id)}/>)}
    </ul>
}
export default Todos;