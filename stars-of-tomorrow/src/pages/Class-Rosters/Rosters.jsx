import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Navbar from '../../components/NavBar/Navbar';
import RosterCard from '../../components/Roster/Roster-temp';

const Rosters = () => {
  const [rosters, setRosters] = React.useState([
    {
      id: 0,
      class: '2023',
      athletes: []
    },
    {
      id: 4,
      first: 'Paige',
      last: 'Hyland',
      camp_number: 4,
      position: '3B',
      bats: 'Left',
      pitches: 'Right',
      class: '2023'
    },
    {
      id: 5,
      first: 'Nia',
      last: 'Sioux',
      camp_number: 5,
      position: 'CF',
      bats: 'Right',
      pitches: 'n/a',
      class: '2022'
    },
    {
      id: 6,
      first: 'Brooke',
      last: 'Hyland',
      camp_number: 6,
      position: 'P',
      bats: 'Right',
      pitches: 'Right',
      class: '2021'
    },
    {
      id: 7,
      first: 'Kendall',
      last: 'Vertes',
      camp_number: 7,
      position: 'LF',
      bats: 'Right',
      pitches: 'Right',
      class: '2023'
    },
  ])

  const showRosters = true;

  return (
    <div>
        <Navbar />
        <Box>
          <Typography variant='h4' marginTop={5} justifyContent='center' textAlign='center' style={{background: "-webkit-linear-gradient(45deg, #f2cd00 30%, #ffffff 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",}}
          sx={{ letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:500,}} 
          >Class Rosters</Typography>
        </Box>
        <Box>
          <div className=''>
            {showRosters ? (
              <>
                <Box>
                  {rosters.map((roster) => {
                    return(
                      <RosterCard 
                        key={roster.id}
                        id={roster.id}
                        first={roster.first}
                        last={roster.last}
                        camp_number={roster.camp_number}
                        class={roster.class}
                      />
                    );
                  })}
                </Box>
              </>
            ) : (
              <p>No Rosters have been uploaded</p>
            )}
          </div>
        </Box>
    </div>
  )
}

export default Rosters