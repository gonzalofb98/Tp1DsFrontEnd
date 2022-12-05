import axios from 'axios';
import React, { Fragment, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import loginImage from '../../Resources/Images/loginImage.jpg';
import SignUp from '../register/signUp';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (value) => {
        setEmail(value);
    }
    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            Email: email,
            Password: password
        };
        const url2 = "https://localhost:7117/api/ControladorAutenticacion/GetUser?email=" + data.Email;
        const url = 'https://localhost:7117/api/ControladorAutenticacion/Login';

        axios.post(url, data).then((result) => {
            console.log("Inicio sesion");
            axios.get(url2).then((res) => {
                switch ((res.data).rol) {
                    case 1: console.log("Vista Supervisor de Linea");
                        break;
                    case 2: console.log("Vista Supervisor de Calidad");
                        break;
                    case 3: console.log("Vista Administrador");
                        break;
                    default:
                        console.log("Vista Generica con todo deshabilitado");
                }
            }).catch((error) => {
                console.log(error);
            })
        }).catch((error) => {
            console.log("Fallo");
            alert(error);
        })

    }

    const theme = createTheme();

    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: `url(${loginImage})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={(e) => handleEmailChange(e.target.value)}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e) => handlePasswordChange(e.target.value)}
                                />
                                {/* <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                /> */}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        {/* <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link> */}
                                    </Grid>
                                    <Grid item>
                                        <SignUp />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Fragment>
    )
}

export default Login;