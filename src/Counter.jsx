import { useState } from "react";

function Counter({ }){
    const [count,setCount] = useState(0)
    
    console.log(count);
    let c= 0;
    return (
        <div> 
            <h1 style={{textAlign: 'center'}}>Kghgaslefuieshlfhlefu</h1>
            <hr />
            <h2>{count}</h2>
            <button onClick={()=>{
                setCount(count + 1)
            }}>+</button>
            <button onClick={()=>{
                setCount(count - 1)
            }}>-</button>
            <button onClick={()=>{
                setCount(0)
            }}>reset</button>
            <button onClick={()=>{
                console.log(count);
            }}>log</button>
            <button onClick={()=>{
                let newNum = +prompt()
                setCount(newNum)
            }}>special</button>
        </div>
    )
}   

export default Counter