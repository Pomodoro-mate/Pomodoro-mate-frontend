import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '@/components/Input';

interface FormValue {
  name?: string;
  test?: string;
}
const LoginPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FormValue) => {
    const { name, test } = data;
    console.log(name, test);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        textFieldProps={{
          label: '닉네임',
          defaultValue: '',
        }}
        control={control}
        name="name"
      />
      <Input
        textFieldProps={{
          label: '닉네임',
          defaultValue: '',
        }}
        control={control}
        name="test"
      />
      <input type="submit" />
    </form>
  );
};

export default LoginPage;
