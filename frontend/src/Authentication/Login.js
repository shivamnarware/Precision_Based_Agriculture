import React, { useEffect, useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { Box } from '@mui/system';

const Login = ({ history }) => {
    const paperStyle = { padding: '30px 50px', width: 350, margin: "70px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginbwbox = { marginBottom: "6%", marginLeft: "2%" }

    // useEffect(() => {
    //     if (localStorage.getItem("authToken")) {
    //         history.push("/")
    //     }
    // }, [history])

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

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

    const loginHandler = async (e) => {
        e.preventDefault();
        const config = {
            header: {
                "Content-Type": "application/json"
            }
        };

        try {
            const password = values.password
            if (email && password) {
                const {data} = await axios.post("http://localhost:5000/api/auth/login", { email, password }, config);
                console.log(data)
                if (!data.error)
                    setError("");
                    localStorage.setItem("authToken", data.token);
                    
                if (data.error){
                    setError("Invalid credentials");
                    localStorage.removeItem("authToken");
                }
            } else {
                setError("Please Add valid email and password");
                
            }
            // history.push("/");
        } catch (error) {
            setError(error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    }
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
                <form onSubmit={loginHandler}>
                    <TextField style={marginbwbox} fullWidth label='Email' placeholder="Enter your email" variant="outlined" size="small"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div style={{ marginBottom: "5%" }}>
                        <FormControl sx={{ m: 1, width: '30.5ch' }} variant="outlined" size="small">
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

export default Login;