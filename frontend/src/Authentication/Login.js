import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Login = () => {
    const paperStyle = { padding: '30px 50px', width: 350, margin: "70px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginbwbox = { marginBottom: "6%", marginLeft: "2%" }

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });


    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid style={{ marginBottom: "5%" }} align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign In</h2>
                    <Typography variant='caption' gutterBottom>Login Credentials</Typography>
                </Grid>
                <form>
                    <TextField style={marginbwbox} fullWidth label='Email' placeholder="Enter your email" variant="outlined" size="small" />
                    <div style={{ marginBottom: "5%" }}>
                        <FormControl sx={{ m: 1, width: '40.5ch' }} variant="outlined" size="small">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                placeholder="Enter your Password"
                            />
                        </FormControl>
                    </div>
                    <Button style={{ marginTop: "5%", marginLeft: "38%" }} type='submit' variant='contained' color='primary' size="small">Sign In</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Login;