import { createTheme, responsiveFontSizes } from '@mui/material';
import { green } from '@mui/material/colors';

let theme = createTheme({
  palette: {
    primary: {
      main: "#04cfd7",
    },
    secondary: {
      main: green[500],
    },
  },
  typography:{
    fontFamily:[
        "Helevetica Neue"
    ].join(","),
  }
});

theme = responsiveFontSizes(theme);

export default theme;
