import React from 'react'
// import ClassComp from './ClassComp.jsx'
// import FunCom1 from './FunCom1.jsx'
import PropCard from './PropCard.jsx'
import Parent from './Parent.jsx'
import State from './States.jsx'
import StateHandle from './StateHandle.jsx'
import ConditionRendering from './ConditionRendering.jsx'
import ConRen2 from './ConRen2.jsx'
import UseRef from './UseRef.jsx'
import Uncontrolled from './Uncontrolled.jsx'
import Controlled from './Controlled.jsx'
import Controlled2 from './Controlled2.jsx'
import Axios from './Axios.jsx'
import Effect from './Effect.jsx'
import Effect1 from './Effect1.jsx'
import Effect2 from './Effect2.jsx'
import Effect3 from './Effect3.jsx'
import Effect4 from './Effect4.jsx'
import SepUser from './SepUser.jsx'
import RouterNavbar from './RouterNavbar.jsx'
import Router from './Router.jsx'
import './App.css'
import Comp1 from './Component/Comp1.jsx'
import Custom2 from './Custom2.jsx'
import Custom3 from './Custom3.jsx'
import UseMemo from './UseMemo.jsx'
import Hoc from './Hoc.jsx'
import HocUser from './HocUser.jsx'
import HocUserr from './HocUserr.jsx'

const App = () => {
  function msgforking(){
    return "he is king of cricket"
  }
  let Loader= Hoc(HocUser)
  let Loader2= Hoc(HocUserr)
  return (
    <>
      
      {/* <h1>Im app file</h1>
      <h1>5+2</h1> */}
      {/* js.regular expression{} */}
      {/* <h3>{28*43/4*3456}</h3> */}

      {/* <ClassComp/>
      <FunCom1/> */}

      {/* callimg the property as an attribute and passing the data  */}
      <PropCard name="virat kohli" age={36} ismarried={true? "married": "not married"} hobbies={["swimming", "reading", "riding"]} address={{city:"Delhi", country:"India"}} msg={msgforking()}/>
      <Parent/>

      {/* <State/>
      <StateHandle/> */}

      <ConditionRendering/>
      <ConRen2/>

      {/* <UseRef/> */}
      {/* <Uncontrolled/> */}
      {/* <Controlled/> */}
      {/* <Controlled2/> */}

      {/* <Effect/>
      <Effect1/>
      <Effect4/>
      <Effect2/>
      <Axios/> */}
      {/* <SepUser/> */}
      {/* <Router/> */}
      {/* <Comp1/> */}

      <Custom2/>
      <Custom3/>

      {/* <UseMemo/> */}

      <Loader/>
      <Loader2/>
    </>
  )
}

export default App
