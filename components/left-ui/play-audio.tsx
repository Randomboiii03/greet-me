import React, { useState, useRef } from 'react';


interface PlayAudioComponentProps {
  audio: string;
}

const PlayAudioComponent: React.FC<PlayAudioComponentProps> = ({ audio }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handlePlayPause = () => {
        if (audioRef.current) {
          if (isPlaying) {
            audioRef.current.pause();
          } else {
            audioRef.current.play();
          }
          setIsPlaying(!isPlaying);
        }
      };


  return (
    <>
        <button
            onClick={ handlePlayPause }
            className="absolute bg-center bg-contain bg-no-repeat 
            top-[69%] left-[27%] w-[45%] h-[33%] active:top-[69.5%] active:left-[27%] active:w-[45%] active:h-[32%] 
            md:top-[34%] md:left-[27%] md:w-[45%] md:h-[33%] md:active:top-[34.5%] md:active:left-[27%] md:active:w-[45%] md:active:h-[32%] 
            xl:top-[42%] xl:left-[23%] xl:w-[35%] xl:h-[17%] xl:active:top-[42.5%] xl:active:left-[23%] xl:active:w-[34%] xl:active:h-[16%]"
            style={{ backgroundImage: "url('/images/WAV Button.png')" }}
            >
        </button>

      <audio ref={audioRef} src={ audio } />
    </>
  );
};

export default PlayAudioComponent;