import { useCallback, useRef } from 'react';

const useAudio = () => {
  const audio = useRef(new Audio());

  const play = useCallback(() => audio.current.play(), []);

  const setSound = (sound: string) => (audio.current.src = sound);

  return { play, setSound };
};

export default useAudio;
