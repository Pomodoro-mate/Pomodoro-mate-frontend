import { ParticipantSummary, Step, StepInfo } from '@/types/study-room.types';
import { tokenStorage } from '@/utils/storage';

import { CompatClient, Stomp } from '@stomp/stompjs';
import { PropsWithChildren, createContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SockJS from 'sockjs-client';

interface SockJSContextType {
  curParticipants: ParticipantSummary[];
  curStepInfo: StepInfo | null;
  goToNextStep: (step: Step) => void;
}

export const SockJSContext = createContext<SockJSContextType | null>(null);

const SockJSProvider = ({ children }: PropsWithChildren) => {
  const [curParticipants, setCurParticipants] = useState<ParticipantSummary[]>([]);
  const [curStepInfo, setCurStepInfo] = useState<StepInfo | null>(null);

  const { id } = useParams();

  const sock = new SockJS(`${import.meta.env.VITE_SOCKET_BASE_URL}/study`);

  const client = useRef<CompatClient>(Stomp.over(sock));

  const token = tokenStorage.getItem();

  useEffect(() => {
    const copyClient = client.current;

    copyClient.connect({}, () => {
      copyClient.subscribe(
        `/sub/studyrooms/${id}/next-step`,
        (response) => {
          const stepInfo = JSON.parse(response.body);

          setCurStepInfo(stepInfo);
        },
        {
          Authorization: `Bearer ${token}`,
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
          Authorization: `Bearer ${token}`,
          StudyRoomId: String(id),
        },
      );
    });

    // TODO : 스터디룸 나가기 응답 받은 후 소켓 연결 해제
    return () => {
      copyClient.disconnect();
    };
  }, [token, id]);

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
    <SockJSContext.Provider value={{ curParticipants, curStepInfo, goToNextStep }}>
      {children}
    </SockJSContext.Provider>
  );
};

export default SockJSProvider;
