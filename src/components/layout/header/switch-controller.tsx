import { ROUTE_PATH } from '@/constant/routes';
import LoginDialog from '@/pages/login/login-dialog';
import LogoutBtn from './logout-btn';
import { Avatar, AvatarImage } from '@/components/ui';

interface SwitchHeaderBtnProps {
  pathname: string;
}

const SwitchController = ({ pathname }: SwitchHeaderBtnProps) => {
  return ROUTE_PATH.HOME === pathname ? (
    <LoginDialog btnName="로그인" />
  ) : (
    <div className="flex gap-3">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      </Avatar>
      <LogoutBtn />
    </div>
  );
};

export default SwitchController;
