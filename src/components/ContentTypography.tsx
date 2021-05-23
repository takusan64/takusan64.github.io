import React from 'react'
import { makeStyles , createStyles} from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Typography, Grid, Box, Container } from '@material-ui/core'
import { Content as IContent } from '../utils/interface'

const useStyles = makeStyles((theme: Theme)  =>
  createStyles({
    discription: {
        fontSize: 16,
      },
  }
))

type ContentProps = { content: IContent }

const ContentTypography: React.FC<ContentProps> = ({content}) => {
    const classes = useStyles()
    return (
      <>
        <Container maxWidth="md">
            <Grid container spacing={1} justify="center">
                <Grid item xs={12}>
                    {!content.title? (
                        <></>
                    ) : (
                        <Typography variant="h4" gutterBottom align="center">
                            <Box textAlign="center" m={1}>
                                {content.title}
                            </Box>
                        </Typography>
                    )}
                    {!content.discription? (
                        <></>
                    ) : (
                        <Typography variant="body1" gutterBottom className={classes.discription} align="center">
                            {content.discription}
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </Container>
      </>
    )
  }

  export default ContentTypography