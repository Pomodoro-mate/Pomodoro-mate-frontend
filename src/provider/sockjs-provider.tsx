import { PropsWithChildren, createContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { getLocalStorage } from '@/utils/storage';
import { ParticipantSummary, Step } from '@/types/study-room.types';

interface SockJSContextType {
  curParticipants: ParticipantSummary[];
  curStep: Step;
  curUpdateAt: string;
  goToNextStep: (step: Step) => void;
}

export const SockJSContext = createContext<SockJSContextType | null>(null);

const SockJSProvider = ({ children }: PropsWithChildren) => {
  const [curParticipants, setCurParticipants] = useState<ParticipantSummary[]>([]);
  const [curStep, setCurStep] = useState<Step>('PLANNING');
  const [curUpdateAt, setCurUpdateAt] = useState('');

  const { id } = useParams();

  const sock = new SockJS(`${import.meta.env.VITE_SOCKET_BASE_URL}/study`);

  const client = useRef<CompatClient>(Stomp.over(sock));

  const authToken = getLocalStorage('token');

  useEffect(() => {
    const copyClient = client.current;

    copyClient.connect({}, () => {
      copyClient.subscribe(
        `/sub/studyrooms/${id}/next-step`,
        (response) => {
          const { step, updateAt } = JSON.parse(response.body);

          setCurStep(step);
          setCurUpdateAt(updateAt);
        },
        {
          Authorization: `Bearer ${authToken}`,
          StudyRoomId: String(id),
        },
      );

      copyClient.subscribe(
        `/sub/studyrooms/${id}/participants`,
        (response) => {
          const { participantSummaries } = JSON.parse(response.body);

          setCurParticipants(participantSummaries);
        },
        {
          Authorization: `Bearer ${authToken}`,
          StudyRoomId: String(id),
        },
      );
    });

    // TODO : 스터디룸 나가기 응답 받은 후 소켓 연결 해제
    return () => {
      copyClient.disconnect();
    };
  }, [authToken, id]);

  const goToNextStep = (step: Step) => {
    client.current.send(
      `/pub/studyrooms/${id}/next-step`,
      {},
      JSON.stringify({
        step,
      }),
    );
  };

  return (
    <SockJSContext.Provider value={{ curParticipants, curStep, curUpdateAt, goToNextStep }}>
      {children}
    </SockJSContext.Provider>
  );
};

export default SockJSProvider;
