import React, { useState, useContext, useContextxt } from "react";
import {
    NavbarContainer, LeftContainer, RightContainer, NavbarExtendedContainer,
    NavbarInnerContainer, NavbarLinkContainer, NavbarLink, Logo,
    OpenLinksButton, NavbarLinkExtended, NombreUsuario, NombreUsuarioExtender
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

const NavMenu = () => {

    const context = useContext(authContext)
    const [extendNavbar, setExtendNavbar] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

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

        console.log('hola')

        context.setUser({
            user: {},
            logged: true,

        })



    }

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>

                <LeftContainer>
                    hola
                </LeftContainer>

                <RightContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to='/'>Inicio</NavbarLink>
                        {!context.user.logged && <NavbarLink to='/Login'>Login</NavbarLink>}

                        <OpenLinksButton>
                            <BurgerButton Clicked={extendNavbar} handleClick={() => { setExtendNavbar(!extendNavbar); }} />
                        </OpenLinksButton>

                    </NavbarLinkContainer>
                </RightContainer>

                {
                    context.user.logged &&
                    (
                        <NombreUsuario>
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                </IconButton>
                            </Tooltip>
                        </NombreUsuario>
                    )
                }




            </NavbarInnerContainer>

            {extendNavbar && (
                <NavbarExtendedContainer>

                    <NavbarLinkExtended onClick={handleClickLink} to='/'>Inicio</NavbarLinkExtended>
                    <NavbarLinkExtended onClick={handleClickLink} to='/Login'>Login</NavbarLinkExtended>

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
                    <Avatar /> {context.user.name}
                </MenuItem>
                <Divider />

                <MenuItem onClick={handleLogOut}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>


        </NavbarContainer>
    );
}
export default NavMenu