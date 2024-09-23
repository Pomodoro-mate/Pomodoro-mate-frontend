import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';
import GuestLogin from './components/guest-login';

import { useState } from 'react';

import loginLogo from '@/assets/loginLogo.png';
import KakaoLogin from './components/kakao-login';

interface LoginDialogProps {
  btnName: string;
}

const LoginDialog = ({ btnName }: LoginDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLoginDialog = (status: boolean) => setIsOpen(status);

  return (
    <Dialog modal={true} open={isOpen} onOpenChange={handleLoginDialog}>
      <DialogTrigger asChild>
        <Button>{btnName}</Button>
      </DialogTrigger>
      <DialogContent className="xl:max-w-[800px] xl:max-h-[550px]">
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
        </DialogHeader>
        <div className="m-auto mt-8 mb-8">
          <img src={loginLogo} width={319} height={20} />
        </div>
        <div className="flex justify-evenly mb-10">
          <div className="w-1/3">
            <h4 className="mb-8">간편 로그인</h4>
            <KakaoLogin />
          </div>
          <div className="border-r" />
          <div className="w-1/3">
            <h4 className="mb-8">게스트 로그인</h4>
            <GuestLogin />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
