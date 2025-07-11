import { useEffect, useState } from 'react';

// material-ui
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project imports
import ItemComment from './ItemComment';
import EditItem from './EditItem';
import AddItemComment from './AddItemComment';
import AlertItemDelete from './AlertItemDelete';
import SimpleBar from 'components/third-party/SimpleBar';
import IconButton from 'components/@extended/IconButton';

import { deleteItem, handlerKanbanDialog, useGetBacklogs, useGetKanbanMaster } from 'api/kanban';
import { openSnackbar } from 'api/snackbar';

// assets
import CloseOutlined from '@ant-design/icons/CloseOutlined';
import DeleteFilled from '@ant-design/icons/DeleteFilled';

// ==============================|| KANBAN BOARD - ITEM DETAILS ||============================== //

export default function ItemDetails() {
  let selectedData;
  let commentList = <></>;

  const { backlogs } = useGetBacklogs();
  const { kanbanMaster } = useGetKanbanMaster();

  const selectedItem = kanbanMaster?.selectedItem ? kanbanMaster.selectedItem : false;

  // drawer
  const [open, setOpen] = useState(selectedItem !== false);
  const handleDrawerOpen = () => {
    setOpen((prevState) => !prevState);
    handlerKanbanDialog(false);
  };

  useEffect(() => {
    if (selectedItem !== false) setOpen(true);
  }, [selectedItem]);

  if (selectedItem !== false) {
    selectedData = backlogs?.items.filter((item) => item.id === selectedItem)[0];
    if (selectedData?.commentIds) {
      commentList = [...selectedData.commentIds].reverse().map((commentId, index) => {
        const commentData = backlogs?.comments.filter((comment) => comment.id === commentId)[0];
        const profile = backlogs?.profiles.filter((item) => item.id === commentData.profileId)[0];
        return <ItemComment key={index} comment={commentData} profile={profile} />;
      });
    }
  }

  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = (status) => {
    setOpenModal(false);
    if (status) {
      handleDrawerOpen();
      deleteItem(selectedData.id);
      openSnackbar({
        open: true,
        message: 'Task Deleted successfully',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        variant: 'alert',

        alert: {
          color: 'success'
        }
      });
    }
  };

  return (
    <Drawer
      sx={{
        ml: open ? 3 : 0,
        flexShrink: 0,
        zIndex: 1200,
        overflowX: 'hidden',
        width: { xs: 320, md: 450 },
        '& .MuiDrawer-paper': {
          width: { xs: 320, md: 450 },
          border: 'none',
          borderRadius: '0px'
        }
      }}
      variant="temporary"
      anchor="right"
      open={open}
      ModalProps={{ keepMounted: true }}
      onClose={handleDrawerOpen}
    >
      {open && (
        <SimpleBar
          sx={{
            overflowX: 'hidden',
            height: '100vh'
          }}
        >
          {selectedData && (
            <>
              <Box sx={{ p: 3 }}>
                <Grid container alignItems="center" spacing={0.5} justifyContent="space-between">
                  <Grid sx={{ width: 'calc(100% - 64px)' }}>
                    <Stack direction="row" sx={{ gap: 0.5, alignItems: 'center', justifyContent: 'space-between' }}>
                      <Typography
                        variant="h4"
                        sx={{
                          display: 'inline-block',
                          width: 'calc(100% - 34px)',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          verticalAlign: 'middle'
                        }}
                      >
                        {selectedData.title}
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid>
                    <Stack direction="row" sx={{ alignItems: 'center' }}>
                      <Tooltip title="Delete Task">
                        <IconButton color="error" onClick={() => setOpenModal(true)} size="small" sx={{ fontSize: '0.875rem' }}>
                          <DeleteFilled />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Close">
                        <IconButton color="secondary" onClick={handleDrawerOpen} size="small" sx={{ fontSize: '0.875rem' }}>
                          <CloseOutlined />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                    <AlertItemDelete title={selectedData.title} open={openModal} handleClose={handleModalClose} />
                  </Grid>
                </Grid>
              </Box>
              <Divider />
              <Box sx={{ p: 3 }}>
                <Grid container spacing={2}>
                  <Grid size={12}>
                    <EditItem
                      item={selectedData}
                      profiles={backlogs?.profiles}
                      userStory={backlogs?.userStory}
                      columns={backlogs?.columns}
                      handleDrawerOpen={handleDrawerOpen}
                    />
                  </Grid>
                  <Grid size={12}>{commentList}</Grid>
                  <Grid size={12}>
                    <AddItemComment itemId={selectedItem} />
                  </Grid>
                </Grid>
              </Box>
            </>
          )}
          {!selectedData && (
            <Stack sx={{ alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
              <Typography variant="h5" color="error">
                No item found
              </Typography>
            </Stack>
          )}
        </SimpleBar>
      )}
    </Drawer>
  );
}
