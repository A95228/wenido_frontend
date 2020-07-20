import React from "react";
import Grid from "@material-ui/core/Grid";

import MyProducts from "../myProducts";
import Sidebar from "../Sidebar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3)
    },
    padding: {
        padding: theme.spacing(2)
    },
    header: {
        marginTop: theme.spacing(2)
    },
    button: {
        padding: theme.spacing(1.3)
    }
}));


const Profile = () => {
    const {
        first_name,
        last_name,
        national_code,
        email
    } = useSelector(state => state.auth.user);
    const classes = useStyles();

  return (
      <>
          <Grid container>
              <Grid item>
                  <Sidebar activeItem="profile" />
              </Grid>
              <Grid item spacing={2}>
                  <Typography className={classes.header} variant="h5">
                      Personal Info
                  </Typography>
                  <Paper className={classes.root}>
                          <Grid container spacing={2} className={classes.padding}>
                              <Grid item md={6} xs={12}>
                                  <Typography variant="body1">First name:</Typography>
                                  <Typography variant="h6">{first_name || "-"}</Typography>
                              </Grid>
                              <Grid item md={6} xs={12}>
                                  <Typography variant="body1">Last name:</Typography>
                                  <Typography variant="h6">{last_name || "-"}</Typography>
                              </Grid>
                              <Grid item md={6} xs={12}>
                                  <Typography variant="body1">National code:</Typography>
                                  <Typography variant="h6">{national_code || "-"}</Typography>
                              </Grid>
                              <Grid item md={12}>
                                  <Typography variant="body1">Email:</Typography>
                                  <Typography variant="h6">{email || "-"}</Typography>
                              </Grid>
                          </Grid>
                          <Button
                              component={Link}
                              to="/profile/personal-info/edit"
                              color="primary"
                              fullWidth
                              size="large"
                              className={classes.button}
                          >
                              Edit
                          </Button>
                      </Paper>
              </Grid>
          </Grid>

      </>
  );
};

export default Profile;
