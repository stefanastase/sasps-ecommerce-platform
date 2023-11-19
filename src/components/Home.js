import NavBar from "./NavBar";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <>
    <NavBar />
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 5,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Bun venit la eStore!
          </Typography>
        </Container>
        <Container sx={{ pt: 3}}>
          <Typography
            component="p"
            variant="body1"
            align="left"
            color="text.primary"
            gutterBottom
          >
            Platforma eStore va ofera accesul la numeroase articole electronice la preturi competitive.
            <br/>
            Datorita arhitecturii serverless, bazate pe microservicii, platforma va putea fi accesibila chiar si in momentele in care traficul este ridicat (de exemplu, Black Friday).
          </Typography>
        </Container>
      </Box>
    </main>
    </>
  );
}

export default Home;
