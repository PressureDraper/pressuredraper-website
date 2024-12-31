import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#655143', //700
            light: '#f5f4f1', //50
            dark: '#2b201d', //950
            "100": '#e7e4da',
            "200": '#d1c9b7',
            "300": '#b6a98e',
            "400": '#a18e6e',
            "500": '#927d60',
            "600": '#7d6751',
            "800": '#57453c',
            "900": '#4c3d37'
        },
        secondary: {
            main: '#7155a0', //700
            light: '#f9f8fc', //50
            dark: '#322249', //950
            "100": '#f2eff8',
            "200": '#e7e1f3',
            "300": '#d4c9e9',
            "400": '#b8a6da',
            "500": '#9c83c9',
            "600": '#8367b6',
            "800": '#5e4881',
            "900": '#4d3b68'
        }
    },
    shape: {
        borderRadius: 8
    }
});