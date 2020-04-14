import React, { useState, useEffect } from "react";
import countries from "countries-list";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Box,
  Checkbox,
  MenuItem,
  Select,
  Button,
} from "@material-ui/core";

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
      backgroundColor: "#3BCCBB",
    },
    app: {
      backgroundColor: "#2276DF",
      height: "100vh",
    },
    textColor: {
      color: "#ffffff",
    },
    mainAction: {
      backgroundColor: "#3BCCBB",
    },
    startButton: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
  });

const renderInfo = ({ classes, setPageNr }) => {
  const renderMenuItems = () => {
    const countryCodes = Object.keys(countries.countries);
    const countryNames = countryCodes.map(
      (code) => countries.countries[code].name
    );
    return countryNames.map((country) => (
      <MenuItem key={country} value={country}>
        {country}
      </MenuItem>
    ));
  };

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box mt={6}>
          <img src="logo.png" alt="logo" />
        </Box>
        <Box mt={8}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Box mr={4}>
              <Typography variant="h4" className={classes.textColor}>
                Country
              </Typography>
            </Box>
            <Select
              style={{
                backgroundColor: "white",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              {renderMenuItems()}
            </Select>
          </Grid>
        </Box>
        <Box mt={3}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Box mr={4}>
              <Typography variant="h4" className={classes.textColor}>
                Gender&nbsp;
              </Typography>
            </Box>
            <Select
              style={{
                backgroundColor: "white",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              <MenuItem value="male">male</MenuItem>
              <MenuItem value="female">female</MenuItem>
            </Select>
          </Grid>
        </Box>
        <Box mt={3}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Box mr={4}>
              <Typography variant="h4" className={classes.textColor}>
                {"Age"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Typography>
            </Box>
            <Select
              style={{
                backgroundColor: "white",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              <MenuItem value="1-19">1-19</MenuItem>
              <MenuItem value="20-39">20-39</MenuItem>
              <MenuItem value="40-59">40-59</MenuItem>
              <MenuItem value="60+">60+</MenuItem>
            </Select>
          </Grid>
        </Box>
        <Box mt={3}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button
              size="large"
              className={`${classes.mainAction} ${classes.textColor} ${classes.startButton}`}
              onClick={() => setPageNr(3)}
            >
              Start Test
            </Button>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(renderInfo);
