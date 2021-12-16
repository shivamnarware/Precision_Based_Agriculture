import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';


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

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[700],
        },
        width: "62%"
    }));

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
            <div style={{ marginLeft: "35%", marginRight: "30%" }}>
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
                        helperText="Please select Nitrogen Content"
                        size="small"
                    />
                </div>
                <div>
                    <TextField id="outlined-basic"
                        required
                        label="Potassium Content"
                        variant="outlined"
                        helperText="Please select Potassium Content"
                        size="small"
                    />
                </div>
                <div>
                    <TextField id="outlined-basic"
                        required
                        label="Phosphorus Content"
                        variant="outlined"
                        helperText="Please select Phosphorus Content"
                        size="small"
                    />
                </div>
                <div>
                    <TextField id="outlined-basic"
                        required
                        label="Phosphorus Content"
                        variant="outlined"
                        helperText="Please select Phosphorus Content"
                        size="small"
                    />
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
                        size="small"
                        style={{paddingBottom: "30px" }}

                    >
                        {fetilizerArray.map((option, idx) => (
                            <MenuItem key={idx} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div>
                    <ColorButton variant="contained">Predict</ColorButton>
                </div>
            </div>

        </Box>
    );
}

export default Fertilizers;