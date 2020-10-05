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
    width: "5em",
  },
  paper2: {
    borderRadius: "10px",
    width: "44em",
    marginLeft:"0"
    // marginRight:"0"
  },
  paper3: {
    borderRadius: "10px",
    // marginLeft: "0",
  },
}))

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid className="row">
        <Grid className="col-1 col-s-1">
          <Paper className={(classes.paper, classes.paper1)}>
            <Navbar />
          </Paper>
        </Grid>
        <Grid className="col-6 col-s-6">
          <Paper className={(classes.paper, classes.paper2)}>
            <Middle />
          </Paper>
        </Grid>
        <Grid className="col-4 col-s-4">
          <Paper className={(classes.paper, classes.paper3)}>
            <End/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
