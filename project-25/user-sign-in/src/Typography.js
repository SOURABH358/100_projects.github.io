import React from "react";
import { Grid, Paper, Typography, Box, TextField, Checkbox, FormControlLabel, Button, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CssBaseline from "@mui/material/CssBaseline";
import { Avatar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme()
function TypographyExample() {
    return <ThemeProvider theme={theme}>
        <Grid container component='main'
            sx={{
                minHeight: '100vh',
            }}>
            <CssBaseline />
            <Grid item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    background: 'url(https://source.unsplash.com/random)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}>

            </Grid>
            <Grid item component={Paper} xs={12} sm={8} md={5}>
                <Box
                    sx={{
                        mt: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                    <Avatar sx={{ bgcolor: 'secondary.main', m: 1 }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component={"h1"} variant={"h5"}>Sign in</Typography>
                </Box>
                <Box item component='form' sx={{ mt: 1, mx: 4, }}>
                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        autoComplete="email"
                        autoFocus
                        id="email"
                        label="Email"
                        variant="outlined"
                        sx={{

                        }}>

                    </TextField>
                    <TextField
                        required
                        fullWidth
                        margin="normal"
                        autoComplete="current-password"
                        autoFocus
                        id="password"
                        label="Password"
                        variant="outlined"
                        sx={{

                        }}>

                    </TextField>
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />}
                        label="Remember me" />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 4,
                            mb: 2
                        }}
                    >
                        Sign in
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                            {"Forgot Password?"}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                            {"Don't have an account? Sign up"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Box align="center"sx={{mt:4}}>
                        <Typography variant="body2" color='text.secondary'>{'Copyright © '}
                        <Link color= "inherit"href = "#">Your Website</Link>{'  '}
                        {new Date().getFullYear()}{'.'}
                        </Typography>
                    </Box>
                </Box>


            </Grid>
        </Grid>
    </ThemeProvider>
}
export default TypographyExample