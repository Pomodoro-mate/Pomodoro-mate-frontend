import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import useLogoutMutate from '@/hooks/useLogoutMutate';

import { removeLocalStorage } from '@/utils/storage';

import { ROUTE_PATH } from '@/constant/routes';

const Header = () => {
  const navigate = useNavigate();
  const logoutMutation = useLogoutMutate();
  const logout = () => {
    removeLocalStorage('token');
    logoutMutation.mutate();
    navigate(ROUTE_PATH.LOGIN);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pomodoro Mate
          </Typography>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <Typography variant="h6" component="div">
              정진범님
            </Typography>
            <Button
              type="button"
              color="inherit"
              onClick={logout}
              sx={{
                flexShrink: 0,
                textTransform: 'none',
              }}
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
