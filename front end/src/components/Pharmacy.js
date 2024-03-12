import React, {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import { TableCell, TableHead,TableRow,TableBody,Typography,Paper,TableContainer,Table} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

export default function Pharmacy() {
  
  const [tableData, setTableData] = useState([]);
  
  useEffect(()=>{
    fetchData()
  },[])

  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setShowForm(true);
  };

  const [medicine, setMedicine] =useState('');
  const [weight, setWeight] =useState('');
  const [price, setPrice] =useState('');
  const [company, setCompany] =useState('');

  const fetchData=()=>{
    axios.get('http://localhost:5272/api/Pharmacy')
    .then((result)=>{
      setTableData(result.data)
      console.log(result)
    }) 
    
    .catch((error)=>{
      console.log(error)
    })
  }

  const sendData=()=>{
    const data={
      'medicine_Name':medicine,
      'weight':weight,
      'price':price,
      'company_name':company,
    }
    axios.post('http://localhost:5272/api/Pharmacy',data)
    .then((result)=>{
      fetchData()
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  const deleteData = (id) => {
    axios.delete(`http://localhost:5272/api/Pharmacy/${id}`)
    .then(() => {
      fetchData();
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  
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
                    <TableCell><b>company</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row =>(
                        <TableRow key={row.Medicine} sx={{'&:last-child td, &:last-child th':{border:0}}}>
                            <TableCell>{row.medicine_Name}</TableCell>
                            <TableCell>{row.weight}</TableCell>
                            <TableCell>{row.price}</TableCell>
                            <TableCell>{row.company_name}</TableCell>
                            <Button variant="contained" color="primary"style={{ margin: '20px'}}>Edit </Button>
                            <Button variant="contained" color="primary"style={{ margin: '20px'}} onClick={() => deleteData(row.id)} >Delete </Button>
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
      <TextField label="name" id="filled-size-small" onChange={(e)=>setMedicine(e.target.value)}/>
      <TextField label="weight" id="filled-size-normal" onChange={(e)=>setWeight(e.target.value)}/>
      <TextField label="price" id="filled-size-small"onChange={(e)=>setPrice(e.target.value)}/>
      <TextField label="company" id="filled-size-small"onChange={(e)=>setCompany(e.target.value)}/>
    </div>
    <br></br>
    <input type='submit' value="submit" onClick={sendData}/>
  </form>
      </Box>

      }
    </div>
    
    </div>
  )
  
}
