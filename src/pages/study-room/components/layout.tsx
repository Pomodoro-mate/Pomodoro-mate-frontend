import { Box, Container, Grid } from '@mui/material';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container maxWidth="xl">
      <Box component="section" sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {children}
        </Grid>
      </Box>
    </Container>
  );
};

export default Layout;
