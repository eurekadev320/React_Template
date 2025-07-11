// material-ui
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid2';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/MainCard';

// assets
import LockOutlined from '@ant-design/icons/LockOutlined';
import LinkOutlined from '@ant-design/icons/LinkOutlined';

// ==============================|| LAYOUTS -  COLUMNS ||============================== //

export default function ColumnsLayouts() {
  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <MainCard title="2 Columns Form Layout">
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, lg: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel>Name</InputLabel>
                <TextField fullWidth placeholder="Enter full name" />
              </Stack>
              <FormHelperText>Please enter your full name</FormHelperText>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel>Email</InputLabel>
                <TextField fullWidth placeholder="Enter email" />
              </Stack>
              <FormHelperText>Please enter your Email</FormHelperText>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel>Password</InputLabel>
                <TextField
                  type="password"
                  fullWidth
                  placeholder="Enter Password"
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <LockOutlined />
                        </InputAdornment>
                      )
                    }
                  }}
                />
              </Stack>
              <FormHelperText>Please enter Password</FormHelperText>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel>Profile URL</InputLabel>
                <TextField
                  fullWidth
                  placeholder="Please enter your Profile URL"
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <LinkOutlined />
                        </InputAdornment>
                      )
                    }
                  }}
                />
              </Stack>
              <FormHelperText>Please enter your Profile URL</FormHelperText>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Typography sx={{ mb: 1 }}>Language:</Typography>
              <FormControlLabel control={<Checkbox defaultChecked />} label="English" />
              <FormControlLabel control={<Checkbox />} label="French" />
              <FormControlLabel control={<Checkbox />} label="Dutch" />
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid size={12}>
        <MainCard title="2 Columns Horizontal Form Layout">
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, lg: 6 }}>
              <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="flex-start">
                <Grid sx={{ pt: { xs: 0, sm: 1.25 } }} size={{ xs: 12, lg: 4 }}>
                  <InputLabel>Name</InputLabel>
                </Grid>
                <Grid size={{ xs: 12, lg: 7 }}>
                  <TextField fullWidth placeholder="Enter full name" />
                  <FormHelperText>Please enter your full name</FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="flex-start">
                <Grid sx={{ pt: { xs: 0, sm: 1.25 } }} size={{ xs: 12, lg: 4 }}>
                  <InputLabel>Email</InputLabel>
                </Grid>
                <Grid size={{ xs: 12, lg: 7 }}>
                  <TextField fullWidth placeholder="Enter email" />
                  <FormHelperText>Please enter your Email</FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="flex-start">
                <Grid sx={{ pt: { xs: 0, sm: 1.25 } }} size={{ xs: 12, lg: 4 }}>
                  <InputLabel>Password</InputLabel>
                </Grid>
                <Grid size={{ xs: 12, lg: 7 }}>
                  <TextField
                    type="password"
                    fullWidth
                    placeholder="Enter Password"
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <LockOutlined />
                          </InputAdornment>
                        )
                      }
                    }}
                  />
                  <FormHelperText>Please enter Password</FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="flex-start">
                <Grid sx={{ pt: { xs: 0, sm: 1.25 } }} size={{ xs: 12, lg: 4 }}>
                  <InputLabel>Profile URL</InputLabel>
                </Grid>
                <Grid size={{ xs: 12, lg: 7 }}>
                  <TextField
                    fullWidth
                    placeholder="Please enter your Profile URL"
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <LinkOutlined />
                          </InputAdornment>
                        )
                      }
                    }}
                  />
                  <FormHelperText>Please enter your Profile URL</FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="flex-start">
                <Grid sx={{ pt: { xs: 0, sm: 0.75 } }} size={{ xs: 12, lg: 4 }}>
                  <InputLabel>Language</InputLabel>
                </Grid>
                <Grid size={{ xs: 12, lg: 7 }}>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="English" />
                  <FormControlLabel control={<Checkbox />} label="French" />
                  <FormControlLabel control={<Checkbox />} label="Dutch" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid size={12}>
        <MainCard title="3 Columns Form Layout">
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, lg: 4 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel>Name</InputLabel>
                <TextField fullWidth placeholder="Enter full name" />
              </Stack>
              <FormHelperText>Please enter your full name</FormHelperText>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel>Email</InputLabel>
                <TextField fullWidth placeholder="Enter email" />
              </Stack>
              <FormHelperText>Please enter your Email</FormHelperText>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel>Password</InputLabel>
                <TextField
                  type="password"
                  fullWidth
                  placeholder="Enter Password"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlined />
                        </InputAdornment>
                      )
                    }
                  }}
                />
              </Stack>
              <FormHelperText>Please enter Password</FormHelperText>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel>Contact</InputLabel>
                <TextField fullWidth placeholder="Enter contact number" />
              </Stack>
              <FormHelperText>Please enter your contact</FormHelperText>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel>Profile URL</InputLabel>
                <TextField
                  fullWidth
                  placeholder="Please enter your Profile URL"
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <LinkOutlined />
                        </InputAdornment>
                      )
                    }
                  }}
                />
              </Stack>
              <FormHelperText>Please enter your Profile URL</FormHelperText>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel>Pincode</InputLabel>
                <TextField fullWidth placeholder="Enter your postcode" />
              </Stack>
              <FormHelperText>Please enter your postcode</FormHelperText>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Stack sx={{ gap: 1 }}>
                <InputLabel>Address</InputLabel>
                <TextField fullWidth placeholder="Enter your address" />
              </Stack>
              <FormHelperText>Please enter your address</FormHelperText>
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }}>
              <InputLabel>User Type</InputLabel>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Administrator" />
              <FormControlLabel control={<Checkbox />} label="Author" />
              <FormHelperText>Please select User Type</FormHelperText>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
      <Grid size={12}>
        <MainCard title="3 Columns Horizontal Form Layout">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="flex-start">
                <Grid sx={{ pt: { xs: 0, sm: 1.25 } }} size={{ xs: 12, sm: 3, lg: 4 }}>
                  <InputLabel sx={{ textAlign: { xs: 'left', sm: 'right' } }}>Name :</InputLabel>
                </Grid>
                <Grid size={{ xs: 12, sm: 9, lg: 8 }}>
                  <TextField fullWidth placeholder="Enter full name" />
                  <FormHelperText>Please enter your full name</FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="flex-start">
                <Grid sx={{ pt: { xs: 0, sm: 1.25 } }} size={{ xs: 12, sm: 3, lg: 4 }}>
                  <InputLabel sx={{ textAlign: { xs: 'left', sm: 'right' } }}>Email :</InputLabel>
                </Grid>
                <Grid size={{ xs: 12, sm: 9, lg: 8 }}>
                  <TextField fullWidth placeholder="Enter email" />
                  <FormHelperText>Please enter your Email</FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="flex-start">
                <Grid sx={{ pt: { xs: 0, sm: 1.25 } }} size={{ xs: 12, sm: 3, lg: 4 }}>
                  <InputLabel sx={{ textAlign: { xs: 'left', sm: 'right' } }}>Password :</InputLabel>
                </Grid>
                <Grid size={{ xs: 12, sm: 9, lg: 8 }}>
                  <TextField
                    type="password"
                    fullWidth
                    placeholder="Enter Password"
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <LockOutlined />
                          </InputAdornment>
                        )
                      }
                    }}
                  />
                  <FormHelperText>Please enter Password</FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={12}>
              <Divider />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="flex-start">
                <Grid sx={{ pt: { xs: 0, sm: 1.25 } }} size={{ xs: 12, sm: 3, lg: 4 }}>
                  <InputLabel sx={{ textAlign: { xs: 'left', sm: 'right' } }}>Contact :</InputLabel>
                </Grid>
                <Grid size={{ xs: 12, sm: 9, lg: 8 }}>
                  <TextField fullWidth placeholder="Enter contact number" />
                  <FormHelperText>Please enter your contact</FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="flex-start">
                <Grid sx={{ pt: { xs: 0, sm: 1.25 } }} size={{ xs: 12, sm: 3, lg: 4 }}>
                  <InputLabel sx={{ textAlign: { xs: 'left', sm: 'right' } }}>Profile URL :</InputLabel>
                </Grid>
                <Grid size={{ xs: 12, sm: 9, lg: 8 }}>
                  <TextField
                    fullWidth
                    placeholder="Please enter your Profile URL"
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <LinkOutlined />
                          </InputAdornment>
                        )
                      }
                    }}
                  />
                  <FormHelperText>Please enter your Profile URL</FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="flex-start">
                <Grid sx={{ pt: { xs: 0, sm: 1.25 } }} size={{ xs: 12, sm: 3, lg: 4 }}>
                  <InputLabel sx={{ textAlign: { xs: 'left', sm: 'right' } }}>Pincode :</InputLabel>
                </Grid>
                <Grid size={{ xs: 12, sm: 9, lg: 8 }}>
                  <TextField fullWidth placeholder="Enter your postcode" />
                  <FormHelperText>Please enter your postcode</FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={12}>
              <Divider />
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="flex-start">
                <Grid sx={{ pt: { xs: 0, sm: 1.25 } }} size={{ xs: 12, sm: 3, lg: 4 }}>
                  <InputLabel sx={{ textAlign: { xs: 'left', sm: 'right' } }}>Address :</InputLabel>
                </Grid>
                <Grid size={{ xs: 12, sm: 9, lg: 8 }}>
                  <TextField fullWidth placeholder="Enter your address" />
                  <FormHelperText>Please enter your address</FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <Grid container spacing={{ xs: 1, sm: 2 }} alignItems="flex-start">
                <Grid sx={{ pt: { xs: 0, sm: 0.75 } }} size={{ xs: 12, sm: 3, lg: 4 }}>
                  <InputLabel sx={{ textAlign: { xs: 'left', sm: 'right' } }}>User Type :</InputLabel>
                </Grid>
                <Grid size={{ xs: 12, sm: 9, lg: 8 }}>
                  <RadioGroup aria-label="user-type" name="controlled-radio-buttons-group">
                    <FormControlLabel value="administrator" control={<Radio />} sx={{ width: 'fit-content' }} label="Administrator" />
                    <FormControlLabel value="author" control={<Radio />} sx={{ width: 'fit-content' }} label="Author" />
                  </RadioGroup>
                  <FormHelperText>Please select User Type</FormHelperText>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      </Grid>
    </Grid>
  );
}
