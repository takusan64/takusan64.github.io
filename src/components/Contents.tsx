import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles , createStyles} from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Contents as IContents } from '../utils/interface'
import ContentCards from './ContentCards'
import ContentTypography from './ContentTypography'

const useStyles = makeStyles((theme: Theme)  =>
  createStyles({
  }
))

type ContentsProps = { contents: IContents }

const Contents: React.FC<ContentsProps> = ({contents}) => {
    const classes = useStyles()
    return (
      <>
        <Container maxWidth="md">
          {contents.content_typography.map((content_typography, i) =>
            <ContentTypography content_typography={content_typography} key={i}/>
          )}
        </Container>
        {contents.content_cards.map((content_cards, i) =>
          <ContentCards content_cards={content_cards} key={i}/>
        )}
      </>
    )
  }

  export default Contents