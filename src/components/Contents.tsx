import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles , createStyles} from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Header as IHeader } from '../utils/interface'
import ContentCard from './ContentCard'

const useStyles = makeStyles((theme: Theme)  =>
  createStyles({
    gridItem: {
      marginBottom: theme.spacing(2)
    },
    title: {
      marginTop: theme.spacing(2)
    }
  }
));

type HeaderProps = { header: IHeader }

const Contents: React.FC<HeaderProps> = ({header}) => {
    const classes = useStyles()
    return (
      <>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Contents
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.gridItem}>
            <ContentCard header={header}/>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.gridItem}>
            <ContentCard header={header}/>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.gridItem}>
            <ContentCard header={header}/>
          </Grid>
        </Grid>
      </>
    )
  }

  export default Contents