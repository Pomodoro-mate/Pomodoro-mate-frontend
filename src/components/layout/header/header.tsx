import { useLocation } from 'react-router-dom';

import SwitchController from './switch-controller';

import { ROUTE_PATH } from '@/constant/routes';
import logo from '../../../assets/logo.png';
import clsx from 'clsx';
import { Exit, Info, Setting } from '@/components/icons';
import useExitRoomModalContext from '@/pages/study-room/hooks/useExitRoomModalContext';

const Header = () => {
  const { pathname, state } = useLocation();
  console.log({ title: state });
  const { open } = useExitRoomModalContext();
  const IN_STUDY_ROOM_REGEX = new RegExp(`^${ROUTE_PATH.STUDY_ROOMS}/\\d+$`);
  const isStudyRoomPage = IN_STUDY_ROOM_REGEX.test(pathname);

  return (
    <div className="border-b">
      <header
        className={clsx(
          'h-[4.375rem] w-full flex justify-between shrink-0 items-center my-0 px-40',
          isStudyRoomPage && 'bg-gray-200',
        )}
      >
        {!isStudyRoomPage ? (
          <>
            <img src={logo} />
            <SwitchController pathname={pathname} />
          </>
        ) : (
          <>
            <div>{state?.title ?? ''}</div>
            <div className="flex gap-5">
              <Setting width={24} height={24} fill="#333333" />
              <Info width={24} height={24} fill="#333333" />
              <div onClick={open} className="cursor-pointer">
                <Exit width={24} height={24} fill="#333333" />
              </div>
            </div>
          </>
        )}
      </header>
    </div>
  );
};

export default Header;
