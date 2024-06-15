import Button from "./Button/Button"
import { useState } from "react";
import { tabs } from "../data";
// import { Fragment } from "react";

export default function ButtonSection(){
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
        // <Fragment>
        <>
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
        </>
        // </Fragment>
    )
}