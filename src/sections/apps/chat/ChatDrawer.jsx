import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Chip from '@mui/material/Chip';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid2';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import UserAvatar from './UserAvatar';
import UserList from './UserList';
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import SimpleBar from 'components/third-party/SimpleBar';

import useAuth from 'hooks/useAuth';

// assets
import CheckCircleFilled from '@ant-design/icons/CheckCircleFilled';
import ClockCircleFilled from '@ant-design/icons/ClockCircleFilled';
import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import MinusCircleFilled from '@ant-design/icons/MinusCircleFilled';
import RightOutlined from '@ant-design/icons/RightOutlined';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';

export default function ChatDrawer({ handleDrawerOpen, openChatDrawer, setUser, selectedUser }) {
  const { user } = useAuth();

  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  // show menu to set current user status
  const [anchorEl, setAnchorEl] = useState();
  const handleClickRightMenu = (event) => {
    setAnchorEl(event?.currentTarget);
  };

  const handleCloseRightMenu = () => {
    setAnchorEl(null);
  };

  // set user status on status menu click
  const [status, setStatus] = useState('available');
  const handleRightMenuItemClick = (userStatus) => () => {
    setStatus(userStatus);
    handleCloseRightMenu();
  };

  const [search, setSearch] = useState('');
  const handleSearch = async (event) => {
    const newString = event?.target.value;
    setSearch(newString);
  };

  return (
    <Drawer
      sx={{
        mt: { xs: 7.5, lg: 0 },
        width: 320,
        flexShrink: 0,
        display: { xs: openChatDrawer ? 'block' : 'none', lg: 'block' },
        zIndex: { xs: openChatDrawer ? 1100 : -1, lg: 0 },
        '& .MuiDrawer-paper': {
          height: 1,
          width: 320,
          boxSizing: 'border-box',
          position: 'relative',
          border: 'none'
        }
      }}
      variant={downLG ? 'temporary' : 'persistent'}
      anchor="left"
      open={openChatDrawer}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerOpen}
    >
      <MainCard
        sx={{
          bgcolor: 'background.paper',
          borderRadius: '4px 0 0 4px',
          borderRight: 'none',
          height: 1,
          '& div:nth-of-type(2)': { height: 'auto' }
        }}
        border={!downLG}
        content={false}
      >
        <Box sx={{ p: 3, pb: 1 }}>
          <Stack sx={{ gap: 2 }}>
            <Stack direction="row" sx={{ gap: 0.5, alignItems: 'center' }}>
              <Typography variant="h5" color="inherit">
                Messages
              </Typography>
              <Chip
                label="9"
                color="secondary"
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  '& .MuiChip-label': {
                    px: 0.5
                  }
                }}
              />
            </Stack>

            <OutlinedInput
              fullWidth
              id="input-search-header"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
              sx={{
                '& .MuiOutlinedInput-input': {
                  p: '10.5px 0px 12px'
                }
              }}
              startAdornment={
                <InputAdornment position="start">
                  <SearchOutlined style={{ fontSize: 'small' }} />
                </InputAdornment>
              }
            />
          </Stack>
        </Box>

        <SimpleBar
          sx={{
            overflowX: 'hidden',
            height: downLG ? 'calc(100vh - 354px)' : 'calc(100vh - 402px)',
            minHeight: downLG ? 0 : 420
          }}
        >
          <Box sx={{ p: 3, pt: 0, width: 1 }}>
            <UserList setUser={setUser} search={search} selectedUser={selectedUser} />
          </Box>
        </SimpleBar>
        <Box sx={{ px: 3 }}>
          <List component="nav">
            <ListItemButton divider>
              <ListItemIcon>
                <LogoutOutlined />
              </ListItemIcon>

              <ListItemText primary="LogOut" />
            </ListItemButton>
            <ListItemButton divider>
              <ListItemIcon>
                <SettingOutlined />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </List>
        </Box>

        <Box sx={{ p: 3, pt: 1, pl: 5 }}>
          <Grid container>
            <Grid size={12}>
              <Grid container spacing={1} alignItems="center" sx={{ flexWrap: 'nowrap' }}>
                <Grid>
                  <UserAvatar user={{ online_status: status, avatar: 'avatar-1.png', name: 'User 1' }} />
                </Grid>
                <Grid size="grow">
                  <Stack component={Link} to="/apps/profiles/user/personal" sx={{ cursor: 'pointer', textDecoration: 'none' }}>
                    <Typography variant="h5" color="text.primary">
                      {user?.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {user?.role}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid>
                  <IconButton onClick={handleClickRightMenu} size="small" color="secondary">
                    <RightOutlined />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseRightMenu}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right'
                    }}
                    sx={{
                      '& .MuiMenu-list': {
                        p: 0
                      },
                      '& .MuiMenuItem-root': {
                        pl: '6px',
                        py: '3px'
                      }
                    }}
                  >
                    <MenuItem onClick={handleRightMenuItemClick('available')}>
                      <IconButton
                        size="small"
                        sx={{
                          color: 'success.main',
                          '&:hover': { color: 'success.main', bgcolor: 'transparent', transition: 'none', padding: 0 }
                        }}
                      >
                        <CheckCircleFilled />
                      </IconButton>
                      <Typography>Active</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleRightMenuItemClick('offline')}>
                      <IconButton
                        size="small"
                        sx={{
                          color: 'warning.main',
                          '&:hover': { color: 'warning.main', bgcolor: 'transparent', transition: 'none', padding: 0 }
                        }}
                      >
                        <ClockCircleFilled />
                      </IconButton>
                      <Typography>Away</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleRightMenuItemClick('do_not_disturb')}>
                      <IconButton
                        size="small"
                        sx={{
                          color: 'error.main',
                          '&:hover': { color: 'error.main', bgcolor: 'transparent', transition: 'none', padding: 0 }
                        }}
                      >
                        <MinusCircleFilled />
                      </IconButton>
                      <Typography>Do not disturb</Typography>
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </MainCard>
    </Drawer>
  );
}

ChatDrawer.propTypes = {
  handleDrawerOpen: PropTypes.func,
  openChatDrawer: PropTypes.oneOfType([PropTypes.any, PropTypes.bool]),
  setUser: PropTypes.func,
  selectedUser: PropTypes.oneOfType([PropTypes.any, PropTypes.string])
};
