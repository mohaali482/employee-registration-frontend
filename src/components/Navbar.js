import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import { Button, Toolbar, Typography } from '@mui/material';
import BadgeIcon from '@mui/icons-material/Badge';


const Navbar = () => {
  return (
    <Box>
        <AppBar position='static'>
            <Toolbar>
                <BadgeIcon color='secondary' sx={{paddingRight: '10px'}} />
                <Typography variant='h6' sx={{flexGrow: 1}}>
                    Employee registration
                </Typography>
                <Button color='secondary' variant='contained'>Add</Button>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar