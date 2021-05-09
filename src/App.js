import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import LinearProgress from '@material-ui/core/LinearProgress';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import CenterDetails from './CenterDetails';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [districts, setDistricts] = React.useState([]);
  let [timer, setTimer] = React.useState(null);
  const [districtCode, setDistrictCode] = React.useState(0);
  const [states, setStates] = React.useState([]);
  const [rajya, setRajya] = React.useState(1);
  const [centers, setCenters] = React.useState([]);

  React.useEffect(() => {
    fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states')
      .then(results => results.json())
      .then(data => {
        setStates(data.states);
      });
  }, []);

  const handleChange = (event) => {
    const stateCode = event.target.value;
    setRajya(stateCode);
    getDistricts(stateCode)
  };

  const getDistricts = (stateCode) => {
    fetch('https://cdn-api.co-vin.in/api/v2/admin/location/districts/' + stateCode)
      .then(results => results.json())
      .then(data => {
        console.log(data)
        setDistricts(data.districts);
      });
  }

  const handleDistrictChange = (event) => {
    const districtCode = event.target.value;
    setDistrictCode(districtCode);
    startPolling(districtCode);
  };

  const startPolling = (dc) => {
    getVaccineDetails(dc);
    setTimer(null);
    timer = setInterval(() => getVaccineDetails(dc), 20000);
    setTimer(timer);
  }

  const getVaccineDetails = (districtCode) => {
    const date = new Date();
    const dateStr = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtCode}&date=${dateStr}`;
    fetch(url)
      .then(results => results.json())
      .then(data => {
        console.log(data);
        let centers = data.centers;
        centers = centers.filter((center) => {
          let has = false;
          center.sessions.forEach((session) => {
            if (session.available_capacity >0 && session.min_age_limit===18) {
              has = true;
            }
          });
          return has;
        })
        if (centers.length > 0) {
          notify("Vaccine available");
        }
        setCenters(centers);
      });
  }

  const notify = (message) => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = message;
    window.speechSynthesis.speak(msg);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControl} disabled={districtCode !== 0}>
              <InputLabel id="demo-simple-select-label">Select State</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={rajya}
                onChange={handleChange}
              >
                {states.map(function (o, i) {
                  return <MenuItem key={o.state_id} value={o.state_id}>{o.state_name}</MenuItem>;
                })}
              </Select>
            </FormControl>

            <FormControl className={classes.formControl} disabled={districtCode !== 0}>

              <InputLabel id="demo-simple-select-district">Select District</InputLabel>
              <Select
                labelId="demo-simple-select-district"
                id="demo-simple-select-district"
                value={districtCode}
                onChange={handleDistrictChange}
              >
                {districts.map(function (o, i) {
                  return <MenuItem key={o.district_id} value={o.district_id}>{o.district_name}</MenuItem>;
                })}
              </Select>
            </FormControl>
        <p style={{color:'#17a2b8'}}>App looks for availability of vaccines in selected district every 20 seconds. Please refresh the page to select another state/district</p>
          </Paper>
      {districtCode !== 0 && (<LinearProgress />)}
          <Paper>

            <CenterDetails centers={centers}></CenterDetails>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
