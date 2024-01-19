import { Typography ,Container ,Box, Select ,Button, MenuItem, TextField, FormControl,InputLabel ,Table, TableBody,TableCell,TableRow,Paper,TableContainer,TableHead} from '@mui/material'
import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CancelIcon from '@mui/icons-material/Cancel';
import Popover from '@mui/material/Popover';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import axios from 'axios';

export default function Lab() {
  //for deleting confirm popup
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  //for adding
  const [name,setName]=useState('')
  const [amount,setAmount]=useState('')
  const [dur,setDur]=useState('')
  const [prov,setProv]=useState('')
  //for editing
  const [nameE,setEName]=useState('')
  const [amountE,setEAmount]=useState('')
  const [durE,setEDur]=useState('')
  const [provE,setEProv]=useState('')

  const [edit,setEdit]=useState(false)
  const [del,setDel]=useState(false)

  const [data,setData]=useState([])//where data fetched by get request are stored

  //for clear button
  const clearData=()=>{
    setName('')
    setAmount('')
    setDur('')
    setProv('')
    setEName('')
    setEAmount('')
    setEDur('')
    setEProv('')
  }

  const fetchData=()=>{
    axios.get('https://localhost:44375/api/Lab')
    .then((result)=>{
      setData(result.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  const sendData=()=>{
    const data={
      'name':name,
      'amount':amount,
      'dur':dur,
      'prov':prov
    }
    axios.post('https://localhost:44375/api/Lab',data)
    .then((result)=>{
      fetchData()
      clearData()
    })
  }

  const deleteData=()=>{

  }

  const sendEData=()=>{
      console.log(nameE+' '+amountE+' '+provE+' '+durE);
  }

 const editData=(nameE,amountE,durE,provE)=>{
    setEdit(true)
    setEName(nameE)
    setEAmount(amountE)
    setEDur(durE)
    setEProv(provE)
 }

  function createData(name, amount, duration, provider) {
    return { name, amount, duration, provider };
  }
  
  const rows = [
    createData('Full blood', 100, 1, 'Hemas'),
    createData('Half blood', 50, 2, 'Hemas'),
    createData('Thyroxin', 50, 12, 'Durdance'),
    createData('Urine', 100, 2, 'Asiri'),
    createData('HIV', 20, 24, 'Hemas')
  ];

  useEffect(()=>{
    document.body.style.backgroundColor = "#e8f1ff"
    fetchData()
  },[])

  return (
    <div>
      <Container sx={{pl:'50px',pr:'50px'}}>
          <Typography variant='h4' sx={{pt:'30px',mb:'20px',ml:'20px'}} color="gray">Welcome to the labs</Typography>
          <Accordion>
            <AccordionSummary expandIcon={<AddCircleIcon color='primary'/>}>Add new template</AccordionSummary>
            <AccordionDetails >
            <Box sx={{display: 'flex',flexDirection: 'row',justifyContent:'space-around', width:'100%'}}>
            <TextField required label="Test name" size='small' value={name} onChange={(e)=>setName(e.target.value)}/>
            <TextField required label="Amount" type='number' size='small' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <FormControl sx={{minWidth: 120 }} size='small'>
              <InputLabel id="dur">Duration</InputLabel>
              <Select labelId='dur' label='Duration' value={dur} onChange={(e)=>setDur(e.target.value)}>
                  <MenuItem value={'1'}>1 hour</MenuItem>
                  <MenuItem value={'2'}>2 hours</MenuItem>
                  <MenuItem value={'6'}>6 hours</MenuItem>
                  <MenuItem value={'12'}>12 hours</MenuItem>
                  <MenuItem value={'24'}>1 day</MenuItem>
                  <MenuItem value={'48'}>2 days</MenuItem>
             </Select>
            </FormControl>
            <FormControl sx={{minWidth: 120 }} size='small'>
              <InputLabel id="prov">Provider</InputLabel>
              <Select labelId='prov' label='Provider' value={prov} onChange={(e)=>setProv(e.target.value)}>
                  <MenuItem value={'Hemas'}>Hemas</MenuItem>
                  <MenuItem value={'Asiri'}>Asiri</MenuItem>
                  <MenuItem value={'Durdance'}>Durdance</MenuItem>
             </Select>
            </FormControl>


          </Box>
            <Button type="submit" onClick={sendData} variant="contained" sx={{ mt: 2, mb: 1 ,ml:8}} size='small'>
              OK
            </Button>
            <Button type="reset" onClick={clearData} variant="contained" sx={{ mt: 2, mb: 1 ,ml:2}} color='warning' size='small'>
              Clear
            </Button>
          </AccordionDetails>
          </Accordion>



          <TableContainer component={Paper} sx={{mt:'30px'}}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow >
                  <TableCell align="left" sx={{fontWeight:'bold'}}>Test name</TableCell>
                  <TableCell align="right" sx={{fontWeight:'bold'}}>Amount(ml)</TableCell>
                  <TableCell align="right" sx={{fontWeight:'bold'}}>Duration(h)</TableCell>
                  <TableCell align="right" sx={{fontWeight:'bold'}}>Provider(g)</TableCell>
                  <TableCell align="right" sx={{fontWeight:'bold'}}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                    <TableCell align="right">{row.dur}</TableCell>
                    <TableCell align="right">{row.prov}</TableCell>
                    <TableCell align="right" >
                      <div >
                          <DeleteForeverIcon color='error' sx={{cursor:'pointer'}} onClick={handleClick} >
                          </DeleteForeverIcon>
                          <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                  vertical: 'bottom',
                                  horizontal: 'left',
                                }}
                          >
                              <Typography sx={{p:'10px'}}>Are you sure</Typography>
                              <DoneOutlineIcon color='error' sx={{ml:'40px',cursor:'pointer',pb:'5px'}} onClick={deleteData}></DoneOutlineIcon>
                          </Popover>
                        
                          <ModeEditIcon fontSize='small' color='primary' sx={{cursor:'pointer',ml:'20px'}} onClick={()=>editData(row.name,row.amount,row.duration,row.provider)}>
                          </ModeEditIcon>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </Container>





      
      {edit ?       <div style={{position:'fixed',width:'100vw',height:'100vh',top:'0',left:'0',backgroundColor:'rgba(255,255,255,0.8)'}}>
      </div> : ''}


      {edit ? 
        <Paper sx={{backgroundColor:'white',zIndex:'10',position:'fixed',top:'40vh',left:'20vw',height:'150px',width:'800px',pt:'10px'}} elevation={3}>
          <div style={{width:'100%',height:'20px',marginBottom:'20px'}}>
              <CancelIcon color='error' sx={{position:'relative',left:'95%',cursor:'pointer'}} onClick={()=>setEdit(false)}></CancelIcon>
          </div>
          <Box sx={{display: 'flex',flexDirection: 'row',justifyContent:'space-around', width:'100%'}}>
            <TextField required label="Test name" size='small' value={nameE} onChange={(e)=>setEName(e.target.value)}/>
            <TextField required label="Amount" type='number' size='small' value={amountE} onChange={(e)=>setEAmount(e.target.value)}/>
            <FormControl sx={{minWidth: 120 }} size='small'>
              <InputLabel id="dur">Duration</InputLabel>
              <Select labelId='dur' label='Duration' value={durE} onChange={(e)=>setEDur(e.target.value)}>
                  <MenuItem value={'1'}>1 hour</MenuItem>
                  <MenuItem value={'2'}>2 hours</MenuItem>
                  <MenuItem value={'6'}>6 hours</MenuItem>
                  <MenuItem value={'12'}>12 hours</MenuItem>
                  <MenuItem value={'24'}>1 day</MenuItem>
                  <MenuItem value={'48'}>2 days</MenuItem>
             </Select>
            </FormControl>
            <FormControl sx={{minWidth: 120 }} size='small'>
              <InputLabel id="prov">Provider</InputLabel>
              <Select labelId='prov' label='Provider' value={provE} onChange={(e)=>setEProv(e.target.value)}>
                  <MenuItem value={'Hemas'}>Hemas</MenuItem>
                  <MenuItem value={'Asiri'}>Asiri</MenuItem>
                  <MenuItem value={'Durdance'}>Durdance</MenuItem>
             </Select>
            </FormControl>


          </Box>
            <Button type="submit" onClick={sendEData} variant="contained" sx={{ mt: 2, mb: 1 ,ml:8}} size='small'>
              OK
            </Button>
            <Button type="reset" onClick={clearData} variant="contained" sx={{ mt: 2, mb: 1 ,ml:2}} color='warning' size='small'>
              Clear
            </Button>

        </Paper> : ''}
    </div>
  )
}
