import { AppBar, Container, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  return (
    <AppBar color="default" position="sticky">
      <Container
        maxWidth="xl"
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <h3>{name}</h3>
        <div>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </Container>
    </AppBar>
  );
};

export default Header;
