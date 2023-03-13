
import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, AppBar, Typography, Grid, Grow } from '@material-ui/core'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles'
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts'

function App() {

  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId,dispatch]);

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img className={classes.image} src='https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI' alt="memories" height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;