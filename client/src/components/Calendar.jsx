// import React, { useState } from 'react';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import { Badge } from '@mui/material';
// import { PickersDay } from '@mui/x-date-pickers/PickersDay/PickersDay';
// import { Box } from '@mui/system';

// const calendar = () => {
//       const [date, setDate] = useState(new Date());
//       const [highlightedDays, setHighlightedDays] = useState([1, 2, 15]);
//       console.log(date);
//   return (
//         <form>
//             <Box
//             margin={'auto'}
//             marginTop={5}
//             padding={2}
//             maxWidth={400}
//             borderRadius={5}
//             >
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <StaticDatePicker
//         orientation="portrait"
//         openTo="day"
//         value={date}
//         onChange={(newDate) => {
//           setDate(newDate);
//         }}
//         renderInput={(params) => <TextField {...params} />}

//         renderDay={(day, _value, DayComponentProps) => {
//             const isSelected =
//               !DayComponentProps.outsideCurrentMonth &&
//               highlightedDays.indexOf(day.getDate()) >= 0;

//             return (
//               <Badge
//                 key={day.toString()}
//                 overlap="circular"
//                 badgeContent={isSelected ? '🌚' : undefined}
//               >
//                 <PickersDay {...DayComponentProps} />
//               </Badge>
//             );
//           }}
//       />
//     </LocalizationProvider>
//     </Box>
//     </form>
//   );
// };

// export default calendar;

import React, { useState } from 'react';

const [show, setShow] = useState(true);

const ShowHideComponent = () => {
  setShow(!show);

  return (
    <div>
      <button onClick={handleClick}>Show/Hide</button>

      {toggle ? <p>Hello, world!</p> : <></>}
    </div>
  );
};
export default ShowHideComponent;
