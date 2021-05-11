import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles , createStyles} from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { ContentCards as IContentCards } from '../utils/interface'
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
))

type ContentCardsProps = { content_cards: IContentCards }

const ContentCards: React.FC<ContentCardsProps> = ({content_cards}) => {
    const classes = useStyles()
    return (
      <>
        <Grid container spacing={3} justify="center">
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                {content_cards.title}
              </Typography>
            </Grid>
            {content_cards.content_card.map((content_card, i) =>
              <Grid item xs={12} sm={4} className={classes.gridItem} key={i}>
                <ContentCard content_card={content_card} />
              </Grid>
            )}
        </Grid>
      </>
    )
  }

  export default ContentCards