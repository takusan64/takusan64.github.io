import React from 'react'
import {
  AppBar,
  Toolbar,
  Button
} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Header as IHeader } from '../utils/interface'
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      [theme.breakpoints.up('sm')]: {
        display: "none"
      }
    },
    logo: {
      background: theme.palette.primary.main,
      border: 0,
      marginRight: theme.spacing(2),
    },
    button: {
      '& > *': {
        padding: theme.spacing(1),
      }
    }
  }
  ))

type HeaderProps = { header: IHeader }

const Header: React.FC<HeaderProps> = ({ header }) => {
  const classes = useStyles()

  const scrollPage = (id: string) => {
    window.location.href = `#${id}`
  }

  return (
    <>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
          <img
            src={header.logo}
            height={30}
            className={classes.logo}
            alt={header.title}
          />
          {header.contents_name.map((content_name, i) =>
            <Button
              onClick={() => scrollPage(content_name)}
              key={i}
              color="inherit"
              className={classes.button}
            >
              <Link
                activeClass="active"
                to={"#" + content_name}
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                {content_name}
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <img
        src={header.src}
        alt="写真"
        width="100%"
        height="300"
      >
      </img>
    </>
  )
}
export default Header