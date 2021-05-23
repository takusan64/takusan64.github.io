import React from 'react';
import { makeStyles , createStyles} from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Container,
    Grid,
    Typography
} from '@material-ui/core'
import { Content as IContent } from '../utils/interface'
import PersonIcon from '@material-ui/icons/Person'
import WorkIcon from '@material-ui/icons/Work'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'

const useStyles = makeStyles((theme: Theme)  =>
  createStyles({
    table: {

    }
  }
))

type IconProps = { icon: string }

const Icon:React.FC<IconProps> = ({icon}) =>{
  return(
    <>
      {(() => {
        switch(icon){
          case "Person":
            return (<PersonIcon/>)
          case "Work":
            return(<WorkIcon />)
          case "CalendarToday":
            return(<CalendarTodayIcon />)
          default:
           return <></>
        }
      })()}
    </>
  )
}

type ContentProps = { content: IContent }

const ContentTable: React.FC<ContentProps> = ({content}) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
        <Grid container spacing={1} justify="center">
          {!content.title? (
            <></>
          ) : (
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom align="center">
                {content.title}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  {(() => {
                    if (content.content_table) {
                      const table = content.content_table.map((content_table, i) => {
                        return (
                          <TableRow key={i}>
                            <TableCell align="center">
                              <Icon icon={content_table.icon}/>
                            </TableCell>
                            <TableCell component="th" scope="row" align="left">
                              {content_table.title}
                            </TableCell>
                            <TableCell align="center">
                              {content_table.discription}
                            </TableCell>
                          </TableRow>
                        )
                      })
                      return table
                    } else {
                      return <></>
                    }
                  })()}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
    </Container>
  )
}

export default ContentTable