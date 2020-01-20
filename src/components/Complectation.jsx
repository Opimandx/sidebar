import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const CustomCheckboxPremium = withStyles({
 
  root: {
    color: '#D1DDE5',
    '&$checked': {
      color: '#1A94E5',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 325,
    backgroundColor: theme.palette.background.paper,
  },
 
  divider: {
    marginTop: 32,
    backgroundColor: '#D1DDE5',
  },

  listButton: {
    paddingLeft: 0, 
  }
 
}));

export default function Complectation() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    manualTrans: true,
    automatic: false,
    ac: true,
    petrol: false,
    disel: false,
    gas: false,
    electro: false,
});

const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
};

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="complectation-list-subheader"
      className={classes.root}
    >
      
      <ListItem className={classes.listButton} button onClick={handleClick}>
        <ListItemText primary="Комплектация" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
         
        <Grid 
           container
           direction="column"
           >
            <FormControlLabel
                control={
                    <CustomCheckboxPremium
                        checked={state.manualTrans}
                        onChange={handleChange('manualTrans')}
                        value="manualTrans"
                        color="primary"
                    />
                }
                label="Ручная КПП"
            />

            <FormControlLabel
                control={
                    <CustomCheckboxPremium
                        checked={state.automatic}
                        onChange={handleChange('automatic')}
                        value="automatic"
                        color="primary"
                    />
                }
                label="Автомат"
            />

            <FormControlLabel
                control={
                    <CustomCheckboxPremium
                        checked={state.ac}
                        onChange={handleChange('ac')}
                        value="ac"
                        color="primary"
                    />
                }
                label="А/С"
            />

          <FormControlLabel
                control={
                    <CustomCheckboxPremium
                        checked={state.petrol}
                        onChange={handleChange('petrol')}
                        value="petrol"
                        color="primary"
                    />
                }
                label="Бензин"
            />

            <FormControlLabel
                control={
                    <CustomCheckboxPremium
                        checked={state.disel}
                        onChange={handleChange('disel')}
                        value="disel"
                        color="primary"
                    />
                }
                label="Дизель"
            />

            <FormControlLabel
                control={
                    <CustomCheckboxPremium
                        checked={state.gas}
                        onChange={handleChange('gas')}
                        value="gas"
                        color="primary"
                    />
                }
                label="Газ"
            />

            <FormControlLabel
                control={
                    <CustomCheckboxPremium
                        checked={state.electro}
                        onChange={handleChange('electro')}
                        value="electro"
                        color="primary"
                    />
                }
                label="Электричество"
            />

            </Grid>

            <Divider className={classes.divider} />

        </List>
      </Collapse>
    </List>
  );
}