import { Typography ,Container ,Box, Select ,Button, MenuItem, TextField, FormControl,InputLabel ,Table, TableBody,TableCell,TableRow,Paper,TableContainer,TableHead} from '@mui/material'
import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function Lab() {

  const [name,setName]=useState('')
  const [amount,setAmount]=useState('')
  const [dur,setDur]=useState('')
  const [prov,setProv]=useState('')
  const [edit,setEdit]=useState(false)

  const clearData=()=>{
    setName('')
    setAmount('')
    setDur('')
    setProv('')
  }
  const sendData=()=>{
      console.log(name+' '+amount+' '+prov+' '+dur);
  }
 const editData=(name,amount,dur,prov)=>{
    setEdit(true)
    setName(name)
    setAmount(amount)
    setDur(dur)
    setProv(prov)
 }

  const [hover,setHover]=useState(false)
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

  })

  return (
    <div style={{height:'100vh',backgroundColor:'#e8f1ff'}}>
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
              <InputLabel id="prov">Duration</InputLabel>
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
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                    <TableCell align="right">{row.duration}</TableCell>
                    <TableCell align="right">{row.provider}</TableCell>
                    <TableCell align="right" >
                      <div >
                          <DeleteForeverIcon color='error' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} sx={{cursor:hover?'pointer':'auto'}} >
                          </DeleteForeverIcon>
  
                        
                          <ModeEditIcon fontSize='small' color='primary' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} sx={{cursor:hover?'pointer':'auto',ml:'20px'}} onClick={()=>editData(row.name,row.amount,row.duration,row.provider)}>
                          </ModeEditIcon>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </Container>
    </div>
  )
}
