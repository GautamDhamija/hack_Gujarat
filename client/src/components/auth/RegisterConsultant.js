import React, { useState, useContext, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AuthContext from '../../context/auth/authContext'
import AlertUI from '../layout/Alert'
import { useHistory } from 'react-router-dom';
import Spinner from '../layout/Spinner'


export default function Register({ component: Component, ...rest }) {
    let history = useHistory();
    var buttonText = 'Register'
    const authContext = useContext(AuthContext);
    var { OTPsent, msg, error, setLoading, loading } = authContext;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const cat_list = ["Doctor",
        "astrologer",
        "dietetian",
        "Psychologist",
        "stock marketers",
        "visa consultant",
        "career",
        "fitness trainer",
        "finance",
        "Beautician",
        "architect",
        "electrician",
        "plumber",
        "domestic help",
        "property dealer",
        "dentist",
        "nannies",
        "home food",
        "home tutor",
        "masseur"]

    useEffect(() => {

        setTimeout(() => {
            if (OTPsent === true) {
                history.push("/verifyConsultant")
            }
        }, 6000);

    }, [OTPsent])
    const [state, setstate] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        category: '',
        location: '',
        fees : '',
        qualification : ''

    })
    const { name, email, phone, password, category,location,fees,qualification } = state

    const onChange = (e) => {
        setstate({ ...state, category: e.target, [e.target.name]: e.target.value })

    }


    const onSubmit = async (e) => {
        e.preventDefault()
        if (name === '' || email === '' || phone === '' || password === '') {
            alert('Enter all the fields')
        }
        else {
            setLoading(true)
            await authContext.registerConsultant(state)
        }
    }

    return (
        <>

            <Container className="card" style={{ paddingBottom: "2%", marginTop: "2%" }} component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AssignmentIcon style={{ height: "50px", width: "50px" }} />
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{ fontWeight: "bold" }}>
                        REGISTER AS  CONSULTANT
        </Typography>
                    <form className={classes.form} onSubmit={onSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={onChange}
                                    name="name"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    value={name || ''}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={onChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="phone"
                                    name='phone'
                                    label="Phone"
                                    value={phone || ''}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={onChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email || ''}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    onChange={onChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={password || ''}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-controlled-open-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-controlled-open-select-label"
                                        id="demo-controlled-open-select"
                                        open={open}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                        value={category}
                                        name="category"
                                        onChange={onChange}

                                    >
                                        {cat_list.map(cat => (
                                            <MenuItem value={cat}>{cat}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={onChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="location"
                                    label="location"
                                    id="location"
                                    value={location || ''}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={onChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="fees"
                                    label="fees"
                                    id="fees"
                                    value={fees || ''}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={onChange}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="qualification"
                                    label="qualification"
                                    id="qualification"
                                    value={qualification || ''}
                                />
                            </Grid>

                        </Grid>
                        <Button
                            onClick={onSubmit}
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                        >
                            {buttonText}
                        </Button>

                        {error &&
                            <AlertUI msg={error} type='error' />
                        }
                        {msg &&
                            <AlertUI msg={msg} type='success' />
                        }
                        {
                            loading &&
                            <Spinner />
                        }
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
              </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </>
    );
}


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                E-Consultancy
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        height: "80px",
        width: "80px"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 380,
    },
}));