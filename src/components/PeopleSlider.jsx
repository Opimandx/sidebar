import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles(theme => ({
    root: {
      width: 300,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));

  const marks = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
        value: 5,
        label: '5',
    },
    {
        value: 6,
        label: '6',
    },
    {
        value: 7,
        label: '7',
    },
    {
        value: 8,
        label: '8',
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

  export default function DiscreteSlider() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
      
        <div className={classes.margin} />
        <Typography id="discrete-slider-custom" gutterBottom>
           Количество людей
        </Typography>
        <Slider
          defaultValue={1}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-custom"
          step={1}
          valueLabelDisplay="auto"
          marks={marks}
          max={8} 
          min={1} 
        />
       </div>
    );
  }