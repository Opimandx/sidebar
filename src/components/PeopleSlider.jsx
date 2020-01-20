import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';


const useStyles = makeStyles(theme => ({
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
      marginTop: '30',
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
    {
      value: 9,
      label: '9',
   },
  ];



  export default function DiscreteSlider() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
      
        <Typography className={classes.title} id="discrete-slider-custom">
           Кол-во человек
        </Typography>
        <Slider
          defaultValue={1}
          aria-labelledby="discrete-slider-custom"
          step={1}
          valueLabelDisplay="off"
          marks={marks}
          max={9} 
          min={1} 
        />
       </div>
    );
  }