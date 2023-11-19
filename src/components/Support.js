import NavBar from "./NavBar";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Support() {
    return (
        <>
        <NavBar/>
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
                    Suport clienti
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
                    Completati formularul de mai jos cu datele dumneavoastra si va vom contacta.
                </Typography>
            </Container>
            <Container sx={{ pt: 3}}>
                <Box 
                    component="form"
                    noValidate
                >
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }}>
                        <Grid item xs={6}>
                            <TextField id="last_name" label="Nume" variant="standard" required fullWidth/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="first_name" label="Prenume" variant="standard" required fullWidth/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="email" label="Adresa de email" variant="standard" required fullWidth/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="tel" label="Numar de telefon" variant="standard" fullWidth/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="message" label="Mesaj" variant="standard" fullWidth multiline required/>
                        </Grid>
                        <Grid container justifyContent="flex-end" xs={12}>
                            <Button>Trimite formular</Button>
                        </Grid>
                    </Grid>
                    
                </Box>
            </Container>
        </Box>
        </main>
        </>
    )
}

export default Support;
