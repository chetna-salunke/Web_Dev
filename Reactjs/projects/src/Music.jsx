import React, {useRef}  from 'react'
import audio from './assets/Audio.mp3'
import audio2 from './assets/Audio2.mp3'

const Music = () => {
    let audioRef =useRef()

    let handlePlay=()=>{
        audioRef.current.play()
    }
    let handlePause=()=>{
        audioRef.current.pause()
    }
    let handlechange=()=>{
        audioRef.current.src=audio2
        audioRef.current.play()
    }
  return (
    <div>
      <audio src={audio} controls ref={audioRef}></audio><br/><br/>
      <button onClick={handlePlay}>Play</button>
      <button onClick= {handlePause}>Pause</button>
      <button onClick={handlechange}>Change</button>
    </div>
  )
}

export default Music
