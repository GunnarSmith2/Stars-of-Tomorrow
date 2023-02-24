import { Typography, Box, Stack, Button } from '@mui/material'
import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import './events.css'

//Component
import AddModal from '../../components/Modal/AddEvent'

const Event = () => {
  return (
    <div>
      <Navbar />
      <Typography 
          variant='h4' 
          style={{background: "-webkit-linear-gradient(45deg, #f2cd00 30%, #ffffff 90%)",
          webkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",}} 
          sx={{ letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:500, textAlign: 'center'}} 
          marginTop={4}>
        Events
      </Typography>
        <AddModal />
      <Box padding={4} display='flex' alignItems='center' justifyContent="space-between" marginTop={2}>
        <Typography 
          variant='h5'
          sx={{
            color: 'white',
            fontFamily: 'Oswald, sans-serif',
            letterSpacing: '.5px',
            fontWeight: 400
          }}
        >
          LIVE
        </Typography>
        <Button
          sx={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '16px',
            color: '#F8F9FA', 
            cursor: 'pointer'
          }}
        >
          SEE ALL
        </Button>
      </Box>
      <Box display='flex' alignItems='center' justifyContent="space-between">
        <Typography 
          variant='h5'
          sx={{
            color: '#F8F9FA',
            fontFamily: 'Oswald, sans-serif',
            letterSpacing: '.5px',
            boxSizing: 'border-box', 
            padding: 4,
            fontWeight: 400
          }}
        >
          COMING UP
        </Typography>
        <Button
          sx={{
            fontFamily: 'Oswald, sans-serif',
            fontSize: '16px',
            color: '#F8F9FA', 
            cursor: 'pointer', 
            marginRight: '2rem'
          }}
        >
          SEE ALL
        </Button>
      </Box>
    </div>
  )
}

export default Event