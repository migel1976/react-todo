import logo from "../assets/react.svg"

function Header(){
    const curTime=new Date();
    console.log(curTime)
    return(
        <header>
            {/* Menu */}
            <img src={logo} alt='React logo'></img>
            <p>
                {curTime.toLocaleTimeString()}
            </p>
            
        </header>
    )
}
export default Header;