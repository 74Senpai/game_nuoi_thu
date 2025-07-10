import React, { useRef } from 'react';

export function BackgroundMusic() {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };

  return (
    <div className='speaker-design'>
      <div>
        <audio ref={audioRef} src={process.env.REACT_APP_MUSIC_URL} loop /> 
        <button onClick={handlePlay}>Phát nhạc nền</button>
      </div>
    </div>
  );
}
