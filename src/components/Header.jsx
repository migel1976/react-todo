import logo from "../assets/react.svg"
import { useState } from "react";

function Header(){
    const [now, setNow]=useState(new Date())
    // setTimeout(() => {
    setInterval(()=>{
       setNow(new Date()) 
    }, 1000);
    // console.log(curTime)
    return(
        <header>
            {/* Menu */}
            <img src={logo} alt='React logo'></img>
            <p>
                {now.toLocaleTimeString()}
            </p>
            
        </header>
    )
}
export default Header;