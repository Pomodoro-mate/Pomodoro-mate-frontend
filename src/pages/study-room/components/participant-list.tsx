import React from 'react';
import ParticipantListItem from './participant-list-item';
import { Card, CardContent, CardHeader } from '@mui/material';

const ParticipantList = () => {
  return (
    <Card sx={{ minWidth: '50%' }}>
      <CardHeader title="참여자 목록" />
      <CardContent>
        <ul>
          {[].map(() => (
            <ParticipantListItem />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ParticipantList;
