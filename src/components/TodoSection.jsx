import { todoList } from "../data"
import TodoList from "./TodoList"
export default function TodoSection(){
    return(
        <section>
            <ul>
            {todoList.map(item=><TodoList {...item} key={item.text}/>)}
            {/* <TodoList {...todoList[0]} /> */}
            {/* <TodoList {...todoList[1]} /> */}
            {/* <TodoList title={todoList[0].text} text={todoList[0].title}/> */}
            {/* <TodoList title={todoList[1].text} text={todoList[1].title}/> */}
            </ul>
        </section>
    )
}