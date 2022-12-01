import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles} from './style';

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Página Inicial
          </Typography>
          <Typography variant="h5" className={classes.title}>
            Usuário
          </Typography>
          <Typography variant="h5" className={classes.title}>
            Produto
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar >
      </AppBar>
    </div>
  );
}


