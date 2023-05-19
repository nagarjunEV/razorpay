import React, { useState } from 'react';
import { auth } from '../../config/firebase_config';
import { Button, TextField } from '@material-ui/core';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisabled] = useState(true);

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const login = () => {
    console.log(`Submit Clicked: ${username} ${password}`);
  };

  return (
    <div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={login}
      >
        <TextField
          error={username.length > 5 && !validateEmail(username)}
          helperText={
            username.length > 5 &&
            !validateEmail(username) &&
            'Enter valid email'
          }
          id="user-email"
          label="Email"
          variant="standard"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="standard"
          style={{ marginTop: '10px' }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={login}
          variant="contained"
          disabled={!(validateEmail(username) && password.length > 4)}
          style={{ marginTop: '10px' }}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
