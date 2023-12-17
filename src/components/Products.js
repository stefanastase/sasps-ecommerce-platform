import NavBar from "./NavBar";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import productData from '../data/products.json'
import { getBasket } from "../utils";

function Products(category) {
    // TODO: Query DB for items
    const products = productData[category.toLowerCase()];

    const addToBasket = (item) => {
        const basket = getBasket();
        try {
          basket.addItem({name: `${category.toLowerCase()}-${item.name}`, price: item.price});
        }
        catch (err) {
          alert(err.message)
        }
    }

    return (
    <>
    <NavBar />
    <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
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
                {category}
                </Typography>
            </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          {!products.length && <Typography variant="h6">Nu exista produse in aceasta categorie.</Typography>}
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product.name} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    sx={{ height: 250 }}
                    component="img"
                    image={product.img}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {product.status}<br/>
                      Rating: {product.rating}
                    </Typography>
                    <Typography variant="h6" component="p">
                      {product.price} RON
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => {addToBasket({name: product.id, price: product.price})}}>Adauga in cos</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </main>
    </>
  );
}

export default Products;
