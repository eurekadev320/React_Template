import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// project imports
import IconButton from 'components/@extended/IconButton';
import { addStoryComment } from 'api/kanban';
import { openSnackbar } from 'api/snackbar';

// third-party
import { Chance } from 'chance';

// assets
import AppstoreOutlined from '@ant-design/icons/AppstoreOutlined';
import FileAddOutlined from '@ant-design/icons/FileAddOutlined';
import VideoCameraAddOutlined from '@ant-design/icons/VideoCameraAddOutlined';

const chance = new Chance();

// ==============================|| KANBAN BACKLOGS - ADD STORY COMMENT ||============================== //

export default function AddStoryComment({ storyId }) {
  const [comment, setComment] = useState('');
  const [isComment, setIsComment] = useState(false);

  const handleAddStoryComment = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      addNewStoryComment();
    }
  };

  const addNewStoryComment = () => {
    if (comment.length > 0) {
      const newComment = {
        id: `${chance.integer({ min: 1000, max: 9999 })}`,
        comment,
        profileId: 'profile-3'
      };

      addStoryComment(storyId, newComment);
      openSnackbar({
        open: true,
        message: 'Comment Added successfully',
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
        variant: 'alert',

        alert: {
          color: 'success'
        }
      });
      setComment('');
    } else {
      setIsComment(true);
    }
  };

  const handleStoryComment = (event) => {
    const newComment = event.target.value;
    setComment(newComment);
    if (newComment.length <= 0) {
      setIsComment(true);
    } else {
      setIsComment(false);
    }
  };

  return (
    <Box sx={{ p: 2, pb: 1.5, border: '1px solid', borderColor: 'divider' }}>
      <Grid container alignItems="center" spacing={0.5}>
        <Grid size={12}>
          <TextField
            fullWidth
            placeholder="Add Comment"
            value={comment}
            onChange={handleStoryComment}
            sx={{
              mb: 3,
              '& input': { bgcolor: 'transparent', p: 0, borderRadius: '0px' },
              '& fieldset': { display: 'none' },
              '& .MuiFormHelperText-root': {
                ml: 0
              },
              '& .MuiOutlinedInput-root': {
                bgcolor: 'transparent',
                '&.Mui-focused': {
                  boxShadow: 'none'
                }
              }
            }}
            onKeyUp={handleAddStoryComment}
            helperText={isComment ? 'Comment is required.' : ''}
            error={isComment}
          />
        </Grid>
        <Grid>
          <IconButton>
            <VideoCameraAddOutlined />
          </IconButton>
        </Grid>
        <Grid>
          <IconButton>
            <FileAddOutlined />
          </IconButton>
        </Grid>
        <Grid>
          <IconButton>
            <AppstoreOutlined />
          </IconButton>
        </Grid>
        <Grid size="grow" />
        <Grid>
          <Button size="small" variant="contained" color="primary" onClick={addNewStoryComment}>
            Comment
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

AddStoryComment.propTypes = { storyId: PropTypes.string };
