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

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  listButton: {
    paddingLeft: 0, 
    paddingRight: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  divider: {
    marginTop: 32,
    backgroundColor: '#D1DDE5',
  },
}));


const CustomCheckboxPremium = withStyles({
 
  root: {
    color: '#D1DDE5',
    '&$checked': {
      color: '#1A94E5',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default function Complectation(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState({
    company1: true,
    company2: false,
    company3: true,
    company4: false,
});

const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
};

  const handleClick = () => {
    setOpen(!open);
  };

  props.setCompanies(state)
  
  return (
    <List
      component="nav"
      aria-labelledby="complectation-list-subheader"
      className={classes.root}
    >
      
      <ListItem className={classes.listButton} button onClick={handleClick}>
        <ListItemText  primary="Прокатные компании" />
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
                        checked={state.company1}
                        onChange={handleChange('company1')}
                        value="company1"
                        color="primary"
                    />
                }
                label="Название"
            />

            <FormControlLabel
                control={
                    <CustomCheckboxPremium
                        checked={state.company2}
                        onChange={handleChange('company2')}
                        value="company2"
                        color="primary"
                    />
                }
                label="Название"
            />

            <FormControlLabel
                control={
                    <CustomCheckboxPremium
                        checked={state.company3}
                        onChange={handleChange('company3')}
                        value="company3"
                        color="primary"
                    />
                }
                label="Название"
            />

          <FormControlLabel
                control={
                    <CustomCheckboxPremium
                        checked={state.company4}
                        onChange={handleChange('company4')}
                        value="petrol"
                        color="primary"
                    />
                }
                label="Название"
            />

            </Grid>

            <Divider className={classes.divider} />

        </List>
      </Collapse>
    </List>
  );
}