import { FormEvent, useContext, useRef } from "react"
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo:React.FC = ()=>{
    const todoCtx = useContext(TodosContext);
    const todoTextRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event:FormEvent)=>{
        event.preventDefault();
        const enteredText = todoTextRef.current!.value;
        if(enteredText.trim().length === 0){
            return;
        }
        todoCtx.addTodo(enteredText);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text:</label>
            <input type="text" id="text" ref={todoTextRef}/>
            <button>Submit</button>
        </form>
    )
}
export default NewTodo;