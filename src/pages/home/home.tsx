import { Box, Container, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/constant/routes';

const Home = () => {
  const navigate = useNavigate();
  const onClickStart = () => {
    navigate(ROUTE_PATH.LOGIN);
  };
  return (
    <Box sx={{ overflow: 'hidden', height: 700 }}>
      <Container
        sx={{
          pt: { xs: 8, sm: 0 },
          minHeight: { xs: 'auto' },
          height: { md: 'calc(100vh - 120px)' },
          maxHeight: { md: 700, xl: 850 },
          transition: '0.3s',
        }}
      >
        <Grid container alignItems="center" wrap="nowrap" sx={{ height: '100%', mx: 'auto' }}>
          <Grid item md={7} lg={6} sx={{ m: 'auto' }}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h2" sx={{ my: 2, maxWidth: 500 }}>
                Getting started with
                <br />
                Pomodoro Mate
                {/* <GradientText color="error">Pomodoro Mate</GradientText> */}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3, maxWidth: 500 }}>
                뽀모도로 방식으로 여러 사람이 모여서 각자 공부하고 함께 회고하는 방식의 서비스입니다
              </Typography>
              <Button
                onClick={onClickStart}
                variant="contained"
                endIcon={<KeyboardArrowRightRounded />}
                sx={{
                  flexShrink: 0,
                  textTransform: 'none',
                }}
              >
                Get started
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            md={5}
            lg={6}
            sx={{ maxHeight: '100%', display: { xs: 'none', md: 'initial' } }}
          >
            <picture>
              <img />
            </picture>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}></Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;

// const GradientText = styled('span')<{
//   color?: 'primary' | 'error' | 'success' | 'warning';
// }>(({ theme, color = 'primary' }) => ({
//   background: `linear-gradient(90deg, ${(theme?.vars || theme).palette[color][400]} 5%, ${
//     (theme?.vars || theme).palette[color].main
//   } 90%)`,
//   WebkitBackgroundClip: 'text',
// }));
