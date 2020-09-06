import React ,{useContext}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const authContext = useContext(AuthContext)
    const { loginConsultant, error, msg, setLoading, loading, isAuthenticated,user,logout } = authContext
    return (
        <div className={classes.root} style={{backgroundColor:"#ff2e63"}}>
            <AppBar position="static" style={{backgroundColor:"#ff2e63"}}>
                <Toolbar style={{backgroundColor:"#010a43"}}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit"  style={{fontFamily:"Ubuntu Mono",fontSize:"xx-large",fontWeight:"bolder"}}>
                        <MenuIcon style={{fontFamily:"Ubuntu Mono",fontSize:"xx-large",fontWeight:"bolder"}}/>
                    </IconButton>
                    <Typography variant="h1" className={classes.title} style={{fontFamily:"Ubuntu Mono",fontSize:"xx-large",fontWeight:"bolder"}}>
                        <h1 style={{textAlign:"left"}}>Paraamarsh</h1>
          </Typography>
                    {user?<Button onClick={logout}><Link to="/loginChoice" style={{fontFamily:"Ubuntu Mono",fontSize:"large",fontWeight:"bolder"}}><div className="text-white" style={{fontFamily:"Ubuntu Mono",fontSize:"large",fontWeight:"bolder"}}><h3 style={{fontFamily:"Ubuntu Mono",fontSize:"large",fontWeight:"bolder"}}>Logout</h3></div></Link></Button>
                    :<><Button><Link to="/loginChoice" style={{fontFamily:"Ubuntu Mono",fontSize:"large",fontWeight:"bolder"}}><div className="text-white" style={{fontFamily:"Ubuntu Mono",fontSize:"large",fontWeight:"bolder"}}><h3 style={{fontFamily:"Ubuntu Mono",fontSize:"large",fontWeight:"bolder"}}>Login</h3></div></Link></Button>
                    <Button><Link to="/signupChoice" style={{fontFamily:"Ubuntu Mono",fontSize:"large",fontWeight:"bolder"}}><div className="text-white" style={{fontFamily:"Ubuntu Mono",fontSize:"large",fontWeight:"bolder"}}><h3 style={{fontFamily:"Ubuntu Mono",fontSize:"large",fontWeight:"bolder"}}>Signup</h3></div></Link></Button>
                    </>}
                </Toolbar>
            </AppBar>
        </div>
    );
}
