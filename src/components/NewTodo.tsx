import { FormEvent, useRef } from "react"

const NewTodo:React.FC<{onAdd: (text:string)=>void}> = (props)=>{
    const todoTextRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event:FormEvent)=>{
        event.preventDefault();
        const enteredText = todoTextRef.current!.value;
        if(enteredText.trim().length === 0){
            return;
        }
        props.onAdd(enteredText);
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text:</label>
            <input type="text" id="text" ref={todoTextRef}/>
            <button>Submit</button>
        </form>
    )
}
export default NewTodo;