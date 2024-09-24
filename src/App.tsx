import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];




function HideOnScroll(props:any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props:any) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event:any) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event:any) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
          <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }}>
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />

      <Container>
      efmekldfmdsssmsklamksallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      smdlsakmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmk
      saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    
      efmekldfmdsssmsklamksallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      smdlsakmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmk
      saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    
      efmekldfmdsssmsklamksallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      smdlsakmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmk
      saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    
      efmekldfmdsssmsklamksallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      smdlsakmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmk
      saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    
      efmekldfmdsssmsklamksallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      smdlsakmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmk
      saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    
      efmekldfmdsssmsklamksallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      smdlsakmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmk
      saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    
      smdlsakmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmk
      efmekldfmdsssmsklamksallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    

      efmekldfmdsssmsklamksallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      smdlsakmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmk
      saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    
      efmekldfmdsssmsklamksallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      smdlsakmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmk
      saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    
      efmekldfmdsssmsklamksallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      smdlsakmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmk
      saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      efmekldfmdsssmsklamksallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      smdlsakmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmk
      saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      efmekldfmdsssmsklamksallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      smdlsakmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmk
      saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      efmekldfmdsssmsklamksallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      smdlsakmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmk
      saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      efmekldfmdsssmsklamksallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      smdlsakmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmk
      saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      efmekldfmdsssmsklamksallllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
      smdlsakmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmk
      saaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </Container>    


    </React.Fragment>
  );
}
