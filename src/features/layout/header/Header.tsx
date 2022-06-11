import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';

export default () => {
  return (
    <AppBar position="static">
      <StyledToolBar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Container App Bar
        </Typography>
        <Button>Login</Button>
      </StyledToolBar>
    </AppBar>
  );
};

const StyledToolBar = styled(Toolbar)({
  color: 'blue'
});
