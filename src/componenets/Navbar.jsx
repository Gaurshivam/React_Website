import React from 'react'
import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Box,Menu,MenuItem} from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding: "0  10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icon = styled(Box)(({ theme }) => ({ 
    display: "none", 
    gap: "20px", 
    alignItem: "center" ,
    [theme.breakpoints.up("sm")]:{
        display:"flex",
    }
}));

const UserBox = styled(Box)(({ theme }) => ({ 
    display: "flex", 
    gap: "10px", 
    alignItem: "center" ,
    [theme.breakpoints.up("sm")]:{
        display:"none",
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Shivam Gaur</Typography>
                <PersonIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='Search......' /></Search>
                <Icon>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar alt="Remy Sharp" sx={{ width: 30, height: 30 }} 
                    src="https://images.unsplash.com/photo-1671381822632-ac3f433569bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                    onClick={e=>setOpen(true)}
                    />

                </Icon>
                <UserBox onClick={e=>setOpen(true)}>
                <Avatar alt="Remy Sharp" sx={{ width: 30, height: 30 }} 
                    src="https://images.unsplash.com/photo-1671381822632-ac3f433569bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                
                <Typography variant='span'>Shivam</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>
    )
}

export default Navbar
