import { Typography, Box, Button, Grid, Container, TextField, Popover, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';



const PitchingData = () => {
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

    //// Grade 
    const [operationGrade, setOperationGrade] = useState(0);
    const [controlGrade, setControlGrade] = useState(0);
    const [pitchActionGrade, setPitchActionGrade] = useState(0);
    const [movementGrade, setMovementGrade] = useState(0);
    const [spinGrade, setSpinGrade] = useState(0);
    const [velocityGrade, setVelocityGrade] = useState(0);
    const [notes, setNotes] = useState(''); //Additional Notes

    /////////////////////selectors: Footwork
    const PitchOperation= ['Long', 'Slow', 'Quick', 'Short'];
    const [pitchOperation, setPitchOperation] = useState([]); 
    const [anchorElPitchOperation, setAnchorElPitchOperation] = useState(null);

    const handleClickPitch = (event) => {
        setAnchorElPitchOperation(event.currentTarget);  
    };

    const handleClosePitch = () => {
        setAnchorElPitchOperation(null);
    };

    const handleChangePitch = (event, nextPitch) => {
        setPitchOperation(nextPitch);
    };

    const openPitch = Boolean(anchorElPitchOperation);
    const id_pit = openPitch ? 'selectable-options-popover' : undefined;

/////////////////////////////////////// Arm Action
    const Controls= ['Below', 'Average', 'Advanced', 'Elite'];
    const [commandControl, setCommandControl] = useState([]); 
    const [anchorElControl, setAnchorElControl] = useState(null);

    const handleClickControl = (event) => {
        setAnchorElControl(event.currentTarget);  
    };

    const handleCloseControl = () => {
        setAnchorElControl(null);
    };

    const handleControl = (event, nextControl) => {
        setCommandControl(nextControl);
    };

    const openControl = Boolean(anchorElControl);
    const id_cc = openControl ? 'selectable-options-popover' : undefined;

    ///////////////////////////// Power
    const PitchArmAction= ['Long', 'Short'];
    const [pitchAction, setPitchAction] = useState([]); 
    const [anchorElPitchAction, setAnchorElPitchAction] = useState(null);

    const handleClickPitchAction = (event) => {
        setAnchorElPitchAction(event.currentTarget);  
    };

    const handleClosePitchAction = () => {
        setAnchorElPitchAction(null);
    };

    const handlePitchAction = (event, nextPitchAction) => {
        setPitchAction(nextPitchAction);
    };

    const openPitchAction = Boolean(anchorElPitchAction);
    const id_pa = openPitchAction ? 'selectable-options-popover' : undefined;

    ////////////////////////////////////////////////// Swing Path
    const Movement= ['Below', 'Average', 'Advanced', 'Elite'];
    const [movement, setMovement] = useState([]);
    const [anchorElMovement, setAnchorElMovement] = useState(null);

    const handleClickMovement = (event) => {
        setAnchorElMovement(event.currentTarget);  
    };

    const handleCloseMovement = () => {
        setAnchorElMovement(null);
    };

    const handleMovement = (event, nextMovement) => {
        setMovement(nextMovement);
    };

    const openMovement = Boolean(anchorElMovement);
    const id_mo = openMovement ? 'selectable-options-popover' : undefined;

    ///////////////////////////////////////////// Barrel/Contact
    const Spins = ['Below', 'Average', 'Advanced', 'Elite'];
    const [spin, setSpin] = useState([]); 
    const [anchorElSpin, setAnchorElSpin] = useState(null);

    const handleClickSpin = (event) => {
        setAnchorElSpin(event.currentTarget);  
    };

    const handleCloseSpin = () => {
        setAnchorElSpin(null);
    };

    const handleSpin = (event, nextSpin) => {
        setSpin(nextSpin);
    };

    const openSpin = Boolean(anchorElSpin);
    const id_sp = openSpin ? 'selectable-options-popover' : undefined;

    ///////////////////////////////////////////// Barrel/Contact
    const Velocity = ['Below', 'Average', 'Advanced', 'Elite'];
    const [velocity, setVelocity] = useState([]); 
    const [anchorElVelocity, setAnchorElVelocity] = useState(null);

    const handleClickVelocity = (event) => {
        setAnchorElVelocity(event.currentTarget);  
    };

    const handleCloseVelocity = () => {
        setAnchorElVelocity(null);
    };

    const handleVelocity = (event, nextVelocity) => {
        setVelocity(nextVelocity);
    };

    const openVelocity = Boolean(anchorElVelocity);
    const id_vy = openVelocity ? 'selectable-options-popover' : undefined;

    ///////////////////////////////////////////// Barrel/Contact
    const PitchTypes = ['Fastball', 'Riseball', 'Dropball', 'Curveball', 'Screwball', 'Change-up'];
    const [types, setTypes] = useState([]); 
    const [anchorElTypes, setAnchorElTypes] = useState(null);

    const handleClickTypes = (event) => {
        setAnchorElTypes(event.currentTarget);  
    };

    const handleCloseTypes = () => {
        setAnchorElTypes(null);
    };

    const handleTypes = (event, nextTypes) => {
        setTypes(nextTypes);
    };

    const openTypes = Boolean(anchorElTypes);
    const id_ty = openTypes ? 'selectable-options-popover' : undefined;

    ///////////////////////////////////////////// Barrel/Contact
    const Styles = ['Power', 'Finesse'];
    const [style, setStyle] = useState([]); 
    const [anchorElStyle, setAnchorElStyle] = useState(null);

    const handleClickStyle = (event) => {
        setAnchorElStyle(event.currentTarget);  
    };

    const handleCloseStyle = () => {
        setAnchorElStyle(null);
    };

    const handleStyle = (event, nextStyle) => {
        setStyle(nextStyle);
    };

    const openStyle = Boolean(anchorElStyle);
    const id_sy = openStyle ? 'selectable-options-popover' : undefined;

    ///////////////////////////////////////////// Barrel/Contact
    const Repeats = ['Yes', 'No'];
    const [repeat, setRepeat] = useState([]); 
    const [anchorElRepeat, setAnchorElRepeat] = useState(null);

    const handleClickRepeat = (event) => {
        setAnchorElRepeat(event.currentTarget);  
    };

    const handleCloseRepeat = () => {
        setAnchorElRepeat(null);
    };

    const handleRepeat = (event, nextRepeat) => {
        setStyle(nextRepeat);
    };

    const openRepeat = Boolean(anchorElRepeat);
    const id_rp = openRepeat ? 'selectable-options-popover' : undefined;

    ///////////////////////////////////////////// Barrel/Contact
    const Presence = ['Yes', 'No'];
    const [presence, setPresence] = useState([]); 
    const [anchorElPresence, setAnchorElPresence] = useState(null);

    const handleClickPresence = (event) => {
        setAnchorElPresence(event.currentTarget);  
    };

    const handleClosePresence = () => {
        setAnchorElPresence(null);
    };

    const handlePresence = (event, nextPresence) => {
        setPresence(nextPresence);
    };

    const openPresence = Boolean(anchorElPresence);
    const id_pr = openPresence ? 'selectable-options-popover' : undefined;

//////////////////////////////////////////////////////////
    const addPitch = () => {

        if (operationGrade === 4) {
            return
        } else {
            setOperationGrade(count => count + 1);
        }

    };

    const subtractPitch = () => {

        if (operationGrade === 0) {
            return
        } else {
            setOperationGrade(count => count - 1);
        }

    };
///////////
    const addControl = () => {

        if (controlGrade === 4) {
            return
        } else {
            setControlGrade(count => count + 1);
        }

    };

    const subtractControl = () => {

        if (controlGrade === 0) {
            return
        } else {
            setControlGrade(count => count - 1);
        }

    };
////////////
    const addPitchAction = () => {

        if (pitchActionGrade === 4) {
            return
        } else {
            setPitchActionGrade(count => count + 1);
        }

    };

    const subtractPitchAction = () => {

        if (pitchActionGrade === 0) {
            return
        } else {
            setPitchActionGrade(count => count - 1);
        }

    };
////////////
    const addMovement = () => {

        if (movementGrade === 4) {
            return
        } else {
            setMovementGrade(count => count + 1);
        }

    };

    const subtractMovement = () => {

        if (movementGrade === 0) {
            return
        } else {
            setMovementGrade(count => count - 1);
        }

    };
////////////
    const addSpin = () => {

        if (spinGrade === 4) {
            return
        } else {
            setSpinGrade(count => count + 1);
        }

    };

    const subtractSpin = () => {

        if (spinGrade === 0) {
            return
        } else {
            setSpinGrade(count => count - 1);
        }

    };
/////////////
const addVelocity = () => {

    if (velocityGrade === 4) {
        return
    } else {
        setVelocityGrade(count => count + 1);
    }

};

const subtractVelocity= () => {

    if (velocityGrade === 0) {
        return
    } else {
        setVelocityGrade(count => count - 1);
    }

};
/////////////

    //Fake Data
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
                    Fielding
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

            <Box display='flex' alignItems='center' justifyContent='space-between' sx={{ marginTop: '2rem'}}>
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
                sx={{ marginBottom: '.5rem', marginRight: '2.7rem', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight: 500, }}
                    >
                    Grade
            </Typography>
            </Box>
            <Grid container>
            <Grid item xs={12}>
            <Box display='flex' aligndivs='center' marginBottom='1.5rem'>
                <Grid container spacing={2} paddingX='1rem' paddingY='1rem' >
                <Grid item xs={9}>
                    <Button
                        onClick={handleClickTypes}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}>Pitch Types: {types.map((Types) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Types} variant='P1'>{Types}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_ty}
                        open={openTypes}
                        anchorEl={anchorElTypes}
                        onClose={handleCloseTypes}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {PitchTypes.map((Types) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={types} onChange={handleTypes}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Types} value={Types}>
                                {Types}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                    </Grid>
                    <Grid item xs={9}>
                    <Button
                        onClick={handleClickStyle}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}>Pitch Style: {style.map((Style) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Style} variant='P1'>{Style}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_sy}
                        open={openStyle}
                        anchorEl={anchorElStyle}
                        onClose={handleCloseStyle}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {Styles.map((Style) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={style} onChange={handleStyle}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Style} value={Style}>
                                {Style}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                    </Grid>
                    <Grid item xs={9}>
                    <Button
                        onClick={handleClickPresence}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}>Repeat: {presence.map((Present) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Present} variant='P1'>{Present}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_pr}
                        open={openPresence}
                        anchorEl={anchorElPresence}
                        onClose={handleClosePresence}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {Presence.map((Present) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={presence} onChange={handlePresence}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Present} value={Present}>
                                {Present}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                    </Grid>
                    <Grid item xs={9}>
                    <Button
                        onClick={handleClickRepeat}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}>Repeat: {repeat.map((Repeat) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Repeat} variant='P1'>{Repeat}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_rp}
                        open={openRepeat}
                        anchorEl={anchorElRepeat}
                        onClose={handleCloseRepeat}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {Repeats.map((Repeat) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={repeat} onChange={handleRepeat}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Repeat} value={Repeat}>
                                {Repeat}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                    </Grid>
                    <Grid item xs={9}>
                    <Button
                        onClick={handleClickPitch}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}>Pitch Operation: {pitchOperation.map((Pitch) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Pitch} variant='P1'>{Pitch}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_pit}
                        open={openPitch}
                        anchorEl={anchorElPitchOperation}
                        onClose={handleClosePitch}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {PitchOperation.map((Pitch) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={pitchOperation} onChange={handleChangePitch}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Pitch} value={Pitch}>
                                {Pitch}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                    </Grid>
                    <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractPitch}>-</Button>
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
                            {operationGrade}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addPitch}>+</Button>
                    </Grid>

                </Grid>
                <Grid item xs={9}>
                <Button
                        onClick={handleClickControl}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}>Command-Control: {commandControl.map((Control) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Control} variant='P1'>{Control}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_cc}
                        open={openControl}
                        anchorEl={anchorElControl}
                        onClose={handleCloseControl}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {Controls.map((Control) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={commandControl} onChange={handleControl}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Control} value={Control}>
                                {Control}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractControl}>-</Button>
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
                            {controlGrade}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addControl}>+</Button>
                    </Grid>

                </Grid>
                <Grid item xs={9}>
                <Button
                        onClick={handleClickPitchAction}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}>Arm Action: {pitchAction.map((Arm) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Arm} variant='P1'>{Arm}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_pa}
                        open={openPitchAction}
                        anchorEl={anchorElPitchAction}
                        onClose={handleClosePitchAction}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {PitchArmAction.map((Arm) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={pitchAction} onChange={handlePitchAction}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Arm} value={Arm}>
                                {Arm}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractPitchAction}>-</Button>
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
                            {pitchActionGrade}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addPitchAction}>+</Button>
                    </Grid>

                </Grid>
                <Grid item xs={9}>
                <Button
                        onClick={handleClickMovement}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}> Movement: {movement.map((Move) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Move} variant='P1'>{Move}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_mo}
                        open={openMovement}
                        anchorEl={anchorElMovement}
                        onClose={handleCloseMovement}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {Movement.map((Move) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={movement} onChange={handleMovement}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Move} value={Move}>
                                {Move}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractMovement}>-</Button>
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
                            {movementGrade}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addMovement}>+</Button>
                    </Grid>

                </Grid>
                <Grid item xs={9}>
                <Button
                        onClick={handleClickSpin}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}> Spin: {spin.map((Spin) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Spin} variant='P1'>{Spin}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_sp}
                        open={openSpin}
                        anchorEl={anchorElSpin}
                        onClose={handleCloseSpin}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {Spins.map((Spin) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={spin} onChange={handleSpin}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Spin} value={Spin}>
                                {Spin}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px',  color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black', }} onClick={subtractSpin}>-</Button>
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
                            {spinGrade}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addSpin}>+</Button>
                    </Grid>
                </Grid>
                <Grid item xs={9}>
                <Button
                        onClick={handleClickVelocity}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}> Velocity: {velocity.map((Velo) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Velo} variant='P1'>{Velo}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_vy}
                        open={openVelocity}
                        anchorEl={anchorElVelocity}
                        onClose={handleCloseVelocity}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {Velocity.map((Velo) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={velocity} onChange={handleVelocity}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Velo} value={Velo}>
                                {Velo}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px',  color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black', }} onClick={subtractVelocity}>-</Button>
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
                           {velocityGrade}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addVelocity}>+</Button>
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
                <Box display='flex' justifyContent='center'>
                    <Button variant='contained' sx={{my: 1, backgroundColor:'yellow', color: 'black', fontFamily: 'Oswald, sans-serif',}}>Save</Button>
                </Box>
        </Container>

    )
}

export default PitchingData;