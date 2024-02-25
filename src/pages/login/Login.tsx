import Input from '@/components/Input';
import { Button, Card, CardContent, CardHeader } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useMutation } from '@tanstack/react-query';
import { setLocalStorge } from '@/utils/util';
import { login } from '@/apis/login/login';

interface FormValue {
  nickname: string;
}

const Login = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    //formState: { errors },
  } = useForm<FormValue>();

  const onSubmit = (data: FormValue) => {
    const { nickname } = data;
    mutation.mutate({ nickname });
  };

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      const { accessToken } = res;
      setLocalStorge({ key: 'token', value: accessToken });
      navigate('/study-rooms');
    },
  });

  return (
    <Container>
      <Card sx={{ minWidth: 480 }}>
        <CardHeader title="로그인" />
        <CardContent>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              textFieldProps={{
                label: '닉네임',
                //  defaultValue: '',
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
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export default Login;
