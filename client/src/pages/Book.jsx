import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Book = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState({
    appointmentDate: '',
    appointmentTime: '',
    petName: '',
    petBreed: '',
    petAge: '',
  });

  const handleChange = (event) => {
    setPosts((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const sendReq = async () => {
    const res = await axios
      .post('https://booking-backend-ls4t.onrender.com/posts', {
        appointmentDate: posts.appointmentDate,
        appointmentTime: posts.appointmentTime,
        petName: posts.petName,
        petBreed: posts.petBreed,
        petAge: posts.petAge,
      })
      .catch((err) => console.log(err));
    // .then((res) => {
    // console.log(res)
    // console.log(res.data)
    const data = await res.data;
    return data;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(posts);
    sendReq()
      .then((data) => console.log(data))
      .then(() => navigate('/'));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        marginTop={10}
        flexDirection={'column'}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <TextField
          name="appointmentDate"
          value={posts.appointmentDate}
          onChange={handleChange}
          type="text"
          helperText="Please enter date"
          id="demo-helper-text-aligned"
          label="Appointment date"
          sx={{ width: 300 }}
        />
        <TextField
          name="appointmentTime"
          value={posts.appointmentTime}
          onChange={handleChange}
          type="text"
          helperText="Please enter time"
          id="demo-helper-text-aligned"
          label="Appointment time"
          sx={{ width: 300 }}
        />
        <TextField
          name="petName"
          value={posts.petName}
          onChange={handleChange}
          type="text"
          helperText="Please enter your pet name"
          id="demo-helper-text-aligned"
          label="Pet Name"
          sx={{ width: 300 }}
        />
        <TextField
          name="petBreed"
          value={posts.petBreed}
          onChange={handleChange}
          type="text"
          helperText="Please enter your pet breed"
          id="demo-helper-text-aligned-no-helper"
          label="Pet Breed"
          sx={{ width: 300 }}
        />
        <TextField
          name="petAge"
          value={posts.petAge}
          onChange={handleChange}
          type="text"
          helperText="Please enter your pet age"
          id="demo-helper-text-aligned-no-helper"
          label="Pet Age"
          sx={{ width: 180 }}
        />
        <Button sx={{ mt: 1 }} variant="contained" type="submit">
          submit
        </Button>
      </Box>
    </form>
  );
};
export default Book;
