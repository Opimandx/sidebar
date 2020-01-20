import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import customTheme from '../../src/theme'


const useStyles = makeStyles({
  root: {
    maxWidth: 325,
    width: '100%',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: '128%',
    marginLeft: -7,
    marginBottom: 10,
    color: '#353535',
  },
  input: {
    boxShadow: '0px 3px 10px rgba(0, 82, 180, 0.1)',
    borderRadius: '10px',
    color: '#353535',
    width: '78px',
    height: '38px',
    '&:before': {
      display: 'none'
    },
    '& > input': {
      padding: 0,
      textAlign: 'center',
    }
  },
  divider: {
    backgroundColor: '#D1DDE5',
    marginTop: 32,
  }
});



export default function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([50, 12000]);
  
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };


  const handleBlur = () => {
    if (value < 50) {
      setValue(50);
    } else if (value > 12000) {
      setValue(12000);
    }
  };
  

  
  return (
    
    <ThemeProvider theme={customTheme}>
     
        <Typography className={classes.title} id="range-slider" gutterBottom>
          Цена в €
        </Typography>
        <Slider
        value={value}
        onChange={handleSliderChange}
        aria-labelledby="input-slider"
        min={50}
        max={12000}       
        />
        <Grid 
        container 
        justify="space-between">
        <Input 
            xs={6}
            className={classes.input} 
            value={value[0]}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 50,
              max: 12000,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
        />

        <Input
            xs={6}
            className={classes.input}
            value={value[1]}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 50,
              max: 1200,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
        />
        </Grid>

        <Divider className={classes.divider}/>

    </ThemeProvider>
  );
}