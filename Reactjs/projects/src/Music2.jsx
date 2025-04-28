import React, { useRef, useState } from 'react';
import audio2 from './assets/Audio2.mp3';
import audio3 from './assets/Audio3.mp3';
import audio from './assets/Audio.mp3';


const Music = () => {
    const songs = [audio, audio2, audio3];
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const audioRef = useRef();

    const handlePlay = () => {
        audioRef.current.play();
    };

    const handlePrevious = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
    };

    const handleNext = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    };

    return (
        <div>
            <audio src={songs[currentSongIndex]} controls ref={audioRef}></audio>
            <br />
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Music;