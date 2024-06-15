import Header from "./components/Header";
import { todoList, tabs } from "./data";
import TodoList from "./components/TodoList";
import Button from "./components/Button/Button";
import { useState } from "react";

function App(){
  const [contentType, setContentType]=useState(null);

  console.log('app render')

  const btnClick=(arg)=>{
    typeof(arg)==='string'?setContentType(arg):setContentType('пустая кнопка')
    console.log(contentType)
  }

  let tabContent=null
  if(contentType){
    tabContent=<h3 style={{color:'red', fontStyle:'italic'}}>{tabs[contentType]}</h3>
  }else{
    tabContent=<h1>нажми кнопку</h1>
  }

  return(
    <div>
      <Header />
      <main>
        <section>
          <ul>
            {todoList.map(item=><TodoList {...item} key={item.text}/>)}
            {/* <TodoList {...todoList[0]} /> */}
            {/* <TodoList {...todoList[1]} /> */}
            {/* <TodoList title={todoList[0].text} text={todoList[0].title}/> */}
            {/* <TodoList title={todoList[1].text} text={todoList[1].title}/> */}
          </ul>
        </section>
        <section>
          {/* <Button text='click me test'/> */}
          {/* вызывается замыкание из обработчика  */}
          <Button 
          isActive={contentType==='title'}
          onClick={()=>btnClick('title')}>Title</Button>

          <Button 
          isActive={contentType==='text'}
          onClick={()=>btnClick('text')}>Text</Button>

          {/* <Button onClick={btnClick}>Равнодушен</Button> */}
          {/* <Button>Не нравится</Button> */}
        </section>
        <section>
          {/* {contentType ? <h1>{tabs[contentType]}</h1> : <h3>нажми на любую кнопку</h3>} */}

          {!contentType && <p>Нажми на кнопку</p>}
          {contentType && <p>{tabs[contentType]}</p>}

          {/* <h1>{tabContent}</h1> */}

          {/* {tabContent} */}
        </section>
      </main>
    </div>
  )
}
export default App;