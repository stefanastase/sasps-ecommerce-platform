import NavBar from "./NavBar";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import { getBasket } from "../utils";
import productData from '../data/products.json'
import { useState } from "react";
import { TableFooter } from "@mui/material";

function Basket() {
    const basket = getBasket();
    const [items, setItems] = useState(basket.getItems());
    const [total, setTotal] = useState(basket.getValue());

    const handleQuantityChange = (event) => {
        const newValue = event.target.value;
        const id = event.target.name;
        let idx = -1;

        for (let item of items) {
            if (item.name === id) {
                idx = items.indexOf(item);
            }
        }
        if (newValue === 0) {
            items.splice(idx, 1);
        }
        else {
            items[idx].quantity = newValue
        }
        setItems(items);
        basket.updateItems(items);
        setTotal(basket.getValue())
    }

    const [openDialog, setOpenDialog] = useState(false);
    
    const handleDialogClose = () => { setOpenDialog(false) }
    const OrderDialog = () => {
        const [paymentMethod, setPaymentMethod] = useState("");
        const handleSubmit = (e) => {
            e.preventDefault();
        }
        return (
            <form onSubmit={handleSubmit}>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Plaseaza comanda</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Pentru a plasa comanda, va rugam sa introduceti datele dumneavoastra.
                    </DialogContentText>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }}>
                        <Grid item xs={6}>
                            <TextField id="last_name" label="Nume" variant="standard" required fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="first_name" label="Prenume" variant="standard" required fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="email" label="Adresa de email" variant="standard" required fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="tel" label="Numar de telefon" variant="standard" required fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="address" label="Adresa" variant="standard" fullWidth multiline required />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="payment-method-label">Modalitate de plata</InputLabel>
                                <Select
                                    labelId="payment-method-label"
                                    id="demo-simple-select"
                                    value={paymentMethod}
                                    label="Modalitate de plata"
                                    onChange={(event) => setPaymentMethod(event.target.value)}
                                >
                                    <MenuItem value="ramburs">Ramburs la livrare</MenuItem>
                                    <MenuItem value="card">Card bancar</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Anuleaza</Button>
                    <Button type="submit">Comanda</Button>
                </DialogActions>
            </Dialog>
            </form>
        );
    }

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
            Cos de cumparaturi
          </Typography>
        </Container>
        <Container sx={{ pt: 3}}>
            {items.length !== 0 && 
            <>
            <OrderDialog/>
            <TableContainer component={Paper}>
                <Table aria-label="table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Nume produs</TableCell>
                        <TableCell align="right">Cantitate</TableCell>
                        <TableCell align="right">Pret unitar</TableCell>
                        <TableCell align="right">Pret</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {items.map((item) => {
                        const itemSplit = item.name.split("-");
                        const categoryProducts = productData[itemSplit[0]];
                        let product;
                        for (let categoryProduct of categoryProducts)
                            if (categoryProduct.id === itemSplit[1]) {
                                product = categoryProduct;
                                break;
                            }
                            
                        return (
                            <TableRow
                            key={item.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {product.name}
                            </TableCell>
                            <TableCell align="right">
                                <FormControl>
                                    <Select
                                        name={`${item.name}`}
                                        id={`${item.name}-select`}
                                        value={item.quantity}
                                        onChange={handleQuantityChange}
                                    >
                                        <MenuItem value={0}>0 (stergere)</MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCell>
                            <TableCell align="right">{product.price} RON</TableCell>
                            <TableCell align="right">{item.quantity * product.price} RON</TableCell>
                            </TableRow>
                        );
                    })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>TOTAL</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right">{total} RON</TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            <Grid container justifyContent="flex-end" style={{marginTop: 16}}>
                <Button variant="contained" onClick={() => setOpenDialog(true)}>Plaseaza comanda</Button>
            </Grid>
            </>
            }
            {items.length === 0 && 
                <Typography
                component="p"
                align="center"
                variant="h6"
                color="text.primary"
                >
                    Nu aveti produse in cos!
                </Typography>
            }
        </Container>
    </Box>
    </main>
    </>
  );
}

export default Basket;
