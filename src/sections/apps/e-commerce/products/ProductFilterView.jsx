import PropTypes from 'prop-types';
// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import ColorOptions from './ColorOptions';
import IconButton from 'components/@extended/IconButton';

// assets
import CloseOutlined from '@ant-design/icons/CloseOutlined';

function getColor(color) {
  return ColorOptions.filter((item) => item.value === color);
}

export default function ProductFilterView({ filter, filterIsEqual, handelFilter, initialState }) {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <>
      {!filterIsEqual(initialState, filter) && (
        <Stack sx={{ gap: 2 }}>
          <Typography variant="h5">Active Filters</Typography>
          {!(initialState.search === filter.search) && (
            <Grid>
              <Stack direction="row" sx={{ alignItems: 'center', ml: '-10px' }}>
                <Chip
                  size={downLG ? 'small' : undefined}
                  label={filter.search}
                  sx={{
                    borderRadius: '4px',
                    textTransform: 'capitalize',
                    color: `grey.500`,
                    bgcolor: 'inherit',
                    '& .MuiSvgIcon-root': { color: `grey` }
                  }}
                />
                <IconButton
                  color="secondary"
                  size="small"
                  sx={{ '&:hover': { bgcolor: 'transparent' }, ml: -1.5, '&::after': { content: 'none' } }}
                  onClick={() => handelFilter('search', '')}
                >
                  <CloseOutlined />
                </IconButton>
              </Stack>
            </Grid>
          )}
          {!(initialState.sort === filter.sort) && (
            <Grid>
              <Stack>
                <Typography variant="subtitle1">Sort</Typography>
                <Stack direction="row" sx={{ alignItems: 'center', ml: '-10px' }}>
                  <Chip
                    size={downLG ? 'small' : undefined}
                    label={filter.sort}
                    sx={{
                      borderRadius: '4px',
                      textTransform: 'capitalize',
                      color: `grey.500`,
                      bgcolor: 'inherit',
                      '& .MuiSvgIcon-root': { color: `grey` }
                    }}
                  />
                  <IconButton
                    color="secondary"
                    size="small"
                    sx={{ '&:hover': { bgcolor: 'transparent' }, ml: -1.5, '&::after': { content: 'none' } }}
                    onClick={() => handelFilter('sort', initialState.sort)}
                  >
                    <CloseOutlined />
                  </IconButton>
                </Stack>
              </Stack>
            </Grid>
          )}
          {!(JSON.stringify(initialState.gender) === JSON.stringify(filter.gender)) && (
            <Grid>
              <Stack>
                <Typography variant="subtitle1">Gender</Typography>
                <Grid container sx={{ ml: '-10px' }}>
                  {filter.gender.map((item, index) => (
                    <Stack key={index} direction="row" sx={{ alignItems: 'center' }}>
                      <Chip
                        size={downLG ? 'small' : undefined}
                        label={item}
                        sx={{
                          borderRadius: '4px',
                          textTransform: 'capitalize',
                          color: `grey.500`,
                          bgcolor: 'inherit',
                          '& .MuiSvgIcon-root': { color: `grey` }
                        }}
                      />
                      <IconButton
                        color="secondary"
                        size="small"
                        sx={{ '&:hover': { bgcolor: 'transparent' }, ml: -1.5, '&::after': { content: 'none' } }}
                        onClick={() => handelFilter('gender', item)}
                      >
                        <CloseOutlined />
                      </IconButton>
                    </Stack>
                  ))}
                </Grid>
              </Stack>
            </Grid>
          )}
          {!(JSON.stringify(initialState.categories) === JSON.stringify(filter.categories)) && filter.categories.length > 0 && (
            <Grid>
              <Stack>
                <Typography variant="subtitle1">Categories</Typography>
                <Grid container sx={{ ml: '-10px' }}>
                  {filter.categories.map((item, index) => (
                    <Stack key={index} direction="row" sx={{ alignItems: 'center' }}>
                      <Chip
                        size={downLG ? 'small' : undefined}
                        label={item}
                        sx={{
                          borderRadius: '4px',
                          textTransform: 'capitalize',
                          color: `grey.500`,
                          bgcolor: 'inherit',
                          '& .MuiSvgIcon-root': { color: `grey` }
                        }}
                      />
                      <IconButton
                        color="secondary"
                        size="small"
                        sx={{ '&:hover': { bgcolor: 'transparent' }, ml: -1.5, '&::after': { content: 'none' } }}
                        onClick={() => handelFilter('categories', item)}
                      >
                        <CloseOutlined />
                      </IconButton>
                    </Stack>
                  ))}
                </Grid>
              </Stack>
            </Grid>
          )}
          {!(JSON.stringify(initialState.colors) === JSON.stringify(filter.colors)) && (
            <Grid>
              <Stack>
                <Typography variant="subtitle1">Colors</Typography>
                <Grid container sx={{ ml: '-10px' }}>
                  {filter.colors.map((item, index) => {
                    const colorsData = getColor(item);
                    return (
                      <Stack key={index} direction="row" sx={{ alignItems: 'center' }}>
                        <Chip
                          size={downLG ? 'small' : undefined}
                          label={colorsData[0].label}
                          sx={{
                            borderRadius: '4px',
                            textTransform: 'capitalize',
                            color: `grey.500`,
                            bgcolor: 'inherit',
                            '& .MuiSvgIcon-root': { color: `grey` }
                          }}
                        />
                        <IconButton
                          color="secondary"
                          size="small"
                          sx={{ '&:hover': { bgcolor: 'transparent' }, ml: -1.5, '&::after': { content: 'none' } }}
                          onClick={() => handelFilter('colors', item)}
                        >
                          <CloseOutlined />
                        </IconButton>
                      </Stack>
                    );
                  })}
                </Grid>
              </Stack>
            </Grid>
          )}
          {!(initialState.price === filter.price) && (
            <Grid>
              <Stack>
                <Typography variant="subtitle1">Price</Typography>
                <Grid sx={{ ml: '-10px' }}>
                  <Chip
                    size={downLG ? 'small' : undefined}
                    label={filter.price}
                    sx={{
                      borderRadius: '4px',
                      textTransform: 'capitalize',
                      color: `grey.500`,
                      bgcolor: 'inherit',
                      '& .MuiSvgIcon-root': { color: `grey` }
                    }}
                  />
                </Grid>
              </Stack>
            </Grid>
          )}
          {!(initialState.rating === filter.rating) && (
            <Grid>
              <Stack>
                <Typography variant="subtitle1">Rating</Typography>
                <Grid sx={{ ml: '-10px' }}>
                  <Stack direction="row" sx={{ alignItems: 'center' }}>
                    <Chip
                      size={downLG ? 'small' : undefined}
                      label={String(filter.rating)}
                      sx={{
                        borderRadius: '4px',
                        textTransform: 'capitalize',
                        color: `grey.500`,
                        bgcolor: 'inherit',
                        '& .MuiSvgIcon-root': { color: `grey` }
                      }}
                    />
                    <IconButton
                      color="secondary"
                      size="small"
                      sx={{ '&:hover': { bgcolor: 'transparent' }, ml: -1.5, '&::after': { content: 'none' } }}
                      onClick={() => handelFilter('rating', '', 0)}
                    >
                      <CloseOutlined />
                    </IconButton>
                  </Stack>
                </Grid>
              </Stack>
            </Grid>
          )}
          <Grid>
            <Button variant="text" color="primary" sx={{ ml: '-10px' }} onClick={() => handelFilter('reset', '')}>
              Reset all filters
            </Button>
          </Grid>
          <Grid>
            <Divider sx={{ mb: 2.5, mx: -3 }} />
          </Grid>
        </Stack>
      )}
    </>
  );
}

ProductFilterView.propTypes = {
  filter: PropTypes.any,
  filterIsEqual: PropTypes.func,
  handelFilter: PropTypes.func,
  initialState: PropTypes.any
};
