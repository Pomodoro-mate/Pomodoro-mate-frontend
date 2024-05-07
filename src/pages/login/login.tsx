import Input from '@/components/common/input/input';
import { Button, Card, CardContent, CardHeader } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { login } from '@/apis/auth/login';
import { ROUTE_PATH } from '@/constant/routes';

import { useMutation } from '@tanstack/react-query';
import { tokenStorage } from '@/utils/storage';

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

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: ({ accessToken }) => {
      tokenStorage.setItem(accessToken);

      navigate(ROUTE_PATH.STUDY_ROOMS);
    },
  });

  const onSubmit = ({ nickname }: FormValue) => loginMutation.mutate({ nickname });

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
