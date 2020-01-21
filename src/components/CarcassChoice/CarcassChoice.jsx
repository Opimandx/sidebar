import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox'
import sedan from '../../img/car.svg'

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});



export default function CarcassChoice(props) {


  
    return (
        <Grid className={useStyles.root}>
            <CustomCheckbox 
              image={sedan}
              setValueTags={props.setValueTags}
            />
        </Grid>
      );
}