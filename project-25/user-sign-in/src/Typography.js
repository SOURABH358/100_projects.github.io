import React from "react";
import { Grid, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
function TypographyExample() {
    const theme = createTheme()
    return
    <ThemeProvider theme = {theme}>
        <Grid container>
            <Avatar sx={{ bgcolor: secondary}}>
                <LockOutlinedIcon />
            </Avatar>
        </Grid>
    </ThemeProvider>
}
export default TypographyExample