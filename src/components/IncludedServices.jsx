import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles({
    root: {
        width: 300,
    },

    title: {
      marginTop: 20,
      marginBottom: 20,
    },

    divider: {
      marginTop: 20,
      marginBottom: 20,
    }
});



export default function IncludedServices() {
  
    const classes = useStyles();

    const [state, setState] = React.useState({
        unlimKm: true,
        addDriver: false,
        casco: true,
        delivery: false,
        option: false,
    });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };


    return (
        <div className={classes.root}>
            <Typography className={classes.title}  id="included-services" gutterBottom>
                Включенные услуги
           </Typography>
           <Grid 
           container
           direction="column"
           >
            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.unlimKm}
                        onChange={handleChange('unlimKm')}
                        value="unlimKm"
                        color="primary"
                    />
                }
                label="Безлимитный километраж"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.addDriver}
                        onChange={handleChange('addDriver')}
                        value="addDriver"
                        color="primary"
                    />
                }
                label="Дополнительный водитель"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.casco}
                        onChange={handleChange('casco')}
                        value="casco"
                        color="primary"
                    />
                }
                label="Каско"
            />

          <FormControlLabel
                control={
                    <Checkbox
                        checked={state.delivery}
                        onChange={handleChange('delivery')}
                        value="delivery"
                        color="primary"
                    />
                }
                label="Доставка"
            />

            <FormControlLabel
                control={
                    <Checkbox
                        checked={state.option}
                        onChange={handleChange('option')}
                        value="option"
                        color="primary"
                    />
                }
                label="Опция"
            />

            </Grid>

            <Divider className={classes.divider} />

        </div>
    );
}