import { Typography, Box, Stack, Button, Grid, Container, TextField, Paper, Divider, Popover, ToggleButton, ToggleButtonGroup, createTheme} from '@mui/material';
import Navbar from '../../components/NavBar/Navbar'
import React, { useState } from 'react';


const Power = ['Pull', 'Middle', 'Opposite', 'Line to Line'];
const Barrel = ['Pull', 'Middle', 'Opposite', 'Line to Line'];
const SwingPath = ['Pull', 'Middle', 'Opposite', 'Line to Line'];


const HittingData = () => {
    // const [formState, setFormState] = useState({ hitting: 0, swingOperation: 0, power: 0, swingPath: 0, barrelContact: 0 })
    // const { hitting, swingOperation, power, swingPath, barrelContact } = formState;
    // // const handleSubmit = (e) => {};

    // const addPoint = () => {
    //     setFormState(count => count + 1);
    // };

    // export async function getServerSideProps() {
    //     const { db } = await clientPromise;

    //     const athlete = await db
    //     .collection('aAthletes')
    //     .find({})



    //   }

    const [hitting, setHitting] = useState(0);
    const [swingOperation, setSwingOperation] = useState(0);
    const [power, setPower] = useState(0);
    const [swingPath, setSwingPath] = useState(0);
    const [barrelContact, setBarrelContact] = useState(0);
    const [notes, setNotes] = useState('');
    const [selected, setSelected] = useState(false);

    //selectors
    const Hitting= ['Pull', 'Middle', 'Opposite', 'Line to Line'];
    const [view, setView] = useState([]); //Hitting
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickView = (event) => {
        setAnchorEl(event.currentTarget);  
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    const open = Boolean(anchorEl);
    const id_h = open ? 'selectable-options-popover' : undefined;

///////////////////////////////////////
    const Swings= ['Short', 'Quick', 'Long', 'Slow'];
    const [operation, setOperation] = useState([]); // Swing Operation
    const [anchorEl2, setAnchorEl2] = useState(null);

    const handleClickSwings = (event) => {
        setAnchorEl2(event.currentTarget);  
    };

    const handleClose2 = () => {
            setAnchorEl2(null);
    };

    const handleOperation = (event, nextOperation) => {
        setOperation(nextOperation);
    };

    const openSwings = Boolean(anchorEl2);
    const id_sw = openSwings ? 'selectable-options-popover' : undefined;
    /////////////////////////////
    const Powers= ['Below', 'Average', 'Advanced', 'Elite'];
    const [powers, setPowers] = useState([]); // Swing Operation
    const [anchorEl3, setAnchorEl3] = useState(null);

    const handleClickPower = (event) => {
        setAnchorEl3(event.currentTarget);  
    };

    const handleClose3 = () => {
            setAnchorEl3(null);
    };

    const handlePower = (event, nextPower) => {
        setPowers(nextPower);
    };

    const openPower = Boolean(anchorEl3);
    const id_p = openPower ? 'selectable-options-popover' : undefined;
    //////////////////////////////////////////////////
    const Barrels= ['Below', 'Average', 'Advanced', 'Elite'];
    const [barrel, setBarrel] = useState([]); // Swing Operation
    const [anchorEl4, setAnchorEl4] = useState(null);

    const handleClickBarrel = (event) => {
        setAnchorEl4(event.currentTarget);  
    };

    const handleClose4 = () => {
            setAnchorEl4(null);
    };

    const handleBarrel = (event, nextBarrel) => {
        setBarrel(nextBarrel);
    };

    const openBarrel = Boolean(anchorEl4);
    const id_b = openBarrel ? 'selectable-options-popover' : undefined;
    /////////////////////////////////////////////
    const SwingPath= ['Smooth', 'Steep',];
    const [path, setPath] = useState([]); // Swing Operation
    const [anchorEl5, setAnchorEl5] = useState(null);

    const handleClickPath = (event) => {
        setAnchorEl5(event.currentTarget);  
    };

    const handleClose5 = () => {
            setAnchorEl5(null);
    };

    const handlePath = (event, nextPath) => {
        setPath(nextPath);
    };

    const openPath = Boolean(anchorEl5);
    const id_ph = openPath ? 'selectable-options-popover' : undefined;
    /////////////////////////////////////////////////////

    const addHitting = () => {

        if (hitting === 4) {
            return
        } else {
            setHitting(count => count + 1);
        }

    };

    const subtractHitting = () => {

        if (hitting === 0) {
            return
        } else {
            setHitting(count => count - 1);
        }

    };

    const addSwingOperation = () => {

        if (swingOperation === 4) {
            return
        } else {
            setSwingOperation(count => count + 1);
        }

    };

    const subtractSwingOperation = () => {

        if (swingOperation === 0) {
            return
        } else {
            setSwingOperation(count => count - 1);
        }

    };

    const addPower = () => {

        if (power === 4) {
            return
        } else {
            setPower(count => count + 1);
        }

    };

    const subtractPower = () => {

        if (power === 0) {
            return
        } else {
            setPower(count => count - 1);
        }

    };

    const addSwingPath = () => {

        if (swingPath === 4) {
            return
        } else {
            setSwingPath(count => count + 1);
        }

    };

    const subtractSwingPath = () => {

        if (swingPath === 0) {
            return
        } else {
            setSwingPath(count => count - 1);
        }

    };

    const addBarrelContact = () => {

        if (barrelContact === 4) {
            return
        } else {
            setBarrelContact(count => count + 1);
        }

    };

    const subtractBarrelContact = () => {

        if (barrelContact === 0) {
            return
        } else {
            setBarrelContact(count => count - 1);
        }

    };

    const exAthlete = {
        name: 'Allee Hitter',
        class: '2023',
        number: '22',
        primaryPosition: 'CF',
        secondaryPosition: 'SS',
        pitches: 'N/A',
        bats: 'Right'
    };


    return (
        <Container>
            <Box display='flex' aligndivs='center' justifyContent='center' borderBottom={2} borderColor='yellow' mb={1}>
                <Typography
                    justifyContent='center'
                    variant='h4'
                    style={{
                        background: "-webkit-linear-gradient(45deg, #f2cd00 30%, #ffffff 90%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                    sx={{ letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight: 500, }}
                    marginTop={5}
                    marginBottom={2}
                    textAlign='center'
                >
                    Hitting
                </Typography>
            </Box>
            <Box display='flex' justifyContent='center'>
            <Grid container spacing={2} display='flex' sx={{marginTop: '.2rem'}}>
                <Grid item xs={12}>
                    <Typography
                        display='flex'
                        justifyContent='center'
                        variant='h5'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight:'300',
                        }}
                    >
                       Camp Player: {exAthlete.name}
                    </Typography>
                </Grid>
                <Grid item xs={6} alignItems='center'>
                    <Typography
                        variant='h5'
                        textAlign='end'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300,
                        }}
                    >
                        Camp Number: {exAthlete.number}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        display='flex'
                        textAlign='start'
                        variant='h5'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300,
                            marginRight: '.5rem'
                        }}
                    >
                        Grad Class: {exAthlete.class}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography
                        display='flex'
                        variant='h6'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            fontSize:'18px',
                            letterSpacing: '.5px',
                            fontWeight: 300,
                            marginLeft: '.5rem'
                        }}
                    >
                        Primary Position: {exAthlete.primaryPosition}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography
                        display='flex'
                        textAlign='center'
                        variant='h6'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontSize:'18px',
                            fontWeight: 300,
                            marginLeft: '3rem'
                        }}
                    >
                        Pitches: {exAthlete.pitches}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography
                        display='flex'
                        justifyContent='center'
                        variant='h6'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontSize:'18px',
                            fontWeight: 300,
                        }}
                    >
                        Bats: {exAthlete.bats}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography
                        display='flex'
                        variant='h6'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            fontSize:'18px',
                            letterSpacing: '.5px',
                            fontWeight: 300,
                            marginLeft: '.5rem'
                        }}
                    >
                        Secondary Position: {exAthlete.secondaryPosition}
                    </Typography>
                </Grid>
            </Grid>
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' sx={{ marginTop: '3rem'}}>
            <Typography
                justifyContent='center'
                variant='h4'
                style={{
                    background: "-webkit-linear-gradient(45deg, #f2cd00 30%, #ffffff 90%)",
                    WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                        }}
                sx={{ marginBottom: '1rem', marginRight: '4rem', marginLeft: '2rem', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontSize:'30px', fontWeight: 500, }}
                    >
                    Scouting Evaluation
            </Typography>
            <Typography
                justifyContent='center'
                variant='h4'
                style={{
                    background: "-webkit-linear-gradient(45deg, #f2cd00 30%, #ffffff 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    }}
                sx={{ marginBottom: '1rem', marginRight: '2.7rem', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight: 500, }}
                    >
                    Grade
            </Typography>
            </Box>
            <Grid container>
            <Grid item xs={12}>
            <Box display='flex' aligndivs='center' marginBottom='2rem'>
                <Grid container spacing={2} justifyContent={'center'} paddingX='1rem' paddingY='1rem' >
                    <Grid item xs={9}>
                    <Button
                        onClick={handleClickView}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}>Hitting: {view.map((Hit) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Hit} variant='P1'>{Hit}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_h}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {Hitting.map((Hit) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={view} onChange={handleChange}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Hit} value={Hit}>
                                {Hit}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                    </Grid>
                    <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractHitting}>-</Button>
                        <Typography
                            justifyContent='center'
                            variant='h4'
                            style={{
                                background: "-webkit-linear-gradient(45deg, #f2cd00 30%, #ffffff 90%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                            sx={{ letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight: 500, }}
                            margin={'auto'}
                            textAlign='center'
                        >
                            {hitting}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addHitting}>+</Button>
                    </Grid>

                </Grid>
                <Grid item xs={9}>
                <Button
                        onClick={handleClickSwings}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}>Swing Operation: {operation.map((Swing) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Swing} variant='P1'>{Swing}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_sw}
                        open={openSwings}
                        anchorEl={anchorEl2}
                        onClose={handleClose2}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {Swings.map((Swing) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={operation} onChange={handleOperation}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Swing} value={Swing}>
                                {Swing}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractSwingOperation}>-</Button>
                        <Typography
                            justifyContent='center'
                            variant='h4'
                            style={{
                                background: "-webkit-linear-gradient(45deg, #f2cd00 30%, #ffffff 90%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                            sx={{ letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight: 500, }}
                            margin={'auto'}
                            textAlign='center'
                        >
                            {swingOperation}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addSwingOperation}>+</Button>
                    </Grid>

                </Grid>
                <Grid item xs={9}>
                <Button
                        onClick={handleClickPower}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}>Power: {powers.map((Power) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Power} variant='P1'>{Power}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_p}
                        open={openPower}
                        anchorEl={anchorEl3}
                        onClose={handleClose3}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {Powers.map((Power) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={powers} onChange={handlePower}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Power} value={Power}>
                                {Power}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractPower}>-</Button>
                        <Typography
                            justifyContent='center'
                            variant='h4'
                            style={{
                                background: "-webkit-linear-gradient(45deg, #f2cd00 30%, #ffffff 90%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                            sx={{ letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight: 500, }}
                            margin={'auto'}
                            textAlign='center'
                        >
                            {power}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addPower}>+</Button>
                    </Grid>

                </Grid>
                <Grid item xs={9}>
                <Button
                        onClick={handleClickPath}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}> Swing Path: {path.map((Path) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Path} variant='P1'>{Path}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_ph}
                        open={openPath}
                        anchorEl={anchorEl5}
                        onClose={handleClose5}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {SwingPath.map((Path) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={path} onChange={handlePath}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Path} value={Path}>
                                {Path}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractSwingPath}>-</Button>
                        <Typography
                            justifyContent='center'
                            variant='h4'
                            style={{
                                background: "-webkit-linear-gradient(45deg, #f2cd00 30%, #ffffff 90%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                            sx={{ letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight: 500, }}
                            margin={'auto'}
                            textAlign='center'
                        >
                            {swingPath}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addSwingPath}>+</Button>
                    </Grid>

                </Grid>
                <Grid item xs={9}>
                <Button
                        onClick={handleClickBarrel}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}> Barrel/Contact: {barrel.map((Barrel) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Barrel} variant='P1'>{Barrel}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_b}
                        open={openBarrel}
                        anchorEl={anchorEl4}
                        onClose={handleClose4}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {Barrels.map((Barrel) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={barrel} onChange={handleBarrel}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Barrel} value={Barrel}>
                                {Barrel}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px',  color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black', }} onClick={subtractBarrelContact}>-</Button>
                        <Typography
                            justifyContent='center'
                            variant='h4'
                            style={{
                                background: "-webkit-linear-gradient(45deg, #f2cd00 30%, #ffffff 90%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                            sx={{ letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight: 500, }}
                            margin={'auto'}
                            textAlign='center'
                        >
                            {barrelContact}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addBarrelContact}>+</Button>
                    </Grid>

                </Grid>
                </Grid>
            </Box>
            </Grid>
            </Grid>

            <Grid item xs={6}>
                    <Typography
                        variant='h5'

                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300,
                            marginLeft: '.5rem'
                        }}
                    >
                        Additional Notes:
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '100%', backgroundColor: 'white', fontWeight: 300 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField 
                            fullWidth
                            id="standard-multiline-flexible"
                            multiline
                            minRows={6}
                            variant="filled"
                            defaultValue={'notes'}
                            value={notes} onChange={(event) => setNotes(event.currentTarget.value)}
                            sx={{ borderRadius: '4px'}}
                        />
                    </Box>

                </Grid>

        </Container>

    )
}

export default HittingData;