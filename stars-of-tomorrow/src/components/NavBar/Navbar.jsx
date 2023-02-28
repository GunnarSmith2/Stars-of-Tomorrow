import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../../utils/theme";
import { useMemo } from "react";
import { useSelector } from "react-redux";

//images & css
import ST from '../../Assets/images/Stars-of-Tomorrow-Series-Logo.png'
import AL from '../../Assets/images/AllianceLogo.png'
import './navbar.css'

const drawerWidth = 240;
const navItems = ['Events', 'Alliance', 'Settings'];

function DrawerAppBar(props) {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar  style={{ backgroundColor: 'white'}}>
        <Toolbar sx={{ justifyContent: 'space-between'}} width='100%'>
          <div className='navbar-links_container'>
              <div className='navbar-links_logo-1'>
                <img src={ST} alt="StarsOfTomorrow" />
              </div>
          </div>
          <Box sx={{ display: { xs: 'flex' }, flexDirection:'row', ml:{xs: 1, sm:2}}}>
            {navItems.map((item) => (
              <Button key={item} sx={{ px: {md: 4},  color: '#000', fontFamily: 'Oswald, sans-serif', fontWeight:300, fontSize: 14 }}>
                {item}
              </Button>
            ))}
          </Box>
          <div className='navbar-links_container1'>
              <div className='navbar-links_logo-2'>
                <img src={AL} alt="The-Alliance" />
              </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
        <Toolbar />
      </Box>
      </ThemeProvider>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;