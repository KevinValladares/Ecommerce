import React, { useState, useContext } from "react";
import {
    NavbarContainer, LeftContainer, RightContainer, NavbarExtendedContainer,
    NavbarInnerContainer, NavbarLinkContainer, NavbarLink,
    OpenLinksButton, NavbarLinkExtended, NombreUsuario, NombreUsuarioExtender
    , Libutton, Titulo, NavbarSubLink, IconCarrito
} from "./Menustyle";

import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import BurgerButton from "./BurgerButton";
import { authContext } from "../Context/Auth";
import { get } from '../Api/Conexion'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { deepOrange } from '@mui/material/colors';
import CartShop from "./CartShop";
import ProductCart from './ProductCart'



const NavMenu = () => {

    const context = useContext(authContext)
    const [extendNavbar, setExtendNavbar] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const open2 = Boolean(anchorEl2);

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const navigate = useNavigate()

    const handleClickMenu = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl2(null);
    };
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
            role="presentation"

            onKeyDown={toggleDrawer(anchor, false)}
        >
            <ProductCart CerrarBox={toggleDrawer(anchor, false)} />
        </Box>
    );

    const handleClickLink = () => {

        if (extendNavbar == true)
            setExtendNavbar(false)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogOut = () => {

        get("/api/auth/logout")
            .then(result => {

                context.setUser({ type: 'LOGOUT' })
                navigate("/")
            })



    }


    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>

                <LeftContainer>
                    <Titulo>ShopiMarket</Titulo>
                </LeftContainer>

                <RightContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to='/'>Inicio</NavbarLink>
                        {!context.logged && <NavbarLink to='/Login'>Login</NavbarLink>}
                        {!context.logged && <NavbarLink to='/Signup'>SignUp</NavbarLink>}
                        {context.logged && <Libutton onClick={handleClickMenu}>Productos</Libutton>}


                        <IconCarrito extendNavbar={extendNavbar}>
                            <CartShop handleCartonClick={toggleDrawer('right', true)} />
                        </IconCarrito>


                        <OpenLinksButton>
                            <BurgerButton 
                            Clicked={extendNavbar} 
                            handleClick={() => { setExtendNavbar(!extendNavbar); }} />
                        </OpenLinksButton>

                    </NavbarLinkContainer>
                </RightContainer>

                {
                    context.logged &&
                    (
                        <NombreUsuario>
                            <CartShop handleCartonClick={toggleDrawer('right', true)} />
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 ,mb:1}}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar 
                                    sx={{ width: 32, height: 32, bgcolor: deepOrange[500] }}>
                                        {context.user.name.substring(0,1)}</Avatar>
                                </IconButton>
                            </Tooltip>
                        </NombreUsuario>


                    )
                }

            </NavbarInnerContainer>

            {extendNavbar && (
                <NavbarExtendedContainer>

                    <NavbarLinkExtended onClick={handleClickLink} to='/'>Inicio</NavbarLinkExtended>
                    {!context.logged &&
                        <NavbarLinkExtended onClick={handleClickLink} to='/Login'>Login</NavbarLinkExtended>
                    }
                    {!context.logged &&
                        <NavbarLinkExtended onClick={handleClickLink} to='/Signup'>SignUp</NavbarLinkExtended>
                    }

                    {
                        context.logged &&
                        (
                            <NombreUsuarioExtender>
                                <span>{context.user.name}</span>
                                <span onClick={handleLogOut}><Logout fontSize="small" />Logout</span>
                            </NombreUsuarioExtender>

                        )
                    }

                </NavbarExtendedContainer>
            )}


            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                
            >
                <MenuItem>
                    <Avatar sx={{ bgcolor: deepOrange[500] }} /> {context.user.name}
                </MenuItem>
                <Divider />

                <MenuItem onClick={handleLogOut}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <NavbarSubLink onClick={handleCloseMenu} to='/Login'>Ingresar Productos</NavbarSubLink>
                <NavbarSubLink onClick={handleCloseMenu} to='/ListProducts'>Ver productos</NavbarSubLink>
            </Menu>

        </NavbarContainer>
    );
}
export default NavMenu