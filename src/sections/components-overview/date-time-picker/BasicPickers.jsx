import { useState } from 'react';

// material-ui
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// project imports
import MainCard from 'components/MainCard';

// ==============================|| DATE PICKER - BASIC ||============================== //

export default function BasicDateTimePickers() {
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const basicDatepickerCodeString = `<LocalizationProvider dateAdapter={AdapterDateFns}>
  <Stack sx={{ gap: 3 }}>
    <DesktopDatePicker
      label="Date Desktop"
      inputFormat="MM/dd/yyyy"
      value={value}
      onChange={handleChange}
    />
    <MobileDatePicker
      label="Date Mobile"
      inputFormat="MM/dd/yyyy"
      value={value}
      onChange={handleChange}
    />
    <TimePicker label="Time" value={value} onChange={handleChange} />
    <DateTimePicker
      label="Date & Time Picker"
      value={value}
      onChange={handleChange}
    />
  </Stack>
</LocalizationProvider>`;

  return (
    <MainCard title="Basic Picker" codeString={basicDatepickerCodeString}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack sx={{ gap: 3 }}>
          <DesktopDatePicker format="MM/dd/yyyy" value={value} onChange={handleChange} />
          <MobileDatePicker format="MM/dd/yyyy" value={value} onChange={handleChange} />
          <TimePicker value={value} onChange={handleChange} />
          <DateTimePicker value={value} onChange={handleChange} />
        </Stack>
      </LocalizationProvider>
    </MainCard>
  );
}
