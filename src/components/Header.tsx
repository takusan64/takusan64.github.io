import React from 'react'
import {AppBar, Toolbar } from '@material-ui/core'
import { makeStyles , createStyles} from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Header as IHeader } from '../utils/interface'

const useStyles = makeStyles((theme: Theme)  =>
  createStyles({
    logo:{
      background: theme.palette.primary.main,
      border:0
    }
  }
))

type HeaderProps = { header: IHeader }

const Header: React.FC<HeaderProps> = ({header}) => {
    const classes = useStyles()
    return (
      <AppBar position="sticky">
        <Toolbar>
          <img
            src={header.logo}
            height={30}
            className={classes.logo}
            alt={header.title}
          />
        </Toolbar>
      </AppBar>
    )
  }
  export default Header