import React from 'react'
import { Container } from '@material-ui/core'
import { makeStyles , createStyles} from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import Header from './components/Header'
import Footer from './components/Footer'
import Contents from './components/Contents'
import data from './utils/data'

const useStyles = makeStyles((theme: Theme)  =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  }
))

const App: React.FC = () => {
  const classes = useStyles()

  return(
    <>
      <Header header={data.header} />
      <Container className={classes.container} maxWidth="lg">
        {data.contents.map((contents, i) =>
          <Contents contents={contents} key={i}/>
        )}
        <Footer footer={data.footer} />
      </Container>
    </>
  )
}

export default App