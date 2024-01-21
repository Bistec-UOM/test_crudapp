import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { TableCell, TableHead,TableRow,TableBody,Typography,Paper,TableContainer,Table} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export default function Pharmacy() {

  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(true);
  };

  const tableData = [
    {
        "Medicine": "Panadol",
        "weight" : 2,
        "price" : 10,
  
    },
    {
        "Medicine": "Ompazole",
        "weight" : 3,
        "price" : 11,
  
    },
    {
        "Medicine": "Zithrazeene",
        "weight" : 5,
        "price" : 25,
  
    },
  ]
  
  return (
    <div>
      <AppBar position='sticky'>
            <Typography variant="h4" component="div" sx={{ paddingLeft:'250px' }}>
                          Pharmacy
            </Typography>  
        </AppBar>
        <br></br>
        <TableContainer component={Paper}>
        <Table aria-aria-label='simple table'>
            <TableHead>
                <TableRow>
                    <TableCell><b>Medicine</b></TableCell>
                    <TableCell><b>weight</b></TableCell>
                    <TableCell><b>price</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row =>(
                        <TableRow key={row.Medicine} sx={{'&:last-child td, &:last-child th':{border:0}}}>
                            <TableCell>{row.Medicine}</TableCell>
                            <TableCell>{row.weight}</TableCell>
                            <TableCell>{row.price}</TableCell>
                            <Button variant="contained" color="primary"style={{ margin: '20px'}}>Edit </Button>
                            <Button variant="contained" color="primary"style={{ margin: '20px'}} >Delete </Button>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>

    </TableContainer>
      
        
        <br></br>
    
    <div>
      <Button variant='contained'color='success'onClick={handleClick}>
           Add a new drug
      </Button>
      {showForm && 
      
      <Box component="form"
      sx={{'& .MuiTextField-root': { m: 2, width: '35ch' },}}
      noValidate
      autoComplete='off'>
  <form className='add'>
    <div>
      <TextField label="name" id="filled-size-small"/>
      <TextField label="weight" id="filled-size-normal"/>
      <TextField label="price" id="filled-size-small"/>
    </div>
    <br></br>
    <input type='submit' value="submit"/>
  </form>
      </Box>

      }
    </div>
    
    </div>
  )
  
}
