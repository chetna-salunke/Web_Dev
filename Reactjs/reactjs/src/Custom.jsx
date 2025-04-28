import React,{useState} from 'react'
import Custom2 from './Custom2.jsx'
import { createContext } from 'react'

// The use of 'custom' is also similar to context.
// Meaning, we can directly see the content inside that component.
// But in 'custom', we can also gain logic.
// But in 'context', only one value is converted.


//export const UserCon=createContext()
const Custom = (value=0) => {
        let[count,setCount]=useState(value)
    
        const increment = () =>{
            setCount(count + 1)
        }
        const Decrement = () =>{
            setCount(count - 1)
        }
        return [count,increment,Decrement]
//       return (
//         <div>
//           <h2>Counter</h2>
//           <h1>{count}</h1>
//           {/* <h3>{`${count}`}</h3> */}
//           <button onClick={increment}>Increment</button>
//           <button onClick={decrement}>Decrement</button>
//           <UserCon.Provider value={count}>
//         <Custom2/>
//       </UserCon.Provider>
         
//         </div>
//   )
}

export default Custom;