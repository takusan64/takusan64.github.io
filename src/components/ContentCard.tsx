import React from 'react'
import { makeStyles , createStyles} from '@material-ui/styles'
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

const useStyles = makeStyles((theme: Theme)  =>
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
    button:{
      '&:hover': {
        background: grey[200]
      },
    }
  }
))

type ContentCardProps = { content_card: IContentCard }

const ContentCard: React.FC<ContentCardProps> = ({content_card}) => {
  const classes = useStyles()

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        alt={content_card.title}
        height="160"
        image={content_card.src}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {content_card.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content_card.discription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {!content_card.url? (
          <></>
          ) : (
          <Button
            variant="text"
            color="primary"
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
      {!content_card.content_card_detail? (
        <></>
        ) : (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography gutterBottom variant="h6"  component="h2">
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