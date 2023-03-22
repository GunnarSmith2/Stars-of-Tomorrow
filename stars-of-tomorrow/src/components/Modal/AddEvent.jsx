import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import { FormControl, FormLabel, InputLabel, MenuItem, createTheme, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import './addEvent.css';

//Icon
import {AiOutlinePlusCircle} from 'react-icons/ai';
import { Typography } from '@mui/material';

const theme = createTheme({
  palette: {
    // main green
    primary: {
      main: '#000000',
    }
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Oswald, sans-serif',
        },
      },
    },
  }, 
});

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [city, setCity] = React.useState('');
  const [states, setStates] = React.useState('');
  const [date, setDate] = React.useState('');
  const [stadium, setStadium] = React.useState('');
  const [time, setTime] = React.useState('');

  const handleChange = (newValue) => {
    setDate(newValue);
    setTime(newValue);
  };

  const handleStates = (event) => {
    setStates(event.target.value)
  } 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Button variant='contained' size='small' sx={{ marginTop: -7 , marginRight: 4 }} style={{background: "black",
          Color: "#f2cd00",}}  onClick={handleClickOpen}>
        <AiOutlinePlusCircle color='white' /> <Typography fontFamily= 'Oswald, sans-serif' fontSize={14} marginLeft={.5}>EVENT</Typography> 
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{
          fontFamily: 'Oswald, sans-serif',
          textAlign: 'center', 
        }}>Add New Camp</DialogTitle>
        <Divider variant="middle" />
        <DialogContent>
          <DialogContentText textAlign='center' sx={{fontFamily: 'Oswald, sans-serif'}}>
            Scout, Lets setup a new upcoming camp. All we need is a little information!
          </DialogContentText>
          <form>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TextField 
            autoFocus
            sx={{  marginTop: 2 }}
            id="name"
            label="City"
            type="text"
            fullWidth
            variant="outlined"
            size='small'
            required
          />
          <FormControl variant='outlined' size='small' sx={{  marginTop: 1 }} fullWidth>
                  <InputLabel id='state' required value={states}>State</InputLabel>
                  <Select labelId='States' id='states' name="state" value={states} onChange={handleStates} label='State'>
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={'Alabama'}>Alabama</MenuItem>
                    <MenuItem value={'Alaska'}>Alaska</MenuItem>
                    <MenuItem value={'Arizona'}>Arizona</MenuItem>
                    <MenuItem value={'Arkansas'}>Arkansas</MenuItem>
                    <MenuItem value={'California'}>California</MenuItem>
                    <MenuItem value={'Colorado'}>Colorado</MenuItem>
                    <MenuItem value={'Connecticut'}>Connecticut</MenuItem>
                    <MenuItem value={'Delaware'}>Delaware</MenuItem>
                    <MenuItem value={'Florida'}>Florida</MenuItem>
                    <MenuItem value={'Georgia'}>Georgia</MenuItem>
                    <MenuItem value={'Hawaii'}>Hawaii</MenuItem>
                    <MenuItem value={'Idaho'}>Idaho</MenuItem>
                    <MenuItem value={'Illinois'}>Illinois</MenuItem>
                    <MenuItem value={'Indiana'}>Indiana</MenuItem>
                    <MenuItem value={'Iowa'}>Iowa</MenuItem>
                    <MenuItem value={'Kansas'}>Kansas</MenuItem>
                    <MenuItem value={'Kentucky'}>Kentucky</MenuItem>
                    <MenuItem value={'Louisiana'}>Louisiana</MenuItem>
                    <MenuItem value={'Maine'}>Maine</MenuItem>
                    <MenuItem value={'Maryland'}>Maryland</MenuItem>
                    <MenuItem value={'Massachusetts'}>Massachusetts</MenuItem>
                    <MenuItem value={'Michigan'}>Michigan</MenuItem>
                    <MenuItem value={'Minnesota'}>Minnesota</MenuItem>
                    <MenuItem value={'Mississippi'}>Mississippi</MenuItem>
                    <MenuItem value={'Missouri'}>Missouri</MenuItem>
                    <MenuItem value={'Montana'}>Montana</MenuItem>
                    <MenuItem value={'Nebraska'}>Nebraska</MenuItem>
                    <MenuItem value={'Nevada'}>Nevada</MenuItem>
                    <MenuItem value={'New Hampshire'}>Hampshire</MenuItem>
                    <MenuItem value={'New Jersey'}>New Jersey</MenuItem>
                    <MenuItem value={'New Mexico'}>New Mexico</MenuItem>
                    <MenuItem value={'New York'}>New York</MenuItem>
                    <MenuItem value={'North Carolina'}>North Carolina</MenuItem>
                    <MenuItem value={'North Dakota'}>North Dakota</MenuItem>
                    <MenuItem value={'Ohio'}>Ohio</MenuItem>
                    <MenuItem value={'Oklahoma'}>Oklahoma</MenuItem>
                    <MenuItem value={'Oregon'}>Oregon</MenuItem>
                    <MenuItem value={'Pennsylvania'}>Pennsylvania</MenuItem>
                    <MenuItem value={'Rhode Island'}>Rhode Island</MenuItem>
                    <MenuItem value={'South Carolina'}>South Carolina</MenuItem>
                    <MenuItem value={'South Dakota'}>South Dakota</MenuItem>
                    <MenuItem value={'Tennessee'}>Tennessee</MenuItem>
                    <MenuItem value={'Texas'}>Texas</MenuItem>
                    <MenuItem value={'Utah'}>Utah</MenuItem>
                    <MenuItem value={'Vermont'}>Vermont</MenuItem>
                    <MenuItem value={'Virgina'}>Virgina</MenuItem>
                    <MenuItem value={'Washington'}>Washington</MenuItem>
                    <MenuItem value={'West Virgina'}>West Virgina</MenuItem>
                    <MenuItem value={'Wisconsin'}>Wisconsin</MenuItem>
                    <MenuItem value={'Wyoming'}>Wyoming</MenuItem>
                    <MenuItem value={'Outside the U.S.'}>Outside the U.S.</MenuItem>
                  </Select>
                </FormControl>
          <DesktopDatePicker
            label="Start Date"
            inputFormat="MM/DD/YYYY"
            value={date}
            onChange={handleChange}
            renderInput={(params) => <TextField size='small' sx={{  marginTop: 1 }}  fullWidth {...params} error={false} required />}
          />
          <TextField 
            autoFocus
            id="name"
            label="Stadium"
            type="text"
            fullWidth
            variant="outlined"
            size='small'
            sx={{  marginTop: 1 }} 
            required
          />
          <TimePicker
            label="Start Time"
            value={time}
            onChange={handleChange}
            renderInput={(params) => <TextField size='small' sx={{  marginTop: 1 }}  fullWidth {...params} error={false} required />}
          />
          <label htmlFor='upload-campLogo'>
            <input 
              style={{ display: 'none'}}
              id='upload-campLogo'
              name='upload-campLogo'
              type='file'
              required
            />
            <Button variant='contained' size='small' component='span' sx={{ fontFamily: 'Oswald, sans-serif',  marginTop: 1 }}  fullWidth>
              Upload Camp Logo
            </Button>
          </label>
          <label htmlFor='upload-campLogo'>
            <input 
              style={{ display: 'none'}}
              id='upload-campLogo'
              name='upload-campLogo'
              type='file'
              required
            />
            <Button variant='contained' sx={{fontFamily: 'Oswald, sans-serif', marginTop: 1}} size='small' component='span' fullWidth>
              Upload Camp Roster
            </Button>
          </label>
          </LocalizationProvider>
          </form>
        </DialogContent>
        <DialogActions>
          <Button style={{ fontFamily: 'Oswald, sans-serif'}} onClick={handleClose}>Cancel</Button>
          <Button style={{ fontFamily: 'Oswald, sans-serif'}} onClick={handleClose}>Create Event</Button>
        </DialogActions>
      </Dialog>
      </ThemeProvider>
    </div>
  );
}