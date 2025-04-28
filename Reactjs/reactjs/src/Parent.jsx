import React from 'react'
import PropChildren from './PropChildren.jsx'
import ARB from './assets/Vicky.jpg'

const Parent = () => {
  return (
    <div>  
        <PropChildren>
            <section style={{display:"flex"}}>
                <img src={ARB} alt="" height={200}/>
             <article style={{margin:"15px"}}>
                <h1>Vicky Kaushal</h1>
                <p>
                Vicky Kaushal : born 16 May 1988 is an Indian actor who works in Hindi films. 
                He is the recipient of numerous accolades, including a National Film Award and three Filmfare Awards, and 
                has appeared in Forbes India's Celebrity 100 list of 2019.Vicky Kaushal is an Indian actor who is best remembered 
                for his performance in award-winning movie Masaan in 2015 for which he won the IIFA Award for Best Male Debut.
                </p>
             </article>
            </section>
        </PropChildren>
    </div>
  )
}

export default Parent