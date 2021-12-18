import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';

const soiltype = ['Clay', 'Sandy', 'Loamy'];

function CropType(props) {
    const [soil, setSoil] = React.useState('Clay');
    const [error, setError] = useState({ ph: "xx", n: "xx", p: "xx", k: "xx", temp: "xx", humidity: "xx", rainfall: "xx" });
    const obj = {
        ph: "",
        n: "",
        p: "",
        k: "",
        temp: "",
        humidity: "",
        rainfall: "",
    }

    const [res, setRes] = useState(obj);

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[700],
        },
        width: "100%"
    }));
    const croptype = ['carrot', 'coconut', 'cotton', 'groundnut', 'melon', 'millet', 'potatoes', 'rice', 'vegetable', 'wheat',]

    const [data, setData] = useState("Not Executed");
    const submitHandler = () => {
        console.log(res);
        setError({ ph: res.ph, n: res.n, p: res.p, k: res.k, temp: res.temp, humidity: res.humidity, rainfall: res.rainfall });
        if (res.ph !== "" && res.n !== "" && res.p !== "" && res.k !== "" && res.temp !== "" && res.humidity !== "" && res.rainfall !== "") {
            axios.post("http://127.0.0.1:5000/crop", res).then(res => setData(res.data)).catch(setData("Server error"));;
        } else {
            setData("Please enter all the value")
        }
    }

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 0, width: '25ch' },
                    marginLeft: "15%",
                    marginRight: "15%",
                    border: '1px solid grey',
                    paddingTop: "5%",
                    marginTop: "5%",
                    borderRadius: "7px",
                    boxShadow: "5px 10px #08308E",
                    paddingBottom: "5%"
                }}
                noValidate
                autoComplete="off"
            >
                <div style={{ marginLeft: "30%", marginRight: "30%" }}>
                    <div>
                        <Typography variant="h4" gutterBottom component="div"
                            style={{ textAlign: "center", marginBottom: "12%", border: '1px solid grey', boxShadow: "2px 5px 2px #08308E", paddingTop: "2%", paddingBottom: "2%" }} >
                            Crop Type
                        </Typography>
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="pH Level"
                            variant="outlined"
                            helperText="Please select pH Level"
                            size="small"
                            error={error.ph === ""}
                            style={{ width: '100%', paddingBottom: "14px" }}
                            onChange={
                                (e) => {
                                    setRes({ ...res, ph: e.target.value })
                                    setError({ ...error, ph: e.target.value })
                                }
                            }
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="Nitrogen Content (g)"
                            variant="outlined"
                            helperText="Please select Nitrogen Content (g)"
                            size="small"
                            error={error.n === ""}
                            style={{ width: '100%', paddingBottom: "14px" }}
                            error={error.n === ""}
                            onChange={
                                (e) => {
                                    setRes({ ...res, n: e.target.value })
                                    setError({ ...error, n: e.target.value })
                                }
                            }
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="Phosphorus Content (g)"
                            variant="outlined"
                            helperText="Please select Phosphorus Content (g)"
                            size="small"
                            style={{ width: '100%', paddingBottom: "14px" }}
                            error={error.p === ""}
                            onChange={
                                (e) => {
                                    setRes({ ...res, p: e.target.value })
                                    setError({ ...error, p: e.target.value })
                                }
                            }
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="Potassium Content (g)"
                            variant="outlined"
                            helperText="Please select Potassium Content (g)"
                            size="small"
                            style={{ width: '100%', paddingBottom: "14px" }}
                            error={error.k === ""}
                            onChange={
                                (e) => {
                                    setRes({ ...res, k: e.target.value })
                                    setError({ ...error, k: e.target.value })
                                }
                            }
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="Tempreture"
                            variant="outlined"
                            helperText="Please select Tempreture"
                            size="small"
                            style={{ width: '100%', paddingBottom: "14px" }}
                            error={error.temp === ""}
                            onChange={
                                (e) => {
                                    setRes({ ...res, temp: e.target.value })
                                    setError({ ...error, temp: e.target.value })
                                }
                            }
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="Humidity Amount"
                            variant="outlined"
                            helperText="Please select humidity amount"
                            size="small"
                            style={{ width: '100%', paddingBottom: "14px" }}
                            error={error.humidity === ""}
                            onChange={
                                (e) => {
                                    setRes({ ...res, humidity: e.target.value })
                                    setError({ ...error, humidity: e.target.value })
                                }
                            }
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="Rainfall Amount"
                            variant="outlined"
                            helperText="Please select Rainfall Amount"
                            size="small"
                            style={{ width: '100%', paddingBottom: "14px" }}
                            error={error.rainfall === ""}
                            onChange={
                                (e) => {
                                    setRes({ ...res, rainfall: e.target.value })
                                    setError({ ...error, rainfall: e.target.value })
                                }
                            }
                        />
                    </div>
                    <div>
                        <ColorButton onClick={submitHandler} variant="contained">Predict</ColorButton>
                    </div>
                </div>
            </Box>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 0, width: '25ch' },
                    marginLeft: "15%",
                    marginRight: "15%",
                    border: '1px solid grey',
                    paddingTop: "5%",
                    marginTop: "5%",
                    borderRadius: "7px",
                    boxShadow: "5px 10px #08308E",
                    paddingBottom: "5%"
                }}
                noValidate
                autoComplete="off"
                textAlign="center"
            >
                {data}
            </Box>
        </div>

    );
}

export default CropType;