import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TaskItem from '../TaskItem/Index';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: 50,
        padding: theme.spacing(5),
    }
  }));

export default function BottomAppBar() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Container fixed>
                <Paper className={classes.paper}>
                    <TaskItem />
                </Paper>
            </Container>
        </React.Fragment>
    );
}