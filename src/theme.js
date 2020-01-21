import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const primaryColor = {
  
    light: '#1A94E5',
    main: '#1A94E5',
    dark: '#1A94E5',
    contrastText: '#1A94E5',
 
};

const secondaryColor = {
  light: '#0776C0',
  main: '#0776C0',
  dark: '#0776C0',
  contrastText: '#0776C0',
};

const customTheme = createMuiTheme({
  palette: {
    primary: primaryColor,
    secondary: secondaryColor,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      default: "#FFF"
    },
    text: {
      primary: primaryColor.light,
      secndary: primaryColor.light,
    },
    divider: secondaryColor.light,
  },
 
  typography: {
    // Use the system font instead of the default Roboto font.
    useNextVariants: true,
    title: {
      fontWeight: 700,
      fontFamily: "'Rubik', 'sans-serif'"
    },
    body1: {
      fontWeight: 500,
      fontFamily: "'Rubik', 'sans-serif'"
    },
    fontFamily: [
      "Rubik",
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(','),
  },
  overrides: {
    MuiDivider: {
      root: {
        backgroundColor: '#D1DDE5',
        marginTop: 32,
      },
    },
    MuiSlider: {
      markLabel: {
        color: '#000',
      },
      thumb: {
        width: 11,
        height: 13,
        borderRadius: 3,
      },
      marked: {
        marginBottom: 37,
      },
      mark: {
        display: 'none',
      }
    },
   
    MuiInput: {
      underline: {
        appearance: 'none',
        '&:after': {
          display: 'none',
        }
      }
    }, 

    MuiFormControlLabel: {
      label: {
        userSelect: 'none',
      }
    },
    MuiInputBase: {
      input: {
        color: '#353535',
      }
    },
    MuiInputLabel: {
      formControl: {
        color: '#919FA7',
      }
    },
    MuiChip: {
      root: {
        backgroundColor: '#E4F0F8',
      },
      label: {
        color: '#353535',
        fontSize: 12,
        lineHeight: '143%',
      }
    },
    
  },
});


export default customTheme;