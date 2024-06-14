import Header from "./components/Header";
import { todoList } from "./data";
import TodoList from "./components/TodoList";
import Button from "./components/Button/Button";

function App(){
  const btnClick=()=>{
    alert('i\'am handle from App component')
  }

  return(
    <div>
      <Header />
      <main>
        <section>
          <ul>
            <TodoList {...todoList[0]} />
            <TodoList {...todoList[1]} />
            {/* <TodoList title={todoList[0].text} text={todoList[0].title}/> */}
            {/* <TodoList title={todoList[1].text} text={todoList[1].title}/> */}
          </ul>
        </section>
        <section>
          {/* <Button text='click me test'/> */}
          <Button onClick={btnClick}>Нравится</Button>
          {/* <Button>Не нравится</Button> */}
        </section>
      </main>
    </div>
  )

}
export default App;