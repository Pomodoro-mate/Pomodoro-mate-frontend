import { useCallback, useRef } from 'react';
import sound from '../../../assets/audio/flipdish-ringer.mp3';
const useAudio = () => {
  const audio = useRef(new Audio(sound));
  const play = useCallback(() => audio.current.play(), []);

  return { play };
};

export default useAudio;
