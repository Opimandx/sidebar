import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    width: '300px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    marginTop: theme.spacing(1),
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Opel' },
    { key: 1, label: 'BMW' },
    { key: 2, label: 'Mercedes' },
    { key: 3, label: 'Tesla' },
  ]);

  const handleDelete = chipToDelete => () => {
    setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
  };

  return (
    
    <Grid container 
    direction="column"
    alignItems="flex-start"
    className={classes.root}>
      <TextField 
        fullWidth
        id="standard-basic"
        label="Поиск по марке авто"
        onKeyPress={(ev) => {
          if (ev.key === 'Enter') {
            ev.preventDefault();
            console.log('ENTER PRESSED')

            if (ev.target.value) {
              setChipData((chipData) => {
                const newState = [...chipData]
                const newChip = {
                  key: chipData.length,
                  label: ev.target.value,
                }
                ev.target.value = ''
                newState.push(newChip)
                return newState;
              })
            }
            

            ev.persist()
          }
        }} />
      <div>
      {chipData.map(data => {
        return (
          <Chip
            key={data.key}
            label={data.label}
            onDelete={handleDelete(data)}
            className={classes.chip}
          />
        );
      })}
      </div>
    </Grid>
  );
}