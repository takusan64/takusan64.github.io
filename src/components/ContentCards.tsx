import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles , createStyles} from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Content as IContent } from '../utils/interface'
import ContentCard from './ContentCard'

const useStyles = makeStyles((theme: Theme)  =>
  createStyles({
    gridItem: {
      marginBottom: theme.spacing(2)
    }
  }
))

type ContentProps = { content: IContent }

const ContentCards: React.FC<ContentProps> = ({content}) => {
    const classes = useStyles()

    return (
      <>
        <Grid container spacing={3} justify="center">
          {!content.title? (
            <></>
          ) : (
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                {content.title}
              </Typography>
            </Grid>
          )}
          {(() => {
            if (content.content_card) {
              const cards = content.content_card.map((content_card, i) => {
                return (
                  <Grid item xs={12} sm={4} className={classes.gridItem}  key={i}>
                    <ContentCard content_card={content_card} />
                  </Grid>
                )
              })
              return cards
            } else {
              return <></>
            }
          })()}
        </Grid>
      </>
    )
  }

  export default ContentCards