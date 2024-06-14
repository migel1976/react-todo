function TodoList(props){
    return(
        <li>
            <p>{props.title}</p>
            {props.text}
        </li>
    )
}
export default TodoList;