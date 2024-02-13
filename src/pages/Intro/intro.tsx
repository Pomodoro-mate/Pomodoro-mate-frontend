import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: ' 100vh',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '3rem' }}>
        <span>Pomodoro Mate</span>
      </div>
      <Link to="/login">
        <Button size="large" variant="outlined" style={{ width: '200px', height: '50px' }}>
          게스트로 진행하기
        </Button>
      </Link>
    </div>
  );
};

export default Intro;
