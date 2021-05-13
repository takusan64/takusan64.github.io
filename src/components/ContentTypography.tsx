import React from 'react'
import { makeStyles , createStyles} from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Typography, Grid, Box } from '@material-ui/core'
import { ContentTypography as IContentTypography } from '../utils/interface'

const useStyles = makeStyles((theme: Theme)  =>
  createStyles({
    discription: {
        fontSize: 18,
      },
  }
))

type ContentsProps = { content_typography: IContentTypography }

const ContentTypography: React.FC<ContentsProps> = ({content_typography}) => {
    const classes = useStyles()
    return (
      <>
        <Grid container spacing={1} justify="center">
            <Grid item xs={12}>
                <Typography variant="h3" gutterBottom align="center">
                    <Box textAlign="center" m={1}>
                        {content_typography.title}
                    </Box>
                </Typography>
                <Typography variant="body1" gutterBottom className={classes.discription} align="center">
                    {content_typography.discription}
                </Typography>
            </Grid>
        </Grid>
      </>
    )
  }

  export default ContentTypography