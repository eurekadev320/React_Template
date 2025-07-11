import { useState } from 'react';

// material-ui
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import Avatar from 'components/@extended/Avatar';
import MainCard from 'components/MainCard';
import { ThemeDirection } from 'config';

// assets
import PlusOutlined from '@ant-design/icons/PlusOutlined';

import Reader from 'assets/images/analytics/reader.svg';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';
import avatar5 from 'assets/images/users/avatar-5.png';
import avatar6 from 'assets/images/users/avatar-6.png';

// ==============================|| READER CARD ||============================== //

export default function ReaderCard() {
  const [show, setShow] = useState(false);

  return (
    <Grid size={12}>
      <Grid container>
        <Grid
          sx={{
            color: 'common.white',
            bgcolor: 'primary.main',
            position: 'relative',
            p: 2.75,
            borderRadius: { xs: 2, sm: '8px 0px 0px 8px' },
            overflow: 'hidden'
          }}
          size={{ xs: 12, sm: 7 }}
        >
          <Stack>
            <Typography variant="h5">What would you want to learn today</Typography>
            <Typography variant="caption" sx={{ maxWidth: '55%', pt: 1 }}>
              Your learning capacity is 80% as daily analytics
            </Typography>
            <Typography variant="h4" sx={{ pt: 8, pb: 1, zIndex: 1 }}>
              35% Completed
            </Typography>
            <Box sx={{ maxWidth: '60%' }}>
              <LinearProgress variant="determinate" color="success" value={35} />
            </Box>
            <Box
              sx={(theme) => ({
                position: 'absolute',
                bottom: 0,
                right: 0,
                ...(theme.direction === ThemeDirection.RTL && { transform: { xs: 'rotateY(180deg)', sm: 'inherit' } })
              })}
            >
              <CardMedia component="img" src={Reader} />
            </Box>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 5 }}>
          <MainCard sx={{ borderRadius: { xs: 2, sm: '0px 8px 8px 0px' }, height: '100%', mt: { xs: 2.5, sm: 0 } }}>
            <Grid container spacing={3}>
              <Grid size={12}>
                <Stack>
                  <Typography>Get started with new basic skills</Typography>
                  <Typography color="text.secondary" sx={{ pt: 1 }}>
                    Last Date 5th Nov 2020
                  </Typography>
                  <Divider sx={{ pt: 3, width: '100%' }} />
                </Stack>
              </Grid>
              <Grid size={12}>
                <Stack direction="row" sx={{ gap: 3, alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ width: 186 }}>
                    <Tooltip
                      open={show}
                      placement="top-end"
                      title={
                        <AvatarGroup max={10}>
                          <Avatar alt="Agnes Walker" src={avatar4} />
                          <Avatar alt="Trevor Henderson" src={avatar5} />
                          <Avatar alt="Jone Doe" src={avatar6} />
                        </AvatarGroup>
                      }
                    >
                      <AvatarGroup
                        sx={{
                          '& .MuiAvatarGroup-avatar': { bgcolor: 'primary.main', cursor: 'pointer' },
                          justifyContent: 'start',
                          '& .MuiAvatar-root': { width: 32, height: 32, fontSize: '0.875rem', bgcolor: 'secondary.400' }
                        }}
                        max={4}
                        slotProps={{
                          surplus: {
                            onMouseEnter: () => {
                              setShow(true);
                            },
                            onMouseLeave: () => {
                              setShow(false);
                            }
                          }
                        }}
                      >
                        <Avatar alt="Remy Sharp" src={avatar1} />
                        <Avatar alt="Travis Howard" src={avatar2} />
                        <Avatar alt="Cindy Baker" src={avatar3} />
                        <Avatar alt="Agnes Walker" src={avatar4} />
                        <Avatar alt="Trevor Henderson" src={avatar5} />
                      </AvatarGroup>
                    </Tooltip>
                  </Box>
                  <Button size="small" variant="contained" sx={{ minWidth: 'max-content', p: 1.5 }}>
                    <PlusOutlined />
                  </Button>
                </Stack>
              </Grid>
              <Grid size={12}>
                <Typography variant="caption" color="secondary">
                  Chrome fixed the bug several versions ago, thus rendering this...
                </Typography>
              </Grid>
            </Grid>
          </MainCard>
        </Grid>
      </Grid>
    </Grid>
  );
}
