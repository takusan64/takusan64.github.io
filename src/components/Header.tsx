import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import { makeStyles , createStyles} from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Header as IHeader } from '../utils/interface'

const useStyles = makeStyles((theme: Theme)  =>
  createStyles({
  }
));

type HeaderProps = { header: IHeader }

const Header: React.FC<HeaderProps> = ({header}) => {
    const classes = useStyles()
    return (
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {header.title}
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
  export default Header