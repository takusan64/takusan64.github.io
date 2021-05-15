import React from "react"
import {Typography, Link, Container } from '@material-ui/core'
import { makeStyles , createStyles} from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import {Footer as IFooter} from '../utils/interface'

const useStyles = makeStyles((theme: Theme)  =>
  createStyles({
    contact: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    images: {
      height: '40px',
       width: 'auto'
    },
    container: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  }
))


type FooterProps = { footer: IFooter }

const Footer: React.FC<FooterProps> = ({footer}) => {
  const classes = useStyles()
  return (
    <>
      <Container className={classes.container} maxWidth="lg">
        <Typography className={classes.contact} align="center">
          {footer.contacts.map((cantact, i) =>
            <Link href={cantact.url} target="_blank" rel="noopener" key={i}>
              <img
                src={cantact.src}
                alt={cantact.discription}
                className={classes.images}
              />
            </Link>
          )}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          {footer.copy_right}
        </Typography>
      </Container>
    </>
  )
};

export default Footer