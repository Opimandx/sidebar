import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    width: 300,
  },
});



export default function RangeSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([50, 12000]);
  
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    console.log('NEW VALUE: ', newValue)
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
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
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
    </div>
  );
}