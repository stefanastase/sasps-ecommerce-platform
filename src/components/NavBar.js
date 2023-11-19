import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Collapse from '@mui/material/Collapse';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import CategoryIcon from '@mui/icons-material/Category';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import LaptopIcon from '@mui/icons-material/Laptop';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import TvIcon from '@mui/icons-material/Tv';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  
const productCategories = [
{
    name: "Telefoane, Tablete",
    icon: <SmartphoneIcon/>,
},
{
    name: "Laptop, Desktop",
    icon: <LaptopIcon/>
},
{
    name: "TV, Audio, Foto",
    icon: <TvIcon/>
}
];

function NavBar() {

    const theme = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [productsExpanded, setProductsExpanded] = useState(false);
  
    const handleProductsExpand = () => { setProductsExpanded(!productsExpanded) };
    const handleDrawerOpen = () => { setDrawerOpen(true) };
    const handleDrawerClose = () => { setDrawerOpen(false) };
    let drawerWidth = 300;

    return (
        <>
        <AppBar position="relative">
            <Toolbar>
                <IconButton
                    onClick={handleDrawerOpen}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Link href="/" variant="h6" color="inherit" underline="none" sx={{ flexGrow: 1 }}>
                    eStore
                </Link>
                <div>
                    <IconButton
                    size="large"
                    color="inherit"
                    edge="end"
                    aria-label="shopping-cart"
                    >
                    <ShoppingCartIcon />
                    </IconButton>         
                </div>
            </Toolbar>
        </AppBar>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={drawerOpen}
            >
            <DrawerHeader>
                {/* <Typography>eStore</Typography> */}
                <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <ListItem key="Pagina principala" disablePadding>
                <ListItemButton href="/">
                    <ListItemIcon>
                    <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Pagina principala"/>
                </ListItemButton>
                </ListItem>
                <ListItem key="Produse" disablePadding>
                <ListItemButton onClick={ handleProductsExpand }>
                    <ListItemIcon>
                    <CategoryIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Produse"/>
                    {productsExpanded ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                </ListItem>
                <Collapse in={productsExpanded} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {productCategories.map((item) => (
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItemButton>
                    ))}
                </List>
                </Collapse>
                <ListItem key="Suport clienti" disablePadding>
                <ListItemButton href="/suport">
                    <ListItemIcon>
                        <SupportAgentIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Suport clienti"/>
                </ListItemButton>
                </ListItem>
            </List>
            
        </Drawer>
        </>
    )
}

export default NavBar;