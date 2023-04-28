import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
    
    typography: {
        fontFamily: 'Source Sans Pro',
        fontSize: 14,
        body1: {
            fontWeight: 400,
            color: 'rgba(31, 34, 41, 1)'
        },
        h1: {
            fontSize: 16,
            fontWeight: 700,
            color: '#444'
        }
    },

    palette: {
        primary: {
            main: 'rgba(63, 203, 255, 1)'
        },
    }
});