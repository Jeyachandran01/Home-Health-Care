import CrayondLogo from '@assets/crayondLogo.png';
import { useOnboarding } from '@core/store';
import { Button, Input, Label } from '@core/ui/atoms';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import { login_style } from './style';

function Login(props) {
  const { className = '', rootStyle = {}, ...rest } = props;

  const { user, signIn, loading, handleLoginChange } = useOnboarding(
    (state) => ({
      signIn: state.signIn,
      user: state.user,
      handleLoginChange: state.handleLoginChange,
      loading: state.loading,
    })
  );

  const [showpassword, setPassword] = useState();

  return (
    <Box
      sx={{
        ...login_style.rootSx,
        ...rootStyle,
      }}
      className={`${className}`}
      {...rest}
    >
      <Box sx={login_style.cardContentSx}>
        <Avatar src={CrayondLogo} sx={{ width: 44, height: 44, ml: -1 }} />
        <Typography sx={login_style.createPasswordSx}>Welcome</Typography>
        <Box>
          <Label htmlFor="username">Username</Label>
          <Input
            value={user?.username ?? ''}
            id="username"
            isError={user?.error.username}
            helperText={user?.error.username}
            onChange={(e) => handleLoginChange('username', e.target.value)}
          />
        </Box>
        <Box sx={login_style.inputGroupSx}>
          <Label htmlFor="password" isRequired>
            password
          </Label>
          <Input
            id="password"
            type={showpassword ? 'text' : 'password'}
            onChange={(e) => handleLoginChange('password', e.target.value)}
            isError={user?.error.password}
            errorMessage={user?.error.password}
            value={user?.password ?? ''}
            endAdornment={
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setPassword(!showpassword)}
                edge="end"
              >
                {showpassword ? (
                  <MdVisibilityOff htmlColor="#848484" sx={login_style.eyeSx} />
                ) : (
                  <MdVisibility htmlColor="#848484" sx={login_style.eyeSx} />
                )}
              </IconButton>
            }
          />
        </Box>
        <Box sx={{ mt: 3, display: 'grid', gap: 3 }}>
          <Button
            fullWidth
            buttonStyle={login_style.loginButtonSx}
            onClick={() => signIn()}
            loading={loading}
          >
            login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export { Login };
