import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useDispatch } from 'react-redux';

const Form = () => {
  const [appointment, setAppointment] = useState(false);
  const [posts, setPosts] = useState({
    appointmentDate: '',
    appointmentTime: '',
    petName: '',
    petBreed: '',
    petAge: '',
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
    console.log(posts);

    // if (appointment) {
    //   sendRequest(true, posts)
    //     .then((data) => console.log(data))
    //     .catch((err) => console.log(err));
    // } else {
    //   sendRequest(false, posts)
    //     .then((data) => console.log(data))
    //     .catch((err) => console.log(err));
    // }

    const reset = () => {
      setAppointment(!appointment);
      setPosts({
        appointmentDate: '',
        appointmentTime: '',
        petName: '',
        petBreed: '',
        petAge: '',
      });
    };

    return (
      <form onSubmit={handleSubmit}>
        <Box
          marginTop={10}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'column',
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
          <Button
            sx={{ mt: 1 /* margin top */ }}
            variant="contained"
            type="submit"
            onClick={reset}
          >
            submit
          </Button>
        </Box>
      </form>
    );
  };
};
export default Form;

// end

// import React, { useState } from 'react';
// import { Button, TextField, Box } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { authActions } from '../store';
// import { sendPostRequest } from '../helpers/helpers';

// const Book = () => {
//   const [appointment, setAppointment] = useState(false);
//   const [posts, setPosts] = useState({
//     appointmentDate: '',
//     appointmentTime: '',
//     petName: '',
//     petBreed: '',
//     petAge: '',
//   });

//   const handleChange = (event) => {
//     setUsers((previous) => ({
//       ...previous,
//       [event.target.name]: event.target.value,
//     }));
//   };
//   const dispatch = useDispatch();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(posts);

//     if (appointment) {
//       sendPostRequest(true, posts)
//       .then((data) => localStorage.setItem('user', data.id))
//         .then(() => {
//           dispatch(authActions.login());
//         })
//         .catch((err) => console.log(err));
//     } else {
//       sendRequest(false, posts)
//       .then((data) => localStorage.setItem('id', data.id))
//       // .then((data) => localStorage.setItem('token', data.token))
//       // .then((data) => console.log(data))
//       .then(() => {
//         dispatch(authActions.login());
//       })
//         .catch((err) => console.log(err));
//     }

//     const reset = () => {
//       setAppointment(!appointment);
//       setPosts({
//         appointmentDate: '',
//         appointmentTime: '',
//         petName: '',
//         petBreed: '',
//         petAge: '',
//       });
//     };

//     return (
//       <form onSubmit={handleSubmit}>
//         <Box
//           marginTop={10}
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             '& > :not(style)': { m: 1 },
//           }}
//         >
//           <TextField
//             name="appointmentDate"
//             value={posts.appointmentDate}
//             onChange={handleChange}
//             type="text"
//             helperText="Please enter date"
//             id="demo-helper-text-aligned"
//             label="Appointment date"
//             sx={{ width: 300 }}
//           />
//           <TextField
//             name="appointmentTime"
//             value={posts.appointmentTime}
//             onChange={handleChange}
//             type="text"
//             helperText="Please enter time"
//             id="demo-helper-text-aligned"
//             label="Appointment time"
//             sx={{ width: 300 }}
//           />
//           <TextField
//             name="petName"
//             value={posts.petName}
//             onChange={handleChange}
//             type="text"
//             helperText="Please enter your pet name"
//             id="demo-helper-text-aligned"
//             label="Pet Name"
//             sx={{ width: 300 }}
//           />
//           <TextField
//             name="petBreed"
//             value={posts.petBreed}
//             onChange={handleChange}
//             type="text"
//             helperText="Please enter your pet breed"
//             id="demo-helper-text-aligned-no-helper"
//             label="Pet Breed"
//             sx={{ width: 300 }}
//           />
//           <TextField
//             name="petAge"
//             value={posts.petAge}
//             onChange={handleChange}
//             type="text"
//             helperText="Please enter your pet age"
//             id="demo-helper-text-aligned-no-helper"
//             label="Pet Age"
//             sx={{ width: 180 }}
//           />
//           <Button
//             sx={{ mt: 1 /* margin top */ }}
//             variant="contained"
//             type="submit"
//             onClick={reset}
//           >
//             submit
//           </Button>
//         </Box>
//       </form>
//     );
//   };
// };
// export default Book;
