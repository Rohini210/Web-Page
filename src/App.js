import React from "react"
import "./App.css"
import Navbar from "./Components/Navbar"
import Middle from "./Components/Middle"
import End from "./Components/End"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    lignItems: "stretch",
  },
  paper1: {
    backgroundColor: "black",
    borderRadius: "15px",
    width: "6em",
  },
  paper2: {
    borderRadius: "10px",
    width: "46em",
  },
  paper3: {
    borderRadius: "10px",
  },
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3} sm={1}>
          <Paper className={(classes.paper, classes.paper1)}>
            <Navbar />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={7}>
          <Paper className={(classes.paper, classes.paper2)}>
            <Middle />
          </Paper>
        </Grid>
        <Grid item xs={3} sm={4}>
          <Paper className={(classes.paper, classes.paper3)}>
            <End/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
