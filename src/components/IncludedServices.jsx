import React from 'react';
import { makeStyles, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
        marginTop: 30,
    },

    divider: {
      marginTop: 20,
      marginBottom: 20,
    }
});

const CustomCheckbox = withStyles({
    root: {
      color: '#D1DDE5',
      '&$checked': {
        color: '#1A94E5',
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

export default function IncludedServices(props) {
    
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
     
    props.setIncludedServices(state)
    return (
        <ThemeProvider theme = {customTheme}>

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
                    <CustomCheckbox
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
                    <CustomCheckbox
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
                    <CustomCheckbox
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
                    <CustomCheckbox
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
                    <CustomCheckbox
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
        
        </ThemeProvider>
    );
}