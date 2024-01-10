import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import React from 'react'
import {format} from 'date-fns'
import  Avatar  from '@mui/material/Avatar';
import HospitalIcon from '@mui/icons-material/LocalHospital';


const Header=()=>
{

    const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


    return <div>
         <Box sx={{ flexGrow: 1}}>
     
      <AppBar sx={{backgroundColor:'#f7f8f7'}} position="static" >
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <HospitalIcon style={{color: 'red', marginRight: '8px' }} fontSize="large" />
          <span style={{ color: '#09D636', fontWeight: 'bold' }}>Medicare</span>
            <span style={{ color: '#AFDCB9', fontWeight: 'bold' }}>Hub</span>
          </Typography>
          <Typography sx={{flexGrow:1}} color="#20415C">Today is the {format(new Date(),'do MMMM Y')}</Typography>
          <Typography color="#9F9D9D">Mario</Typography>
          <Avatar sx={{marginLeft:3}} src="./rimages/pexels-simon-robben-614810.jpg"></Avatar>
        </Toolbar>
      </AppBar>
    </Box>

    </div>
}

export default Header;