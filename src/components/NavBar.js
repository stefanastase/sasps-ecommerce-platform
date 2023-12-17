import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import * as utils from '../utils'

import AppBar from '@mui/material/AppBar';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
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


function ShoppingCart() {
    const theme = useTheme();
    const drawerWidth = 400;
    return (
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
        open={true}
        >
        <DrawerHeader>
            {/* <Typography>eStore</Typography> */}
            <IconButton>
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
        </List>
        
    </Drawer>
    )
}


function NavBar() {
    const theme = useTheme();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerOpen = () => { setDrawerOpen(true) };
    const handleDrawerClose = () => { setDrawerOpen(false) };
    let drawerWidth = 300;

    const basket = utils.getBasket();
    const [productsExpanded, setProductsExpanded] = useState(false);
    const handleProductsExpand = () => { setProductsExpanded(!productsExpanded) };

    const [phoneTabletsExpanded, setPhoneTabletsExpanded] = useState(false);
    const handlePhoneTabletsExpand = () => { setPhoneTabletsExpanded(!phoneTabletsExpanded) };

    const [laptopDesktopExpanded, setLaptopDesktopExpanded] = useState(false);
    const handleLaptopDesktopExpanded = () => { setLaptopDesktopExpanded(!laptopDesktopExpanded) };

    const [tvAudioPhotoExpanded, setTvAudioPhotoExpanded] = useState(false);
    const handleTvAudioPhotoExpanded = () => { setTvAudioPhotoExpanded(!tvAudioPhotoExpanded) };

    const productCategories = [
        {
            name: "Telefoane, Tablete",
            icon: <SmartphoneIcon/>,
            subcategories: [
                {
                    name: "Telefoane",
                    href: "/telefoane",
                },
                {
                    name: "Tablete",
                    href: "/tablete"
                }
            ],
            expanded: phoneTabletsExpanded,
            handleExpand: handlePhoneTabletsExpand
        },
        {
            name: "Laptop, Desktop",
            icon: <LaptopIcon/>,
            subcategories: [
                {
                    name: "Laptop",
                    href: "/laptop",
                },
                {
                    name: "Desktop",
                    href: "/desktop"
                }
            ],
            expanded: laptopDesktopExpanded,
            handleExpand: handleLaptopDesktopExpanded
        },
        {
            name: "TV, Audio, Foto",
            icon: <TvIcon/>,
            subcategories: [
                {
                    name: "TV",
                    href: "/tv",
                },
                {
                    name: "Audio",
                    href: "/audio"
                },
                {
                    name: "Foto",
                    href: "/foto"
                }
            ],
            expanded: tvAudioPhotoExpanded,
            handleExpand: handleTvAudioPhotoExpanded
        }
    ];

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
                <Box sx={{ flexGrow: 1 }}>
                    <Link href="/"  variant="h6" color="inherit" underline="none">eStore</Link>
                </Box>
                <div>
                    <IconButton
                    size="small"
                    color="inherit"
                    edge="end"
                    aria-label="shopping-cart"
                    href="/basket"
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
                            <>
                            <ListItem>
                                <ListItemButton sx={{ pl: 4 }} onClick={ item.handleExpand }>
                                    <ListItemIcon>
                                    {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} />
                                    {item.expanded ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                            </ListItem>
                            <Collapse in={item.expanded} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.subcategories.map((subcategory) => (
                                        <ListItem>
                                            <ListItemButton sx={{ pl: 4 }} href={subcategory.href}>
                                                <ListItemText primary={subcategory.name} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                            </>

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