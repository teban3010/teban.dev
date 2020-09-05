import React, { useContext } from 'react';
import { Switch } from '@material-ui/core';
import { Brightness7, Brightness3 } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { ThemeContext } from '../context/ThemeContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
}));

const ThemeSwitch = () => {
  const classes = useStyles();
  const context = useContext(ThemeContext);

  return (
    <div className={classes.root}>
      <Switch
        checked={context.themeLight}
        onChange={() => context.toggleTheme()}
        name="theme"
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      {context.themeLight ? (
        <Brightness7 style={{ color: 'gold' }} />
      ) : (
        <Brightness3 />
      )}
    </div>
  );
};

export default ThemeSwitch;
