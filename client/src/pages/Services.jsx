import React from 'react';
import { Typography } from '@mui/material';

const Services = () => {
  return (
    <div>

      <Typography align="center" fontSize="xx-large" sx={{ mt: 1 }}>
        <b>Grooming Services and Price list</b>
      </Typography>

      <Typography align="center" fontSize="x-large"
              margin={5}
              >
        Shampoo - Blow Dry - Brush
      </Typography>

      <Typography align="center" fontSize="x-large"
              margin={5}
              >
        Small - PHP300
      </Typography>

      <Typography align="center" fontSize="x-large"
              margin={5}
              >
        Medium - PHP400
      </Typography>

      <Typography align="center" fontSize="x-large"
              margin={5}
>
        Large - PHP500
      </Typography>

      <Typography align="center" fontSize="x-large"
        margin={5}
        >
        Extra Large - PHP600
      </Typography>

    </div>
  );
};

export default Services;
