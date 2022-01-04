import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { set } from 'mongoose';
import { useHistory } from "react-router-dom";



const pages = ['Products', 'Blog'];
const settings = ['Register', 'Login', 'Logout'];

const useStyles = makeStyles({
    root: {
        background: "#212525"
    }
});
const ResponsiveAppBar = () => {


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    let history = useHistory();
    const logoutHandler = (e) => {
        e.preventDefault();
        localStorage.removeItem("authToken");
        setToggle(true);
        history.push("/");
    }

    const [toggle, setToggle] = React.useState(true);
    React.useEffect(() => {
        if (localStorage.getItem("authToken")) {
            setToggle(false);
        }
    }, [localStorage.getItem("authToken")])


    const classes = useStyles();

    return (

        <AppBar position="static" >
            <Container maxWidth="x3" className={classes.root} >
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Technofarmacist
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <Link style={{ color: 'black', textDecoration: 'none' }} to={`/`}>Products</Link>
                                </Typography>

                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    <Link style={{ color: 'black', textDecoration: 'none' }} to={`/screen`}>Blog</Link>
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        Technofarmacist
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link style={{ paddingLeft: "1%", marginRight: "2%", color: 'white', display: 'block', textDecoration: 'none' }} to={`/`}>Products</Link>
                        <Link style={{ color: 'white', display: 'block', textDecoration: 'none' }} to={`/screen`}>Blog</Link>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {toggle ? (
                                <>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Button textAlign="center">
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to={`/login`}>Login</Link>
                                        </Button>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Button textAlign="center">
                                            <Link style={{ color: 'black', textDecoration: 'none' }} to={`/register`}>Register</Link>
                                        </Button>
                                    </MenuItem>
                                </>
                            ) : (
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Button style={{ color: 'black', textDecoration: 'none' }} onClick={logoutHandler} textAlign="center">
                                        Logout
                                    </Button>
                                </MenuItem>)}

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
