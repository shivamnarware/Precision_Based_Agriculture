import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';


const cropseason = ['Kharif', 'Whole year', 'Autumn', 'Rabi', 'Summer', 'Winter']

function Irrigation(props) {
    const [season, setSeason] = React.useState('Kharif');

    const handleChangeForTypeOfIrrigation = (event) => {
        event.preventDefault();
        setSeason(event.target.value)
    }

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
                    <TextField id="outlined-basic"
                        required
                        label="soil Humidity(bar)"
                        variant="outlined"
                        helperText="Please select soil Humidity(bar)" />
                </div>
                <div>
                    <TextField id="outlined-basic"
                        required
                        label="soil water content (volume per 5cm )"
                        variant="outlined"
                        helperText="Please select soil water content (volume per 5cm )" />
                </div>
                <div>
                    <TextField
                        fullWidth
                        id="outlined-select-currency fullWidth"
                        select
                        label="Crop Season"
                        value={season}
                        onChange={handleChangeForTypeOfIrrigation}
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
                        helperText="Please select Area (Hectacre)" 
                        style={{paddingBottom: "30px" }}
                        />
                </div>
                <div>
                    <ColorButton variant="contained">Predict</ColorButton>
                </div>
            </div>

        </Box>
    );
}

export default Irrigation;