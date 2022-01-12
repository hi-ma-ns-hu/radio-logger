import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    marginTop: '5px',
  },
  textField: {
    padding: '5px',
    marginTop: '5px',
  },
});

const MwLog = () => {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth='xl'>
        <Paper elevation={1} variant='outlined' square>
          <Card>
            <form className={classes.container} noValidate>
              <TextField
                id='date'
                variant='outlined'
                label="Today's Date"
                type='date'
                defaultValue='2017-05-24'
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id='date'
                variant='outlined'
                label='Time (UTC/GMT)'
                type='time'
                defaultValue='2017-05-24'
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id='number'
                variant='outlined'
                label='Frequency'
                type='number'
                defaultValue='500'
                inputProps={{ min: '500', max: '1800', step: '10' }}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id='text'
                variant='outlined'
                label='Call Sign'
                type='text'
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id='text'
                variant='outlined'
                label='City'
                type='text'
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id='text'
                variant='outlined'
                label='County'
                type='text'
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id='text'
                variant='outlined'
                label='State'
                type='text'
                MaxLength='2'
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id='number'
                variant='outlined'
                label='Postal Code'
                type='number'
                MaxLength='5'
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Card>
        </Paper>
      </Container>
    </div>
  );
};

export default MwLog;