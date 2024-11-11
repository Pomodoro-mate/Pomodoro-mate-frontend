import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
} from '@/components/ui';

import loginLogo from '@/assets/loginLogo.png';
import { ROUTE_PATH } from '@/constant/routes';

import { ChangeEvent, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import useLoginMutation from './hooks/useLoginMutation';
interface LoginDialogProps {
  btnName: string;
}

const LoginDialog = ({ btnName }: LoginDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLoginDialog = (status: boolean) => setIsOpen(status);
  const navigate = useNavigate();
  const handlePage = () => navigate(ROUTE_PATH.STUDY_ROOMS);
  const { mutate: loginMutate, error: loginError } = useLoginMutation({
    handlePage,
  });

  const [nickname, setNickname] = useState('');
  const [isNicknameError, setIsNicknameError] = useState(false);
  const onSubmit = () => {
    loginMutate({ nickname });
  };

  const handleNickname = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickname(value);
  };

  useEffect(() => {
    if (loginError && loginError.code !== '') {
      setIsNicknameError(true);
    }
  }, [loginError]);

  useEffect(() => {
    if (!isOpen) {
      setIsNicknameError(false);
    }
  }, [isOpen]);

  return (
    <Dialog modal={true} open={isOpen} onOpenChange={handleLoginDialog}>
      <DialogTrigger asChild>
        <Button>{btnName}</Button>
      </DialogTrigger>
      <DialogContent className="xl:max-w-[600px] xl:min-h-[400px]">
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-12 mx-28">
          <div className="flex flex-row justify-center">
            <img src={loginLogo} width={319} draggable="false" />
          </div>
          <div className="flex flex-col gap-1">
            <Input
              name="name"
              placeholder="사용할 닉네임 입력"
              onChange={handleNickname}
              className="col-span-3"
            />
            <span className="mb-3 hint" style={{ color: isNicknameError ? '#F5292C' : '' }}>
              {isNicknameError ? '닉네임을 입력해주세요' : '특수문자 제외 2자 이상 16자 이하'}
            </span>
            <Button type="submit" onClick={onSubmit}>
              로그인
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
