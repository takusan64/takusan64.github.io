import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles , createStyles} from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { Contents as IContents } from '../utils/interface'
import ContentCards from './ContentCards'
import ContentTypography from './ContentTypography'
import ContentTable from './ContentTable'

const useStyles = makeStyles((theme: Theme)  =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  }
))

type ContentsProps = { contents: IContents }

const Contents: React.FC<ContentsProps> = ({contents}) => {
  const classes = useStyles()

  return (
    <>
      <Container className={classes.container} maxWidth="lg">
        <div>
          {(() => {
            if (contents.type==="card") {
              return <ContentCards content={contents.content} />
            } else if(contents.type==="typography") {
              return <ContentTypography content={contents.content} />
            } else if(contents.type==="table") {
              return <ContentTable content={contents.content} />
            }
          })()}
        </div>
      </Container>
    </>
  )
}

export default Contents