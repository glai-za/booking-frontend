import axios from 'axios';

export const sendRequest = async (register, data) => {
  const res = await axios
    .post(`/auth/${register ? 'register' : 'login'}/`, {
      firstName: data.firstName ? data.firstName : '',
      lastName: data.lastName ? data.lastName : '',
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));

  if (res.status !== 200 && res.status !== 201) {
    return console.log('Invalid authentication');
  }
  const resData = await res.data;
  return resData;
};