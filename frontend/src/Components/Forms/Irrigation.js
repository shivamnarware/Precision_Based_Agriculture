import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import { Typography } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
const cropseason = ['Kharif', 'Whole year', 'Autumn', 'Rabi', 'Summer', 'Winter']

function Irrigation(props) {
    const [season, setSeason] = React.useState('Kharif');

    const obj = {
        soilHumidity: "",
        soilwater: "",
        cropseason: "0",
        area: ""
    }
    const [res, setRes] = useState(obj);
    const [error, setError] = useState({ soilHumidity: "xx", soilwater: "xx", area: "xx" });

    const handleChangeForTypeOfIrrigation = (event) => {
        event.preventDefault();
        setSeason(event.target.value);
        const season = (element) => element === event.target.value;
        const idxseason = cropseason.findIndex(season);
        setRes({ ...res, cropseason: idxseason + "" })
    }

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[700],
        },
        width: "62%"
    }));

    const [data, setData] = useState("Not Executed");
    const submitHandler = () => {
        console.log(res);
        setError({ soilHumidity: res.soilHumidity, soilwater: res.soilwater, area: res.area });
        if (res.soilHumidity !== "" && res.soilwater !== "" && res.cropseason !== "" && res.area !== "") {
            axios.post("http://127.0.0.1:5000/irrigation", res).then(res => setData(res.data)).catch(setData("Server error"));
        } else {
            setData("Please enter all the value")
        }
    }

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
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
                <div style={{ marginLeft: "35%", marginRight: "35%" }}>
                    <div>
                        <Typography variant="h4" gutterBottom component="div"
                            style={{ textAlign: "center", marginBottom: "12%", border: '1px solid grey', boxShadow: "2px 5px 2px #08308E", paddingTop: "2%", paddingBottom: "2%" }} >
                            Irrigation Amount
                        </Typography>
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="soil Humidity(bar)"
                            variant="outlined"
                            error={error.soilHumidity === ""}
                            helperText="Please select soil Humidity(bar)"
                            style={{ width: '100%', paddingBottom: "14px" }}
                            onChange={(e) => {
                                setRes({ ...res, soilHumidity: e.target.value })
                                setError({ ...error, soilHumidity: e.target.value })
                            }
                            }
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="soil water content (volume per 5cm )"
                            variant="outlined"
                            error={error.soilwater === ""}
                            helperText="Please select soil water content (volume per 5cm )"
                            style={{ width: '100%', paddingBottom: "14px" }}
                            onChange={(e) => {
                                setRes({ ...res, soilwater: e.target.value })
                                setError({ ...error, soilwater: e.target.value })
                            }
                            }
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            id="outlined-select-currency fullWidth"
                            select
                            label="Crop Season"
                            value={season}
                            onChange={handleChangeForTypeOfIrrigation}
                            style={{ width: '100%', paddingBottom: "14px" }}
                            helperText="Please select Crop Season"
                        >
                            {cropseason.map((option, idx) => (
                                <MenuItem key={idx} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="Area (Hectacre)"
                            variant="outlined"
                            error={error.area === ""}
                            helperText="Please select Area (Hectacre)"
                            style={{ width: '100%', paddingBottom: "14px" }}
                            // style={{ paddingBottom: "30px" }}
                            onChange={(e) => {
                                setRes({ ...res, area: e.target.value })
                                setError({ ...error, area: e.target.value })
                            }
                            }
                        />
                    </div>
                    <div>
                        <ColorButton  style={{ width: '100%', marginLeft:"2%",paddingBottom: "14px" }} onClick={submitHandler} variant="contained">Predict</ColorButton>
                    </div>
                </div>
            </Box>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
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

export default Irrigation;