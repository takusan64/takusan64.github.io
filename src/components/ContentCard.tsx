import React from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { grey } from '@material-ui/core/colors'
import clsx from 'clsx';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
  Collapse
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { ContentCard as IContentCard } from '../utils/interface'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    button: {
      '&:hover': {
        background: grey[200]
      },
    },
    card_content: {
      paddingBottom: theme.spacing(0)
    },
    card_action: {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0)
    },
    card_content_detail: {
      paddingTop: theme.spacing(0),
      "&:last-child": {
        paddingBottom: theme.spacing(2)
      }
    }
  }
  ))

type ContentCardProps = { content_card: IContentCard }

const ContentCard: React.FC<ContentCardProps> = ({ content_card }) => {
  const classes = useStyles()

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card_content}>
      <CardMedia
        component="img"
        alt={content_card.title}
        height="160"
        image={content_card.src}
      />
      <CardContent className={classes.card_content}>
        <Typography variant="h6">
          {content_card.title}
        </Typography>
        {content_card.discription.map((card_discription, i) =>
          <Typography variant="body2" color="textSecondary" component="p" key={i}>
            {card_discription}
          </Typography>
        )}
      </CardContent>
      <CardActions disableSpacing>
        {!content_card.url ? (
          <></>
        ) : (
          <Button
            variant="contained"
            color="inherit"
            href={content_card.url}
            target="_blank"
            rel="noopener"
            className={classes.button}
          >
            Learn More
          </Button>
        )}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      {!content_card.content_card_detail ? (
        <></>
      ) : (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.card_content_detail}>
            <Typography gutterBottom variant="subtitle1" component="h2">
              {content_card.content_card_detail.title}
            </Typography>
            {content_card.content_card_detail.discription.map((card_detail_discription, i) =>
              <Typography variant="body2" color="textSecondary" component="p" key={i}>
                {card_detail_discription}
              </Typography>
            )}
          </CardContent>
        </Collapse>
      )}
    </Card>
  )
}

export default ContentCard