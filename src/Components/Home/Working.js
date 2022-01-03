
import React from "react";
import "./Working.css";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import SettingsIcon from "@mui/icons-material/Settings";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import WeekendIcon from "@mui/icons-material/Weekend";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
function Working() {
  const classes = useStyles();
  return (
    <div className="container">
      <h1>How it Works?</h1>

      <Timeline  align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <DriveEtaIcon  className="work1"/>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="work">
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Select Your Car
              </Typography>
              <br />
              <Typography>We Service most makes and models</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SettingsIcon className="work1" />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent className="work">
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Select The Perfect CarWash Service
              </Typography>
              <br />
              <Typography>From CarWash broad portfolio of Services</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <AttachMoneyIcon className="work1" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="work">
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Get A Reasonable Quote
              </Typography>
              <br />
              <Typography>
                Get a fair and reasonable quote from our website
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <BookmarksIcon className="work1" />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent className="work">
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Book An Appointment
              </Typography>
              <br />
              <Typography>
                Our washer will come to you and give you the best service
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <WeekendIcon className="work1" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="work">
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Relax
              </Typography>
              <br />
              <Typography>
                Relax and spent time on other things that matter
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default Working;
