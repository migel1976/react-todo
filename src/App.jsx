import Header from "./components/Header";
import { todoList } from "./data";

function TodoList(props){
  console.log('props', props)
  return(
    <li>
      <p>{props.title}</p>
      {props.text}
    </li>
  )
}

function App(){
  return(
    <div>
      <Header />
      <main>
        <ul>
          <TodoList {...todoList[0]} />
          <TodoList {...todoList[1]} />
          {/* <TodoList title={todoList[0].text} text={todoList[0].title}/> */}
          {/* <TodoList title={todoList[1].text} text={todoList[1].title}/> */}
        </ul>
      </main>
    </div>
  )

}
export default App;