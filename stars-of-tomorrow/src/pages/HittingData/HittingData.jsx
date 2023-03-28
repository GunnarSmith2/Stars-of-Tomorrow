import { Typography, Box, Stack, Button, Grid, Container, TextField, Paper } from '@mui/material';
import Navbar from '../../components/NavBar/Navbar'

import { useState } from 'react';


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
        position: 'CF',
        bats: 'Right'
    };


    return (
        <Container>
            <Box display='flex' aligndivs='center' justifyContent='center'>
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
                    marginBottom={4}
                    textAlign='center'
                >
                    Hitting
                </Typography>
            </Box>

            <Box display='flex' justifyContent='center'>
            <Paper sx={{ width: '500px', px: '10px', py: '10px' }} style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}}>
            <Grid container spacing={2} display='flex' sx={{marginTop: '.2rem'}}>
                <Grid item xs={6}>
                    <Typography
                        display='flex'
                        justifyContent='flex-end'
                        variant='h5'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300,
                            marginRight: '1.5rem'
                        }}
                    >
                        Player: {exAthlete.name}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        variant='h5'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300,
                            marginLeft: '2rem'
                        }}
                    >
                        Camp Number: {exAthlete.number}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        display='flex'
                        justifyContent='center'
                        variant='h5'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300,
                            marginRight: '2rem'
                        }}
                    >
                        Position: {exAthlete.position}
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        display='flex'
                        justifyContent='center'
                        variant='h5'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300,
                            marginRight: '4.5rem'
                        }}
                    >
                        Class: {exAthlete.class}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography
                        display='flex'
                        justifyContent='center'
                        variant='h5'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300,
                            marginLeft: '2.7rem',
                            marginBottom: '1rem'
                        }}
                    >
                        Bats: {exAthlete.bats}
                    </Typography>
                </Grid>
            </Grid>
            </Paper>
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
                <Paper style={{ background: "-webkit-linear-gradient(45deg, #000 30%, #60696b 90%)",}}>
                <Grid container spacing={2} justifyContent={'center'} paddingX='1rem' paddingY='1rem' >
                    <Grid item xs={9}>
                    <Typography
                        variant='h5'

                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300
                        }}
                    >
                        Hitting:
                    </Typography>
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
                    <Typography
                        variant='h5'

                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300
                        }}
                    >
                        Swing Operation:
                    </Typography>
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
                    <Typography
                        variant='h5'

                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300
                        }}
                    >
                        Power:
                    </Typography>
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
                    <Typography
                        variant='h5'

                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300
                        }}
                    >
                        Swing Path:
                    </Typography>
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
                    <Typography
                        variant='h5'

                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300
                        }}
                    >
                        Barrel Contact:
                    </Typography>
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
                </Paper>
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

export default HittingData