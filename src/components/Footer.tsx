import React from "react";
import {Typography, Link} from '@material-ui/core';
import { makeStyles , createStyles} from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import {Footer as IFooter} from '../utils/interface'
import github from '../images/github-icon.png'
import qiita from '../images/qiita-icon.png'
import youtube from '../images/youtube-icon.png'

const useStyles = makeStyles((theme: Theme)  =>
  createStyles({
    contact: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    images: {
      height: '60px',
       width: 'auto'
    }
  }
));


type FooterProps = { footer: IFooter }

const Footer: React.FC<FooterProps> = ({footer}) => {
  const classes = useStyles()
  return (
    <>
      <Typography className={classes.contact} align="center">
        <Link href={footer.contacts.github.url} target="_blank" rel="noopener">
          <img
            src={github}
            alt={footer.contacts.github.discription}
            className={classes.images}
          />
        </Link>
        <Link href={footer.contacts.youtube.url} target="_blank" rel="noopener">
          <img
            src={youtube}
            alt={footer.contacts.youtube.discription}
            className={classes.images}
          />
        </Link>
        <Link href={footer.contacts.qiita.url} target="_blank" rel="noopener">
          <img
            src={qiita}
            alt={footer.contacts.qiita.discription}
            className={classes.images}
          />
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {footer.copy_right}
      </Typography>
    </>
  )
};

export default Footer