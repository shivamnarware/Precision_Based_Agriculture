import React, { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Register = () => {
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


    // ---------------------For Confirm Password-------------------------

    const [valuesconfirm, setValuesConfirm] = React.useState({
        passwordconfirm: '',
        showPasswordConfirm: false,
    });


    const handleChangeConfirm = (prop) => (event) => {
        setValuesConfirm({ ...valuesconfirm, [prop]: event.target.value });
    };

    const handleClickShowPasswordConfirm = () => {
        setValuesConfirm({
            ...valuesconfirm,
            showPasswordConfirm: !valuesconfirm.showPasswordConfirm,
        });
    };

    const handleMouseDownPasswordConfirm = (event) => {
        event.preventDefault();
    };

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const registerHandler = () => {
        const config = {
            header: {
                "Content-Type": "application/json"
            }
        }

        if (values.password != valuesconfirm.passwordconfirm) {
            setValues({ ...values, password: '' });
            setValuesConfirm({ ...valuesconfirm, passwordconfirm: '' });
            setTimeout(() => {
                setError("");
            }, 5000);
            return setError("Password do not match");
        }
    }

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid style={{ marginBottom: "5%" }} align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField style={marginbwbox} fullWidth label='Username' placeholder="Enter your username" variant="outlined" size="small" />
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
                    <div style={{ marginBottom: "5%" }}>
                        <FormControl sx={{ m: 1, width: '40.5ch' }} variant="outlined" size="small">
                            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={valuesconfirm.showPasswordConfirm ? 'text' : 'password'}
                                value={valuesconfirm.passwordconfirm}
                                onChange={handleChangeConfirm('passwordconfirm')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPasswordConfirm}
                                            onMouseDown={handleMouseDownPasswordConfirm}
                                            edge="end"
                                        >
                                            {valuesconfirm.showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm Password"
                                placeholder="Enter your Confirm Password"
                            />
                        </FormControl>
                    </div>
                    <Button style={{ marginTop: "5%", marginLeft: "35%" }} type='submit' variant='contained' color='primary' size="small">Sign up</Button>
                </form>
                {error && <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { s: 1, width: '20ch' },
                        marginLeft: "25%",
                        marginRight: "25%",
                        border: '1px solid grey',
                        paddingTop: "4%",
                        marginTop: "5%",
                        borderRadius: "7px",
                        boxShadow: "5px 10px #08308E",
                        paddingBottom: "5%"
                    }}
                    noValidate
                    autoComplete="off"
                    textAlign="center"
                    color="red"
                >
                    {error}
                </Box>}

            </Paper>
        </Grid>
    )
}

export default Register;