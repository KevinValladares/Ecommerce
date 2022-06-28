import React, { useState } from 'react'


import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { deepOrange, deepPurple } from '@mui/material/colors';

import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const CartShop = ({ handleCartonClick }) => {

    const [contador, setContador] = useState(6);


    return (

        <Box
            sx={{
                color: "action.active",
                display: "flex",
                flexDirection: "column",
                "& > *": {
                    marginbottom: 1
                },
                "& .MuiBadge-root": {
                    marginRight: 1
                }
            }}
        >
            <div onClick={handleCartonClick}>
                <Badge color="secondary" badgeContent={contador} max={5}>
                    <ShoppingCartIcon style={{ color: 'white' }} />
                </Badge>
                </div>
                {/*  <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup> */}
         




        </Box>


    )
}

export default CartShop