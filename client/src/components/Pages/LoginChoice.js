import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LoginConsultant from '../auth/LoginConsultant'
import LoginUser from '../auth/LoginUser'

export default function CustomizedSwitches() {
    const [state, setState] = React.useState({
        checkedC: true,
    });

    const handleChange = (event) => {

        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <div className="mt-5 d-flex justify-content-center bg-light">
                <FormGroup>
                    <Typography component="div">
                        <Grid component="label" container alignItems="center" spacing={1}>
                            <Grid item><h4>CONSULTANT</h4></Grid>
                            <Grid item>
                                <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
                            </Grid>
                            <Grid item><h4>USER</h4></Grid>
                        </Grid>
                    </Typography>
                </FormGroup>
            </div>

            {state.checkedC ? <LoginUser /> : <LoginConsultant />}
        </>
    );
}
const AntSwitch = withStyles((theme) => ({
    root: {
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
    },
    switchBase: {
        padding: 2,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(12px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.primary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);