import { useCallback, useRef } from 'react';

interface UseAudioProps {
  initialSound: string;
}

const useAudio = ({ initialSound }: UseAudioProps) => {
  const audio = useRef(new Audio(initialSound));

  const play = useCallback(() => audio.current.play(), []);

  return { play };
};

export default useAudio;
