import { Box, Button, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';

// interface HeaderProps {
//   pathname: string;
// }

const Header = () => {
  // if (pathname.match(ROUTE_PATH.LOGIN)) {
  //   return null;
  // }
  const handleLogout = () => {};
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
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
            <Typography>정진범님</Typography>
            <Button type="button" color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
