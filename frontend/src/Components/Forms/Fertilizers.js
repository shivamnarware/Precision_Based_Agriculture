import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const soilArray = ['Sandy', 'Loamy', 'Black', 'Red', 'Clay'];

const fetilizerArray = ['Urea', 'DAP', '14-35-14', '28-28', '17-17-17', '20-20', '10-26-26']

function Fertilizers(props) {
    const [soil, setSoil] = React.useState('Sandy');
    const [fertilizer, setFertilizer] = React.useState('Urea');
    const handleChangeForSoil = (event) => {
        event.preventDefault();
        setSoil(event.target.value);
    };

    const handleChangeForTypeOfFertilizer = (event) => {
        event.preventDefault();
        setFertilizer(event.target.value)
    }

    const soilidx = (element) => element === soil;
    const idxsoil = soilArray.findIndex(soilidx);



    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                marginLeft: "15%",
                marginRight: "15%",
                border: '1px solid grey',
                paddingTop: "5%",
                borderRadius: "7px",
                boxShadow: "5px 10px #08308E",
                paddingBottom: "5%"
            }}
            noValidate
            autoComplete="off"
        >
            <div style={{marginLeft:"35%",marginRight:"30%"}}>
                <div>
                    <TextField
                        fullWidth
                        id="outlined-select-currency fullWidth"
                        select
                        label="Soil Type:"
                        value={soil}
                        onChange={handleChangeForSoil}
                        helperText="Please select Soil Type"
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
                        helperText="Please select Nitrogen Content" />
                </div>
                <div>
                    <TextField id="outlined-basic"
                        required
                        label="Potassium Content"
                        variant="outlined"
                        helperText="Please select Potassium Content" />
                </div>
                <div>
                    <TextField id="outlined-basic"
                        required
                        label="Phosphorus Content"
                        variant="outlined"
                        helperText="Please select Phosphorus Content" />
                </div>
                <div>
                    <TextField id="outlined-basic"
                        required
                        label="Phosphorus Content"
                        variant="outlined"
                        helperText="Please select Phosphorus Content" />
                </div>
                <div>
                    <TextField
                        fullWidth
                        id="outlined-select-currency fullWidth"
                        select
                        label="Soil Type:"
                        value={fertilizer}
                        onChange={handleChangeForTypeOfFertilizer}
                        helperText="Please select Fertilizer Type"
                    >
                        {fetilizerArray.map((option, idx) => (
                            <MenuItem key={idx} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </div>

        </Box>
    );
}

export default Fertilizers;