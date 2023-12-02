import { useState } from "react";
import Counter from "./Counter";

function App(){
    const [isshown,setisShown] = useState()
    return (
        <div>
            <button onClick={()=>{
                setisShown(!isshown)
            }}>
                show/hide counter
            </button>
            {
                isshown && <Counter />
            }
        </div>
    )
}

export default App;