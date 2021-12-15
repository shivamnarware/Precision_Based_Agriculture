import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        background: "#212525",
        position: "absolute",
        marginTop:"550px",
        height:"125px"
    }
});
function Footer(props) {

    const classes = useStyles();

    return (
        <div style={{ bottom: "0", }}>
            <AppBar position="static" color="primary" className={classes.root} style={{ background: '#212525' }}>
                <Container maxWidth="md">
                    <Toolbar >
                        <Typography variant="body1" color="inherit">
                            © Crop Recommendar System
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>

    );
}

export default Footer;