import './Button.css'
export default function Button({children, onClick}){
    // const handleBtn=()=>{
    //     console.log('click me')
    // }
    // function handleMouseEnter(){
    //     console.log('mouse enter')
    // }
    return(
        <button className='button' onClick={onClick}>{children}</button>
        // <button className='button'
        //  onClick={handleBtn}
        //  onMouseEnter={handleMouseEnter}
        //  onDoubleClick={()=>console.log('double click')}
        // >{children}</button>
    )
}