import { useRef } from 'react';
import { Outlet } from 'react-router';

// material-ui
import Grid from '@mui/material/Grid2';

// project imports
import ProfileCard from 'sections/apps/profiles/user/ProfileCard';
import ProfileTabs from 'sections/apps/profiles/user/ProfileTabs';

// ==============================|| PROFILE - USER ||============================== //

export default function UserProfile() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <ProfileCard />
      </Grid>
      <Grid size={{ xs: 12, md: 3 }}>
        <ProfileTabs focusInput={focusInput} />
      </Grid>
      <Grid size={{ xs: 12, md: 9 }}>
        <Outlet context={inputRef} />
      </Grid>
    </Grid>
  );
}
