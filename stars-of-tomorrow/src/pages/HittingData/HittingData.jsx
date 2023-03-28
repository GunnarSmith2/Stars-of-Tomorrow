import { Typography, Box, Stack, Button, Grid, Container, TextField } from '@mui/material';
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
            <Navbar />
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


            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Typography
                        variant='h5'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300
                        }}
                    >
                        {exAthlete.name}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography
                        variant='h5'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300
                        }}
                    >
                        Number: {exAthlete.number}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography
                        variant='h5'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300
                        }}
                    >
                        Position: {exAthlete.position}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography
                        variant='h5'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300
                        }}
                    >
                        Class: {exAthlete.class}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography
                        variant='h5'
                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300
                        }}
                    >
                        Bats: {exAthlete.bats}
                    </Typography>
                </Grid>
            </Grid>

            <Box display='flex' aligndivs='center' justifyContent='center'>
                <Grid container spacing={2} justifyContent={'center'} marginBottom={4} >
                    <Grid item xs={9}>
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
                            textAlign='center'
                        >
                            Scouting Evaluation
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
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
                            textAlign='center'
                        >
                            Grade
                        </Typography>
                    </Grid>
                </Grid>
            </Box>




            <Grid container spacing={2} justifyContent={'center'}>
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
                        <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractHitting}>-</Button>
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
                        <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addHitting}>+</Button>
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
                        <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractSwingOperation}>-</Button>
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
                        <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addSwingOperation}>+</Button>
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
                        <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractPower}>-</Button>
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
                        <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addPower}>+</Button>
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
                        <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractSwingPath}>-</Button>
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
                        <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addSwingPath}>+</Button>
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
                        <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={subtractBarrelContact}>-</Button>
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
                        <Button sx={{ color: 'yellow', fontFamily: 'proxima-noba, Verdana, Arial, sans-serif', fontWeight: 900, background: 'black' }} onClick={addBarrelContact}>+</Button>
                    </Grid>

                </Grid>
                <Grid item xs={6}>
                    <Typography
                        variant='h5'

                        sx={{
                            color: 'white',
                            fontFamily: 'Oswald, sans-serif',
                            letterSpacing: '.5px',
                            fontWeight: 300
                        }}
                    >
                        Additional Notes:
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '50ch', backgroundColor: 'white', fontWeight: 300 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField fullWidth
                            id="standard-multiline-flexible"
                            multiline
                            minRows={4}
                            variant="filled"
                            defaultValue={'notes'}
                            value={notes} onChange={(event) => setNotes(event.currentTarget.value)}



                        />
                    </Box>

                </Grid>
            </Grid>


        </Container>

    )
}

export default HittingData