import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { TableCell, TableHead, TableRow, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';

const Navbar=()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 30 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
           ADD  NEW  PATIENTS.....
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);};

  return (
    <div>   
          <Button variant="contained" color="primary" onClick={handleClick}>
        Add a new patient
      </Button>
      {showForm && <Addtask />}       
      </div>    
  );
};



const Addtask=()=>{
  return(
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 2, width: '35ch' },
    }}
    noValidate
    autoComplete="off"
 >
<form className="add-form">       
      
      <div>
        <TextField label="Name" id="filled-size-small" />   
        <TextField  label="Age" id="filled-size-normal"  />        
      </div>
      <div>
        <TextField  label="Gender" id="standard-size-small"  />         
        <TextField  label="Telephone-no" id="standard-size-normal"  />        
       </div>
<br></br>
<input type="submit" value="submit"/>
 </form>
 </Box>
  )
}

const Employees = () => {
  const [data, setData] = useState([
    { Name: 'Nethmi Eranga Wijeweera', Age: '23', Gender: 'Female', telephone_No: '0775294974' },
    { Name: 'Dammika Mahendra', Age: '23', Gender: 'Male', telephone_No: '0775294974' },
    { Name: 'Chathumini Wanasighe', Age: '23', Gender: 'Female', telephone_No: '0775294974' },
  ]);

  return (
    <div>
      <table>             
          <TableRow style={{
            color:"white",
            backgroundColor:"black",
          }}>          
            <TableCell>Name</TableCell>
            <TableCell  >Age</TableCell>
            <TableCell >Gender</TableCell>
            <TableCell >Telephone_No</TableCell>
            <TableCell ></TableCell>
          </TableRow>  
       
          {data.map((item) => (
            <TableRow key={item.Name} >
              <TableCell  align="right">{item.Name}</TableCell>
              <TableCell  align="right">{item.Age}</TableCell>
              <TableCell  align="right">{item.Gender}</TableCell>
              <TableCell  align="right">{item.telephone_No}</TableCell>
              <TableCell  align="right">
                <Button variant="contained" color="primary"style={{ margin: '10px'}}>Edit </Button>
                
                <Button variant="contained" color="success">Delete </Button>
              </TableCell>
            </TableRow>
          ))}
        
      </table>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />    
    <br />
    <br />   
    <Home />
    <br />
    <Employees />
    </div>
  );
}

export default App;
