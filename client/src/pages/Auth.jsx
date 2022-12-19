import React, { useState } from 'react';
import { Typography, Button, TextField, Box } from '@mui/material';
import { Stack } from '@mui/system';
import { sendRequest } from '../helpers/helpers';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  // console.log(post);
  const [users, setUsers] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setUsers((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(users);

    // authenticate request
    if (register) {
      sendRequest(true, users)
      .then((data) => localStorage.setItem('userId', data.id))
        // .then((data) => console.log(data))
        // .then((data) => console.log(data))
        .then(() => {
          dispatch(authActions.login());
        })
        .then(() => navigate('/'))
        .catch((err) => console.log(err));
    } else {
      sendRequest(false, users)
        .then((data) => localStorage.setItem('userId', data._id))
        // .then((data) => localStorage.setItem('token', data.token))
        // .then((data) => console.log(data))
        .then(() => {
          dispatch(authActions.login());
        })
        .then(() => navigate('/'))
        .catch((err) => console.log(err));
    }

    if (typeof window !== 'undefined') {
      console.log('we are running on the client');
    } else {
      console.log('we are running on the server');
    }
    // end
  };

  const reset = () => {
    setRegister(!register);
    setUsers({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        margin={'auto'}
        marginTop={10}
        padding={2}
        display="flex"
        flexDirection={'column'}
        maxWidth={400}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={5}
        boxShadow={'5px 5px 10px #ddd'}
        sx={{ ':hover': { boxShadow: '10px 10px 20px #ddd' } }}
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body2">
            {register ? 'Sign up to continue.' : 'Login to continue.'}
          </Typography>
        </div>
        {register && (
          <Stack direction="row" spacing={2} sx={{ mt: 2 /* margin top */ }}>
            <TextField
              // html input attribute
              name="firstName"
              value={users.firstName}
              onChange={handleChange}
              type="text"
              placeholder="First name"
              sx={{ width: 200 }}
              // pass down to FormLabel as children
              label="First Name"
            />
            
            <TextField
              // html input attribute
              name="lastName"
              value={users.lastName}
              onChange={handleChange}
              type="text"
              placeholder="Last name"
              sx={{ width: 200 }}
              // pass down to FormLabel as children
              label="Last Name"
            />
          </Stack>
        )}

        <TextField
          // html input attribute
          name="email"
          value={users.email}
          onChange={handleChange}
          type="email"
          placeholder="johndoe@email.com"
          margin="normal"
          sx={{ width: 350 }}
          // pass down to FormLabel as children
          label="Email"
        />

        <TextField
          margin="normal"
          name="password"
          value={users.password}
          onChange={handleChange}
          type="password"
          placeholder="password"
          label="Password"
          sx={{ width: 350 }}
        />

        <Button
          sx={{ mt: 1 /* margin top */ }}
          variant="contained"
          type="submit"
        >
          {register ? 'Signup' : 'Login'}
        </Button>

        <Typography padding={1} fontSize="sm" sx={{ alignSelf: 'center' }}>
          {register ? 'Already have an account?' : 'No account yet?'}
        </Typography>

        <Button onClick={reset}>{register ? 'Login' : 'Register'}</Button>
      </Box>
    </form>
  );
};

export default Auth;