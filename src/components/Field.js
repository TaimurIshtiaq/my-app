import React, { Component } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import AssignmentIcon from "@material-ui/icons/Assignment";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      minWidth: 275
    },
    title: {
      fontSize: 14
    },
    root: {
      "& > *": {
        margin: 1,
        width: 300
      }
    },
    pos: {
      marginBottom: 12
    },
    margin: {
      margin: theme.spacing(1)
    },
    button: {
      width: 10,
      height: 50
    }
  })
);

function Field() {
  function addTask(e) {
    console.log("clicked");
  }

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Task"
              placeholder="Task description"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AssignmentIcon />
                  </InputAdornment>
                )
              }}
            />
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              onClick={addTask}
            >
              Add
            </Button>
          </form>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Field;
