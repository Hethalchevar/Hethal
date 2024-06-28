import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import {Button} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';




export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

 
  

  
  
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          
          <Link to="/home">
          <Button variant="h6" component="div" sx={{ flexGrow: 1 ,color:'white'}}>
            Home
          </Button>
          </Link>

          <Link to="/category">
          <Button variant="h6" component="div" sx={{ flexGrow: 1 ,color:'white'}}>
            Category
          </Button>
          </Link>

          <Link to="/about">
          <Button variant="h6" component="div" sx={{ flexGrow: 1 ,color:'white'}}>
            About
          </Button>
          </Link>

          <Link to="/contact">
          <Button variant="h6" component="div" sx={{ flexGrow: 1 ,color:'white'}}>
            Contact
          </Button>
          </Link>

          <Link to="/all">
          <Button variant="h6" component="div" sx={{ flexGrow: 1 ,color:'white'}}>
            All Products
          </Button>
          </Link>
          
          <Link to="/register">
          <Button variant="h6" component="div" sx={{ flexGrow: 1 ,color:'white'}}>
            Register
          </Button>
          </Link>

          <Link to="/login">
          <Button variant="h6" component="div" sx={{ flexGrow: 1 ,color:'white'}}>
            Login
          </Button>
          </Link>

          <Link to="/logout">
          <Button variant="h6" component="div" sx={{ flexGrow: 1 ,color:'white'}}>
            Logout
          </Button>
          </Link>
        </Toolbar>
      </AppBar>
     
    </Box>
    </div>
  )
}
