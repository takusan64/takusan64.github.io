import React from 'react'
import { makeStyles , createStyles} from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Contents as IContents } from '../utils/interface'
import ContentCards from './ContentCards'

const useStyles = makeStyles((theme: Theme)  =>
  createStyles({
  }
))

type ContentsProps = { contents: IContents }

const Contents: React.FC<ContentsProps> = ({contents}) => {
    const classes = useStyles()
    return (
      <>
        {contents.content_cards.map((content_cards, i) =>
          <ContentCards content_cards={content_cards} key={i}/>
        )}
      </>
    )
  }

  export default Contents