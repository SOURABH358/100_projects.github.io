import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";

const theme = createTheme();

export default function Address(){
    
    return <ThemeProvider theme={theme} 
    
    >
            <Typography variant="h6"
            sx={{
                color: "primary"
            }}>
                Company Name
            </Typography>
    </ThemeProvider>
}