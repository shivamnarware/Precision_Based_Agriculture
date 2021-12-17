import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

const soiltype = ['Clay', 'Sandy', 'Loamy'];



function CropType(props) {
    const [soil, setSoil] = React.useState('Clay');

    const handleChangeSetSoil = (event) => {
        event.preventDefault();
        setSoil(event.target.value)
    }
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[700],
        },
        width: "100%"
    }));

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
                        style={{ textAlign: "center", marginBottom: "12%", border: '1px solid grey',boxShadow: "2px 5px 2px #08308E",paddingTop:"2%",paddingBottom:"2%" }} >
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
                            style={{ width: '100%', paddingBottom: "14px" }}
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="Nitrogen Content (g)"
                            variant="outlined"
                            helperText="Please select Nitrogen Content (g)"
                            size="small"
                            style={{ width: '100%', paddingBottom: "14px" }}
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
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="Organic Carbon (% i.e, 20%=.20)"
                            variant="outlined"
                            helperText="Please select Organic Carbon (% i.e, 20%=.20)"
                            size="small"
                            style={{ width: '100%', paddingBottom: "14px" }}
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="Particles(mm)"
                            variant="outlined"
                            helperText="Please select Particles(mm)"
                            size="small"
                            style={{ width: '100%', paddingBottom: "14px" }}
                        />
                    </div>
                    <div>
                        <TextField id="outlined-basic"
                            required
                            label="Water_holding_content(quarts of water per cubic foot)"
                            variant="outlined"
                            helperText="Please select Water_holding_content(quarts of water per cubic foot)"
                            size="small"
                            style={{ width: '100%', paddingBottom: "14px" }}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth
                            id="outlined-select-currency fullWidth"
                            select
                            label="Crop Season"
                            value={soil}
                            onChange={handleChangeSetSoil}
                            helperText="Please select Crop Season"
                            size="small"
                            style={{ width: '100%', paddingBottom: "30px" }}
                        >
                            {soiltype.map((option, idx) => (
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
            </Box>
        </div>

    );
}

export default CropType;