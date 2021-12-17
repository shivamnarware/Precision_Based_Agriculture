import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import { Typography } from '@mui/material';
import axios from 'axios';

const soilArray = ['Sandy', 'Loamy', 'Black', 'Red', 'Clay'];

const fetilizerArray = ['Urea', 'DAP', '14-35-14', '28-28', '17-17-17', '20-20', '10-26-26'];

const croptype = ['Rice', 'Wheat', 'Apple', 'Bannana',];

function Fertilizers(props) {
    const [soil, setSoil] = React.useState('Sandy');
    const [fertilizer, setFertilizer] = React.useState('Urea');
    const [cropType, setCropType] = React.useState('Bannana');
    const [error, setError] = useState({ n: "xx", p: "xx", k: "xx" });


    const obj = {
        soilType: "0",
        n: "",
        p: "",
        k: "",
        fertilizer: "0",
        croptype: "0"
    }
    const [res, setRes] = useState(obj);

    const handleChangeForSoil = (event) => {
        event.preventDefault();
        setSoil(event.target.value);
        const soilidx = (element) => element === event.target.value;
        const idxsoil = soilArray.findIndex(soilidx);
        setRes({ ...res, soilType: idxsoil + "" })
    };

    const handleChangeForTypeOfFertilizer = (event) => {
        event.preventDefault();
        setFertilizer(event.target.value)
        const fertilizeridx = (element) => element === event.target.value;
        const idxfert = fetilizerArray.findIndex(fertilizeridx);
        setRes({ ...res, fertilizer: idxfert + "" })
    }

    const handleChangeForCropType = (event) => {
        event.preventDefault();
        setCropType(event.target.value)
        const croptypeidx = (element) => element === event.target.value;
        const idxcroptye = croptype.findIndex(croptypeidx);
        setRes({ ...res, croptype: idxcroptye + "" })
    }


    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[700],
        },
        width: "100%"
    }));

    const [data, setData] = useState("Not Executed");
    const submitHandler = () => {
        console.log(res);
        setError({ n: res.n, p: res.p, k: res.k });
        axios.post("http://127.0.0.1:5000/fertilizer", res).
            then(res => setData(res.data));

    }

    return (
        <div>
            <Box
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
            >
                {/* <form> */}
                <div style={{ marginLeft: "30%", marginRight: "30%" }}>
                    <div>
                        <Typography variant="h4" gutterBottom component="div"
                            style={{ textAlign: "center", marginBottom: "15%", border: '1px solid grey', boxShadow: "2px 5px 2px #08308E", paddingTop: "2%", paddingBottom: "2%" }} >
                            Fertilizer Amount
                        </Typography>
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            id="outlined-select-currency fullWidth"
                            select
                            label="Soil Type:"
                            value={soil}
                            onChange={handleChangeForSoil}
                            helperText="Please select Soil Type"
                            size="small"
                            style={{ width: '100%', paddingBottom: "14px" }}
                        >
                            {soilArray.map((option, idx) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="Nitrogen Content"
                            variant="outlined"
                            error={error.n === ""}
                            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                            helperText="Please select Nitrogen Content"
                            size="small"
                            onChange={
                                (e) => {
                                    setRes({ ...res, n: e.target.value })
                                    setError({ ...error, n: e.target.value })
                                }
                            }
                            style={{ width: '100%', paddingBottom: "14px" }}
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="Potassium Content"
                            variant="outlined"
                            error={error.k === ""}
                            helperText="Please select Potassium Content"
                            size="small"
                            onChange={
                                (e) => {
                                    setRes({ ...res, k: e.target.value })
                                    setError({ ...error, k: e.target.value })
                                }
                            }
                            style={{ width: '100%', paddingBottom: "14px" }}
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="Phosphorus Content"
                            variant="outlined"
                            helperText="Please select Phosphorus Content"
                            size="small"
                            error={error.p === ""}
                            onChange={
                                (e) => {
                                    setRes({ ...res, p: e.target.value })
                                    setError({ ...error, p: e.target.value })
                                }
                            }
                            style={{ width: '100%', paddingBottom: "14px" }}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            id="outlined-select-currency fullWidth"
                            select
                            label="Fertilizer Type"
                            value={fertilizer}
                            onChange={handleChangeForTypeOfFertilizer}
                            helperText="Please select Fertilizer Type"
                            size="small"
                            style={{ paddingBottom: "30px" }}
                            style={{ width: '100%', paddingBottom: "14px" }}
                        >
                            {fetilizerArray.map((option, idx) => (
                                <MenuItem key={idx} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            id="outlined-select-currency fullWidth"
                            select
                            label="Crop Type:"
                            value={cropType}
                            onChange={handleChangeForCropType}
                            helperText="Please select Crop Type"
                            size="small"
                            style={{ width: '100%', paddingBottom: "14px" }}
                        >
                            {croptype.map((option, idx) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <ColorButton variant="outlined" onClick={submitHandler} variant="contained">Predict</ColorButton>
                    </div>
                </div>
                {/* </form> */}
            </Box >

            <Box
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
            >
                {data}
            </Box>
        </div >

    );
}

export default Fertilizers;