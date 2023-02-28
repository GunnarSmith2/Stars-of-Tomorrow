import { Typography, Box, Stack, Button } from '@mui/material'
import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import './events.css'
import Events from '../../components/Events/EventCard'

//Component
import AddModal from '../../components/Modal/AddEvent'

const Event = () => {
  const [lives, setLive] = React.useState([
    {
      id: 6, 
      city: 'Orange County',
      state: 'Califonia',
      date: '2-25-23',
      stadium: 'Plastic Stadium',
      startTime: '1:00 PM',
      img: 'https://s1.ticketm.net/dam/a/e87/cef1d80d-ce07-4547-af9e-7e5938d20e87_1250951_TABLET_LANDSCAPE_LARGE_16_9.jpg'
    },
  ])
  const [camps, setCamps] = React.useState([
    {
      id: 1, 
      city: 'Chicago',
      state: 'Illinois',
      date: '3-13-23',
      stadium: 'Fake Stadium',
      startTime: '1:00 PM',
      img: 'https://fightingillini.com/images/2020/8/22/ATH1920_Facilities_0004s_0003_eichelbergerfield.jpg'
    },
    {
      id: 2, 
      city: 'New York City',
      state: 'New York',
      date: '4-21-23',
      stadium: 'NY Stadium',
      startTime: '1:00 PM',
      img: 'https://www.liberty.edu/news/wp-content/uploads/sites/137/2017/04/Liberty-Softball-Stadium-20170418KMsdy.jpg'
    },
    {
      id: 3, 
      city: 'Atlanta',
      state: 'Georgia',
      date: '5-3-23',
      stadium: 'Peach Stadium',
      startTime: '1:00 PM',
      img: 'https://georgiadogs.com/images/2016/5/20/softball-15-05.jpg'
    },
    {
      id: 4, 
      city: 'Dallas',
      state: 'Texas',
      date: '7-7-23',
      stadium: 'Cowboy Stadium',
      startTime: '1:00 PM',
      img: 'https://static2.gensler.com/uploads/hero_element/14739/thumb_mobile/thumbs/texas-a-m-softball-2000x1125_03_1575571858_508x286.jpg'
    },
    {
      id: 5, 
      city: 'Miami',
      state: 'Florida',
      date: '9-13-23',
      stadium: 'Bikini Stadium',
      startTime: '1:00 PM',
      img: 'https://extrainningsoftball.com/wp-content/uploads/Florida-stadium.jpeg'
    }
  ])

  const showCamps = true;
  const showLiveCamps = true;

  return (
    <div>
      <Navbar />
      <Box display='flex' alignItems='center' justifyContent='center'>
      <Typography 
          justifyContent='center'
          variant='h4' 
          style={{background: "-webkit-linear-gradient(45deg, #f2cd00 30%, #ffffff 90%)",
          webkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",}} 
          sx={{ letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:500,}} 
          marginTop={5}
          textAlign='center'
          >
        Events
      </Typography>
      </Box>
      <Box display='flex' alignItems='center' justifyContent='flex-end'>
        <AddModal />
      </Box>
      <Box padding={4} display='flex' alignItems='center' justifyContent="space-between">
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
        <div className=''>
          {showLiveCamps ? (
            <>
            <Box display='flex' justifyContent={{xs: 'center', md: 'flex-start'}} flexWrap='wrap'  marginTop={1}>
              {lives.map((live) => {
                return(
                  <Events
                    key={live.id}
                    id={live.id}
                    city={live.city}
                    state={live.state}
                    date={live.date}
                    stadium={live.stadium}
                    startTime={live.startTime}
                    img={live.img}
                  />
                );
              })}
            </Box>
            </>
          ) : (
            <p> No  Live Events Right Now</p>
          )}
        </div>
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
          UPCOMING
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
      <div className=''>
          {showCamps ? (
            <>
            <Box display='flex' justifyContent={{xs: 'center', md: 'flex-start'}} flexWrap='wrap'  marginTop={2}>
              {camps.map((camp) => {
                return(
                  <Events
                    key={camp.id}
                    id={camp.id}
                    city={camp.city}
                    state={camp.state}
                    date={camp.date}
                    stadium={camp.stadium}
                    startTime={camp.startTime}
                    img={camp.img}
                  />
                );
              })}
            </Box>
            </>
          ) : (
            <p> No Events Right Now</p>
          )}
        </div>
    </div>
  )
}

export default Event