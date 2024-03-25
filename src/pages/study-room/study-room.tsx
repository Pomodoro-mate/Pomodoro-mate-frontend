import { Button, Card, CardContent, CardHeader, Chip, Grid } from '@mui/material';
import Layout from './components/layout';
import ParticipantList from './components/participant-list';
import Timer from './components/timer';
import { useEffect, useRef } from 'react';
import { getLocalStorage } from '@/utils/storage';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';
import { useParams } from 'react-router-dom';

const StudyRoom = () => {
  const params = useParams();
  const id = Number(params.id);

  const authToken = getLocalStorage('token');

  const sock = new SockJS('http://localhost:8000/study');

  const client = useRef<CompatClient>(Stomp.over(sock));

  useEffect(() => {
    const copyClient = client.current;

    copyClient.connect({}, () => {
      copyClient.subscribe(
        `/sub/studyrooms/${id}/next-step`,
        (response) => {
          const data = JSON.parse(response.body);
          console.log('data : ', data);
        },
        {
          Authorization: `Bearer ${authToken}`,
          studyRoomId: `${id}`,
        },
      );

      copyClient.subscribe(
        `/sub/studyrooms/${id}/participants`,
        (response) => {
          const data = JSON.parse(response.body);
          console.log('data : ', data);
        },
        {
          Authorization: `Bearer ${authToken}`,
          studyRoomId: `${id}`,
        },
      );
    });

    return () => {
      copyClient.disconnect();
    };
  }, [authToken, id]);

  const send = () => {
    client.current.send(
      `/pub/studyrooms/${id}/next-step`,
      {},
      JSON.stringify({
        step: 'PLANNING',
      }),
    );
  };

  return (
    <Layout>
      <Grid item xs={6}>
        <Timer />
      </Grid>
      <Grid item xs={6}>
        <ParticipantList />
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ minWidth: '50%' }}>
          <CardHeader title="학습 키워드" />
          <CardContent sx={{ height: '130px', textAlign: 'center' }}>
            <input type="text" />
            <Button size="small">등록</Button>
            <Chip label="Chip Outlined" variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card sx={{ minWidth: '50%' }}>
          <CardHeader title="채팅창" />
          <CardContent sx={{ height: '130px', textAlign: 'center' }}></CardContent>
        </Card>
      </Grid>
      <button onClick={send}>next</button>
    </Layout>
  );
};

export default StudyRoom;
