import React, { useState, useEffect } from "react";
import countries from "countries-list";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Box,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  ThemeProvider,
} from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: "18px",
  "@media (min-width:600px)": {
    fontSize: "24px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "30px",
  },
};
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

const Questions = ({ classes, setPageNr, setResult }) => {
  const [score, setScore] = useState([-1, -1, -1, -1, -1, -1, -1, -1]);
  const onSubmit = () => {
    console.log(score);
    setResult(score.reduce((a, b) => a + b, 0));
    setPageNr(4);
  };
  const handleChange = (answer, nr) => {
    const newScore = [...score];
    console.log(answer);
    switch (nr) {
      case 1:
        {
          newScore[nr] = answer === "yes" ? 2 : 0;
          setScore(newScore);
        }
        break;
      case 2:
        {
          newScore[nr] = answer === "yes" ? 2 : 0;
          setScore(newScore);
        }
        break;
      case 3:
        {
          newScore[nr] = answer === "yes" ? 1 : 0;
          setScore(newScore);
        }
        break;
      case 4:
        {
          newScore[nr] = 0;
          setScore(newScore);
        }
        break;
      case 5:
        {
          newScore[nr] = answer === "yes" ? 1 : 0;
          setScore(newScore);
        }
        break;
      case 6:
        {
          newScore[nr] = answer === "yes" ? 5 : 0;
          setScore(newScore);
        }
        break;
      case 7:
        {
          newScore[nr] = answer === "yes" ? 4 : 0;
          setScore(newScore);
        }
        break;
      case 8:
        {
          newScore[nr] = answer === "yes" ? 3 : 0;
          setScore(newScore);
        }
        break;
      default:
        {
          newScore[nr] = answer === "yes" ? 2 : 0;
          setScore(newScore);
        }
        break;
    }
  };
  const renderQuestions = () => {
    const qs = [
      "1- Is your body temperature higher than 38°C ?",
      "2- Do you have dry cough?",
      "3- Do you have a sore throat?",
      "4- Are you suffering from diarrhea or vomiting?",
      "5- Do you have any chronic disease?",
      "6- Did you travel abroad within the past 14 days?",
      "7- Did you have a close contact with acute respiratory infection patient?",
      "8- Have you visited a medical facility that had a confirmed COVID-19 case?",
      "9- Are you an employee in the medical sector or in quarantine?",
    ];
    return qs.map((q, i) => (
      <Box mt={6} key={i} className={classes.textColor}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h3">{q}</Typography>
          </ThemeProvider>
          <RadioGroup
            name="q1"
            onChange={(e) => handleChange(e.target.value, q.split("-")[0])}
          >
            <FormControlLabel
              value="yes"
              control={<Radio style={{ color: "white" }} />}
              label="Yes"
            />
            <FormControlLabel
              value="no"
              control={<Radio style={{ color: "white" }} />}
              label="No"
            />
          </RadioGroup>
        </Grid>
      </Box>
    ));
  };
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={1}></Grid>
        <Grid
          item
          xs={8}
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Box mt={4} mb={4}>
              <img src="logo.png" alt="logo" />
            </Box>
          </Grid>

          {renderQuestions()}
          <Grid
            item
            xs
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Box mt={4}>
              <Button
                size="large"
                className={`${classes.mainAction} ${classes.textColor} ${classes.startButton}`}
                onClick={onSubmit}
              >
                <Typography variant="h5">Check Results</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Questions);
