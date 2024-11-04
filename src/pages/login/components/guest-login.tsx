import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Input } from '@/components/ui';

import clsx from 'clsx';
import { ROUTE_PATH } from '@/constant/routes';
import useGuestLoginMutation from '../hooks/useGuestLoginMutation';
import { tokenStorage } from '@/utils/storage';

const GuestLogin = () => {
  const navigate = useNavigate();
  const goToStudyRoom = () => navigate(ROUTE_PATH.STUDY_ROOMS);

  const loginAction = (accessToken: string) => {
    tokenStorage.setItem(accessToken);
    goToStudyRoom();
  };

  const { mutate: guestLoginMutate, isError } = useGuestLoginMutation({ loginAction });

  const guestLogin = () => guestLoginMutate({ nickname });

  const [nickname, setNickname] = useState('');
  const handleNickname = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickname(value);
  };

  return (
    <div className="flex flex-col gap-1">
      <Input
        name="nickname"
        className={clsx(
          'col-span-3 focus-visible:ring-2 border-achromatic-80 placeholder:text-muted-foreground',
          isError && 'focus-visible:ring-red-500 border-red-500',
        )}
        placeholder="사용할 닉네임 입력"
        onChange={handleNickname}
      />
      {isError && <p className="text-red-600">로그인에 실패하였습니다.</p>}
      <span className="mb-3 hint">특수문자 제외 2자 이상 16자 이하</span>
      <Button type="button" onClick={guestLogin}>
        로그인
      </Button>
    </div>
  );
};

export default GuestLogin;
