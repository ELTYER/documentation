import {createTheme} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: ['"Lexend Deca"', '"Lexend Giga"'].join(','),
        caption: {
            fontSize: 15,
            fontWeight: 100,
        },
        body2: {
            color: '#757575'
        }
    },
    palette: {
        primary: {
            main: '#4d52d6',
            light: '#7074DE',
            dark: '#353995',
            contrastText: "#fff"
        },
        secondary: {
            main: "#ff6600",
            light: "#ff983f",
            dark: "#c43300",
            contrastText: "#000"
        },
        white: '#FFFFFF',
        background: {
            default: '#f7fafc',
            dark: '#a3a3a5',
            activeButton: "#fff0ff",
            white:"#FFFFFF"
        },
        hover: {
            default: 'rgba(0, 0, 0, 0.07)'
        },
        backgroundSecondary: {
            main: "#eeeeee"
        },
        backgroundWhite: {
            main: '#FFFFFF'
        },
        borderColor: '#b2c1d4',
        error: {
            main: "#f44336",
            light: "#e57373",
            dark: "#d32f2f"
        },
        warning: {
            main: "#ff9800",
            light: "#ffb74d",
            dark: "#f57c00"
        },
        success: {
            main: "#4CAF50",
            light: "#81c784",
            dark: "#388e3c"
        },
        text: {
            primary: "#666666",
            secondary: "#949494",
            disabled: "#6c757d",
            bold: "#474747"
        },
        textPrimary: "#666666", // to be deprecated
        textSecondary: "#949494", // to be deprecated
    },
    drawerWidth: "300px"
});

export default theme
