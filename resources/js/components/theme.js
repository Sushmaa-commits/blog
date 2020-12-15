import { createMuiTheme  } from '@material-ui/core/styles';
const ThemeData = {
  palette: {
    primary: {
      main: '#1e2027',
      light: '#242730',
      dark: '#17181c',
      contrastText: '#707070',
    },
    secondary: {
        main: '#00d95f',
        light: '#8f9092',
        contrastText: '#ffffff',
    },
    success: {
        main: '#00df61',
    },
    error: {
      main: '#ff0000',
    },
    // secondary: {
    //   light: 'white',
    // }
  },
  
};

const MuiTheme = createMuiTheme(ThemeData);
export default MuiTheme;




