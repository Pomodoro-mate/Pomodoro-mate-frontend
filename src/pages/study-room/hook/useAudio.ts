import { useRef } from 'react';
import sound from '../../../assets/audio/flipdish-ringer.mp3';
const useAudio = () => {
  const audio = useRef(new Audio(sound));
  const playSound = () => audio.current.play();

  return { playSound };
};

export default useAudio;
