import { ROUTE_PATH } from '@/constant/routes';
import LoginDialog from '@/pages/login/login-dialog';
import LogoutBtn from './logout-btn';
import { Avatar, AvatarImage } from '@/components/ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface SwitchHeaderBtnProps {
  pathname: string;
}

const SwitchController = ({ pathname }: SwitchHeaderBtnProps) => {
  return ROUTE_PATH.HOME === pathname ? (
    <LoginDialog btnName="로그인" />
  ) : (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer">
            <LogoutBtn />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default SwitchController;
