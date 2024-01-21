import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { TableCell, TableHead, TableRow, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import axios from 'axios';


function App() {
  const [load,setLoad] = useState([]);

  useEffect(()=>{
    fetchData()
  },[])

  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(true);};

  const [name,setName]=useState('');
  const [Age,setAge]=useState('');
  const [Gender,setGender]=useState('');
  const [Telephone_no,setTelephone_no]=useState('');


  const fetchData=()=>{
    axios.get('http://localhost:5272/api/Doctor')
    .then((result)=>{
      setLoad(result.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const sendData=()=>{
    const data={ 
       'name': name,
        'age': Age,
        'gender': Gender,
        'telephone_no': Telephone_no      
    }
    axios.post('http://localhost:5272/api/Doctor',data)
    .then((result)=>{
      fetchData()
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className="App">

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

    <br />
    <br />   
    
    <div>   
      <Button variant="contained" color="primary" onClick={handleClick}>
        Add a new patient
      </Button>
      {showForm && 
      
      <Box
    component="form"sx={{'& .MuiTextField-root': { m: 2, width: '35ch' },}}
    noValidate
    autoComplete="off"
      >
      <form className="add-form">       
      
      <div>
        <TextField label="Name" id="filled-size-small" onChange={(e)=>setName(e.target.value)} />   
        <TextField  label="Age" id="filled-size-normal"  onChange={(e)=>setAge(e.target.value)}/>        
      </div>
      <div>
        <TextField  label="Gender" id="standard-size-small" onChange={(e)=>setGender(e.target.value)} />         
        <TextField  label="Telephone-no" id="standard-size-normal" onChange={(e)=>setTelephone_no(e.target.value)} />        
       </div>
        <br></br>
        <input type="submit" value="submit" onClick={sendData}/>
        </form>
        </Box>
        
        }



      </div>  

    <br />
  
    <div>
      <table style={{width:'100%',}} >             
          <TableRow style={{color:"white",backgroundColor:"black",}}>          
            <TableCell align="right">Name</TableCell>
            <TableCell align="right" >Age</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right" >Telephone_No</TableCell>
            <TableCell  ></TableCell>
          </TableRow>  
       
          {load.map((item) => (
            <TableRow key={item.id} >
              <TableCell  align="right">{item.name}</TableCell>
              <TableCell  align="right">{item.age}</TableCell>
              <TableCell  align="right">{item.gender}</TableCell>
              <TableCell  align="right">{item.telephone_no}</TableCell>
              <TableCell  align="right">
                <Button variant="contained" color="primary"style={{ margin: '10px'}}>Edit </Button>
                
                <Button variant="contained" color="success" >Delete </Button>
              </TableCell>
            </TableRow>
          ))}
        
      </table>
    </div>

    </div>
  );
}

export default App;
