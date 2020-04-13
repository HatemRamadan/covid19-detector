import React, {useState, useEffect} from 'react';
import { createStyles, withStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, Grid, Box, Checkbox, MenuItem, Select } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Info from './components/Info';
import Questions from 'components/Questions';

const styles = (theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: '#3BCCBB'
    },
    app: {
      backgroundColor: '#2276DF',
      height: '100vh'
    },
    textColor: {
      color: '#ffffff'
    },
    mainAction: {
      backgroundColor: '#3BCCBB'
    },
    startButton: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    }
  });
  
const App = ({classes}) => {

  const [pageNr, setPageNr] = useState(1);
  const [page, setPage] = useState();

  const renderRules = () => {
    return(
      <div>
      <Grid container direction="row" justify="center" alignItems="center">
    <Grid item xs={1} ></Grid> 
    <Grid item xs={6} container direction="column" justify="flex-start" alignItems="flex-start">
        <Grid container direction="column" justify="center" alignItems="center">
    <Box mt={6}>
      <img src='logo.png' alt="logo"/>
    </Box>
  </Grid>  
  <Box mt={4}>
    <Typography variant="h6" className={classes.textColor}>
      This test is designed upon the most updated guidelines by CDC &quot;Centers for Disease Control and Prevention&quot;
    </Typography>
    <Box mt={4}>
      <Typography variant="h6" className={classes.textColor}>
        The purpose of the Coronavirus Self-Checker is to help you make decisions about seeking appropriate medical care. This system is not intended for the diagnosis or treatment of disease or other conditions, including COVID-19.
      </Typography>
    </Box>
    <Box mt={2}>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
        <Checkbox style ={{ color: "#3BCCBB"}} ></Checkbox>
        <Box mt={1}>
          <Typography variant="h5" className={classes.textColor}>
            I agree 
          </Typography>
        </Box>
      </Grid>
    </Box>
    <Grid item xs container direction="row" justify="center" alignItems="center">
      <Box mt={4}>
        <Button size="large" className={`${classes.mainAction} ${classes.textColor} ${classes.startButton}`} onClick={()=>setPageNr(2)}>
          <Typography variant="h5">Start</Typography>
        </Button>
      </Box>
    </Grid>
  </Box>
  </Grid>
  </Grid>
  </div>
  );
  }
  useEffect(()=>{
    switch(pageNr){
      case 1 : setPage(renderRules());break;
      case 2 : setPage(<Info classes={classes} setPageNr={setPageNr}></Info>);break;
      case 3 : setPage(<Questions classes={classes} setPageNr={setPageNr}></Questions>);break;
      case 4: setPage(<div>Results</div>);break;
      default : return;
    }
  },[pageNr])
  return (
    <div className={classes.root} >
      <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          COV19 Detector
        </Typography>
      </Toolbar>
    </AppBar>
    <div className={classes.app} style={{overflow: 'scroll', height: '100vh'}}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box mb={4}>
          {page || renderRules()}
        </Box>
      </Grid>
    </div>
    </div>
  );
}

export default withStyles(styles)(App);
