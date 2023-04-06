import { Typography, Box, Button, Grid, Container, TextField, Popover, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';



const FieldingData = () => {
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
    const [footworkGrade, setFootworkGrade] = useState(0);
    const [armActionGrade, setArmActionGrade] = useState(0);
    const [gloveGrade, setGloveGrade] = useState(0);
    const [armStrengthGrade, setArmStrengthGrade] = useState(0);
    const [transitionGrade, setTransitionGrade] = useState(0);
    const [accuracyGrade, setAccuracyGrade] = useState(0);
    const [notes, setNotes] = useState(''); //Additional Notes

    /////////////////////selectors: Footwork
    const Footwork= ['Below', 'Average', 'Advanced', 'Elite'];
    const [footwork, setFootwork] = useState([]); 
    const [anchorElFootwork, setAnchorElFootwork] = useState(null);

    const handleClickFootwork = (event) => {
        setAnchorElFootwork(event.currentTarget);  
    };

    const handleCloseFootwork = () => {
        setAnchorElFootwork(null);
    };

    const handleChangeFootwork = (event, nextFootwork) => {
        setFootwork(nextFootwork);
    };

    const openFootwork = Boolean(anchorElFootwork);
    const id_f = openFootwork ? 'selectable-options-popover' : undefined;

/////////////////////////////////////// Arm Action
    const ArmAction= ['Short', 'Quick', 'Long', 'Slow'];
    const [armAction, setArmAction] = useState([]); 
    const [anchorEl2, setAnchorEl2] = useState(null);

    const handleClickArmAction = (event) => {
        setAnchorEl2(event.currentTarget);  
    };

    const handleCloseAction = () => {
            setAnchorEl2(null);
    };

    const handleAction = (event, nextAction) => {
        setArmAction(nextAction);
    };

    const openAction = Boolean(anchorEl2);
    const id_aa = openAction ? 'selectable-options-popover' : undefined;

    ///////////////////////////// Power
    const Gloves= ['Soft', 'Sure', 'Stiff', 'Inconsistent'];
    const [glove, setGlove] = useState([]); 
    const [anchorElGlove, setAnchorElGlove] = useState(null);

    const handleClickGlove = (event) => {
        setAnchorElGlove(event.currentTarget);  
    };

    const handleCloseGlove = () => {
            setAnchorElGlove(null);
    };

    const handleGlove = (event, nextGlove) => {
        setGlove(nextGlove);
    };

    const openGlove = Boolean(anchorElGlove);
    const id_g = openGlove ? 'selectable-options-popover' : undefined;

    ////////////////////////////////////////////////// Swing Path
    const ArmStrength= ['Below', 'Average', 'Advanced', 'Elite'];
    const [armStrength, setArmStrength] = useState([]);
    const [anchorElStrength, setAnchorElStrength] = useState(null);

    const handleClickStrength = (event) => {
        setAnchorElStrength(event.currentTarget);  
    };

    const handleCloseStrength = () => {
            setAnchorElStrength(null);
    };

    const handleStrength = (event, nextStrength) => {
        setArmStrength(nextStrength);
    };

    const openStrength = Boolean(anchorElStrength);
    const id_st = openStrength ? 'selectable-options-popover' : undefined;

    ///////////////////////////////////////////// Barrel/Contact
    const Transitions = ['Quick', 'Certain', 'Slow', 'Challenged'];
    const [transition, setTransition] = useState([]); 
    const [anchorElTransition, setAnchorElTransition] = useState(null);

    const handleClickTransition = (event) => {
        setAnchorElTransition(event.currentTarget);  
    };

    const handleCloseTransition = () => {
            setAnchorElTransition(null);
    };

    const handleTransition = (event, nextTransition) => {
        setTransition(nextTransition);
    };

    const openTransition = Boolean(anchorElTransition);
    const id_ts = openTransition ? 'selectable-options-popover' : undefined;

    ///////////////////////////////////////////// Barrel/Contact
    const Accuracy = ['Below', 'Average', 'Advanced', 'Elite'];
    const [accuracy, setAccuracy] = useState([]); 
    const [anchorElAccuracy, setAnchorElAccuracy] = useState(null);

    const handleClickAccuracy = (event) => {
        setAnchorElAccuracy(event.currentTarget);  
    };

    const handleCloseAccuracy = () => {
            setAnchorElAccuracy(null);
    };

    const handleAccuracy = (event, nextAccuracy) => {
        setAccuracy(nextAccuracy);
    };

    const openAccuracy = Boolean(anchorElAccuracy);
    const id_ac = openAccuracy ? 'selectable-options-popover' : undefined;

//////////////////////////////////////////////////////////
    const addFootwork = () => {

        if (footworkGrade === 4) {
            return
        } else {
            setFootworkGrade(count => count + 1);
        }

    };

    const subtractFootwork = () => {

        if (footworkGrade === 0) {
            return
        } else {
            setFootworkGrade(count => count - 1);
        }

    };
///////////
    const addArmAction = () => {

        if (armActionGrade === 4) {
            return
        } else {
            setArmActionGrade(count => count + 1);
        }

    };

    const subtractArmAction = () => {

        if (armActionGrade === 0) {
            return
        } else {
            setArmActionGrade(count => count - 1);
        }

    };
////////////
    const addGlove = () => {

        if (gloveGrade === 4) {
            return
        } else {
            setGloveGrade(count => count + 1);
        }

    };

    const subtractGlove = () => {

        if (gloveGrade === 0) {
            return
        } else {
            setGloveGrade(count => count - 1);
        }

    };
////////////
    const addArmStrength = () => {

        if (armStrengthGrade === 4) {
            return
        } else {
            setArmStrengthGrade(count => count + 1);
        }

    };

    const subtractArmStrength = () => {

        if (armStrengthGrade === 0) {
            return
        } else {
            setArmStrengthGrade(count => count - 1);
        }

    };
////////////
    const addTransition = () => {

        if (transitionGrade === 4) {
            return
        } else {
            setTransitionGrade(count => count + 1);
        }

    };

    const subtractTransition = () => {

        if (transitionGrade === 0) {
            return
        } else {
            setTransitionGrade(count => count - 1);
        }

    };
/////////////
const addAccuracy = () => {

    if (accuracyGrade === 4) {
        return
    } else {
        setAccuracyGrade(count => count + 1);
    }

};

const subtractAccuracy = () => {

    if (accuracyGrade === 0) {
        return
    } else {
        setAccuracyGrade(count => count - 1);
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
                <Grid container spacing={2} justifyContent={'center'} paddingX='1rem' paddingY='1rem' >
                    <Grid item xs={9}>
                    <Button
                        onClick={handleClickFootwork}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}>Footwork: {footwork.map((Foot) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Foot} variant='P1'>{Foot}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_f}
                        open={openFootwork}
                        anchorEl={anchorElFootwork}
                        onClose={handleCloseFootwork}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {Footwork.map((Foot) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={footwork} onChange={handleChangeFootwork}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Foot} value={Foot}>
                                {Foot}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                    </Grid>
                    <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractFootwork}>-</Button>
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
                            {footworkGrade}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addFootwork}>+</Button>
                    </Grid>

                </Grid>
                <Grid item xs={9}>
                <Button
                        onClick={handleClickArmAction}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}>Arm Action: {armAction.map((Arm) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Arm} variant='P1'>{Arm}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_aa}
                        open={openAction}
                        anchorEl={anchorEl2}
                        onClose={handleCloseAction}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {ArmAction.map((Arm) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={armAction} onChange={handleAction}>
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
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractArmAction}>-</Button>
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
                            {armActionGrade}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addArmAction}>+</Button>
                    </Grid>

                </Grid>
                <Grid item xs={9}>
                <Button
                        onClick={handleClickGlove}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}>Glove: {glove.map((Glove) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Glove} variant='P1'>{Glove}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_g}
                        open={openGlove}
                        anchorEl={anchorElGlove}
                        onClose={handleCloseGlove}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {Gloves.map((Glove) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={glove} onChange={handleGlove}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Glove} value={Glove}>
                                {Glove}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractGlove}>-</Button>
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
                            {gloveGrade}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addGlove}>+</Button>
                    </Grid>

                </Grid>
                <Grid item xs={9}>
                <Button
                        onClick={handleClickStrength}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}> Swing Path: {armStrength.map((Strength) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Strength} variant='P1'>{Strength}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_st}
                        open={openStrength}
                        anchorEl={anchorElStrength}
                        onClose={handleCloseStrength}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {ArmStrength.map((Strength) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={armStrength} onChange={handleStrength}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Strength} value={Strength}>
                                {Strength}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractArmStrength}>-</Button>
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
                            {armStrengthGrade}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addArmStrength}>+</Button>
                    </Grid>

                </Grid>
                <Grid item xs={9}>
                <Button
                        onClick={handleClickTransition}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}> Transition: {transition.map((Transition) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Transition} variant='P1'>{Transition}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_ts}
                        open={openTransition}
                        anchorEl={anchorElTransition}
                        onClose={handleCloseTransition}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {Transitions.map((Transition) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={transition} onChange={handleTransition}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Transition} value={Transition}>
                                {Transition}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px',  color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black', }} onClick={subtractTransition}>-</Button>
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
                            {transitionGrade}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addTransition}>+</Button>
                    </Grid>
                </Grid>
                <Grid item xs={9}>
                <Button
                        onClick={handleClickAccuracy}
                        size='large'
                        style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}} 
                        sx={{
                            width: '100%',
                            padding: 1
                        }}>
                            <Typography display='flex' alignItems='center' variant='h5' sx={{ color: 'white', letterSpacing: '.5px', fontFamily: 'Oswald, sans-serif', fontWeight:'300'}}> Accuracy: {accuracy.map((Accurate) => (
                               <Box sx={{ border: 1, ml:1, borderRadius: '6px', p:.2 }}><Typography display='flex' alignItems='center' sx={{mx:1, fontSize: '18px'}} key={Accurate} variant='P1'>{Accurate}</Typography></Box>
                            ))}</Typography>
                    </Button>
                    <Popover
                        id={id_ac}
                        open={openAccuracy}
                        anchorEl={anchorElAccuracy}
                        onClose={handleCloseAccuracy}
                        anchorOrigin={{
                            vertical:'bottom',
                            horizontal: 'center'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        {Accuracy.map((Accurate) => (
                            <>
                            <ToggleButtonGroup width='100%' orientation="vertical" value={accuracy} onChange={handleAccuracy}>
                            <ToggleButton sx={{ mx: 1, border: 0}} key={Accurate} value={Accurate}>
                                {Accurate}
                            </ToggleButton>
                            </ToggleButtonGroup>
                            </>
                        ))}
                    </Popover>
                </Grid>
                <Grid item xs={3}>
                    <Grid container justifyContent={'center'}>
                        <Button sx={{ borderRadius: '15px',  color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black', }} onClick={subtractAccuracy}>-</Button>
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
                           {accuracyGrade}
                        </Typography>
                        <Button sx={{ borderRadius: '15px', color: '#f5f6fa', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addAccuracy}>+</Button>
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

export default FieldingData;