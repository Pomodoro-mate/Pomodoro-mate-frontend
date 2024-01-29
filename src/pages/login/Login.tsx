import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/Input';
import { Button, Card, CardContent, CardHeader } from '@mui/material';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface FormValue {
  name?: string;
  test?: string;
}
const LoginPage = () => {
  const {
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data: FormValue) => {
    const { name, test } = data;
    console.log(name, test);
    navigate('/study-rooms');
  };

  return (
    <Container>
      <Card sx={{ minWidth: 480 }}>
        <CardHeader title={'로그인'} />
        <CardContent>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              textFieldProps={{
                label: '닉네임',
                defaultValue: '',
              }}
              control={control}
              name="nickname"
            />
            <Button type="submit" variant="outlined">
              Login
            </Button>
          </Form>
        </CardContent>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* 상하좌우 정중앙 정렬하기 */
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export default LoginPage;
