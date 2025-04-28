import React, {useRef} from 'react'
import style from './UseRef.module.css'

const UseRef = () => {
    // initialized the useref() hook by passed props
    let heading=useRef()

    let handlecolor=()=>{
        heading.current.style.color="blue"
        heading.current.style.backgroundColor="pink"
    }

    let element=useRef()
    let moveElement=()=>{
        element.current.style.animation="2s move ease";
        console.log(element);
        
    }

  return (
    <div>
      {/* pass ref as an prop with value */}
      <h1 ref={heading} onClick={handlecolor}>Happy holi</h1>

      <section className={style.parent}>
      <section className={style.child} ref={element} onClick={moveElement}></section>
      </section>
    </div>
  )
}

export default UseRef
