import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Chip from '@mui/material/Chip';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid2';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// third-party
import { useFormik, Form, FormikProvider } from 'formik';
import * as yup from 'yup';

// project imports
import ColorOptions from '../products/ColorOptions';
import Avatar from 'components/@extended/Avatar';

import { addToCart, useGetCart } from 'api/cart';
import { openSnackbar } from 'api/snackbar';

// assets
import DownOutlined from '@ant-design/icons/DownOutlined';
import StarFilled from '@ant-design/icons/StarFilled';
import StarOutlined from '@ant-design/icons/StarOutlined';
import UpOutlined from '@ant-design/icons/UpOutlined';

// product color select
function getColor(color) {
  return ColorOptions.filter((item) => item.value === color);
}

const validationSchema = yup.object({
  color: yup.string().required('Color selection is required')
});

// ==============================|| COLORS OPTION ||============================== //

function Colors({ checked, colorsData }) {
  return (
    <Grid>
      <Tooltip title={colorsData.length && colorsData[0] && colorsData[0].label ? colorsData[0].label : ''}>
        <ButtonBase
          sx={(theme) => ({
            borderRadius: '50%',
            '&:focus-visible': { outline: `2px solid ${theme.palette.secondary.dark}`, outlineOffset: 2 }
          })}
        >
          <Avatar
            color="inherit"
            size="sm"
            sx={(theme) => ({
              bgcolor: colorsData[0]?.bg,
              color: 'grey.50',
              ...theme.applyStyles('dark', { color: 'grey.800' }),
              border: '3px solid',
              borderColor: checked ? 'secondary.light' : 'background.paper'
            })}
          >
            {' '}
          </Avatar>
        </ButtonBase>
      </Tooltip>
    </Grid>
  );
}

// ==============================|| PRODUCT DETAILS - INFORMATION ||============================== //

export default function ProductInfo({ product }) {
  const [value, setValue] = useState(1);
  const history = useNavigate();
  const { cart } = useGetCart();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: product.id,
      name: product.name,
      image: product.image,
      salePrice: product.salePrice,
      offerPrice: product.offerPrice,
      color: '',
      size: '',
      quantity: 1
    },
    validationSchema,
    onSubmit: (values) => {
      values.quantity = value;
      addToCart(values, cart.products);
      openSnackbar({
        open: true,
        message: 'Submit Success',
        variant: 'alert',

        alert: {
          color: 'success'
        }
      });

      history('/apps/e-commerce/checkout');
    }
  });

  const { errors, values, handleSubmit, handleChange } = formik;

  const addCart = () => {
    values.color = values.color ? values.color : 'primaryDark';
    values.quantity = value;
    addToCart(values, cart.products);
    openSnackbar({
      open: true,
      message: 'Add To Cart Success',
      variant: 'alert',

      alert: {
        color: 'success'
      }
    });
  };

  return (
    <Stack sx={{ gap: 1 }}>
      <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
        <Rating
          name="simple-controlled"
          value={product.rating}
          icon={<StarFilled style={{ fontSize: 'inherit' }} />}
          emptyIcon={<StarOutlined style={{ fontSize: 'inherit' }} />}
          precision={0.1}
          readOnly
        />
        <Typography color="text.secondary">({product.rating?.toFixed(1)})</Typography>
      </Stack>
      <Typography variant="h3">{product.name}</Typography>
      <Chip
        size="small"
        label={product.isStock ? 'In Stock' : 'Out of Stock'}
        sx={{
          width: 'fit-content',
          borderRadius: '4px',
          color: product.isStock ? 'success.main' : 'error.main',
          bgcolor: product.isStock ? 'success.lighter' : 'error.lighter'
        }}
      />
      <Typography color="text.secondary">{product.about}</Typography>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Stack spacing={2.5}>
            <Stack direction="row" sx={{ gap: 8, alignItems: 'center' }}>
              <Typography color="text.secondary">Color</Typography>
              <RadioGroup row value={values.color} onChange={handleChange} aria-label="colors" name="color" id="color">
                {product.colors &&
                  product.colors.map((item, index) => {
                    const colorsData = getColor(item);
                    return (
                      <FormControlLabel
                        key={index}
                        value={item}
                        control={
                          <Radio
                            sx={{ p: 0.25 }}
                            disableRipple
                            checkedIcon={<Colors checked colorsData={colorsData} />}
                            icon={<Colors colorsData={colorsData} />}
                          />
                        }
                        label=""
                      />
                    );
                  })}
              </RadioGroup>
            </Stack>
            {errors.color && (
              <FormHelperText error id="standard-label-color">
                {errors.color}
              </FormHelperText>
            )}
            <Stack direction="row" sx={{ gap: 4.5, alignItems: 'center' }}>
              <Typography color="text.secondary">Quantity</Typography>
              <Stack sx={{ justifyContent: 'flex-end' }}>
                <Stack direction="row">
                  <TextField
                    name="rty-incre"
                    value={value > 0 ? value : ''}
                    onChange={(e) => setValue(Number(e.target.value))}
                    sx={{ '& .MuiOutlinedInput-input': { p: 1.25 }, width: '33%', '& .MuiOutlinedInput-root': { borderRadius: 0 } }}
                  />
                  <Stack>
                    <Button
                      key="one"
                      color="secondary"
                      variant="outlined"
                      onClick={() => setValue(value + 1)}
                      sx={{
                        px: 0.5,
                        py: 0.35,
                        minWidth: '0px !important',
                        borderRadius: 0,
                        borderLeft: 'none',
                        '&:hover': { borderLeft: 'none', borderColor: 'secondary.light' },
                        '&.Mui-disabled': { borderLeft: 'none', borderColor: 'secondary.light' }
                      }}
                    >
                      <UpOutlined style={{ fontSize: 'small' }} />
                    </Button>
                    <Button
                      key="three"
                      color="secondary"
                      variant="outlined"
                      disabled={value <= 1}
                      onClick={() => setValue(value - 1)}
                      sx={{
                        px: 0.5,
                        py: 0.35,
                        minWidth: '0px !important',
                        borderRadius: 0,
                        borderTop: 'none',
                        borderLeft: 'none',
                        '&:hover': { borderTop: 'none', borderLeft: 'none', borderColor: 'secondary.light' },
                        '&.Mui-disabled': { borderTop: 'none', borderLeft: 'none', borderColor: 'econdary.light' }
                      }}
                    >
                      <DownOutlined style={{ fontSize: 'small' }} />
                    </Button>
                  </Stack>
                </Stack>
                {value === 0 && <FormHelperText sx={{ color: 'error.main' }}>Please select quantity more than 0</FormHelperText>}
              </Stack>
            </Stack>
            <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
              <Typography variant="h3">${product.offerPrice}</Typography>
              {product.salePrice && (
                <Typography variant="h4" color="text.secondary" sx={{ textDecoration: 'line-through', opacity: 0.5, fontWeight: 400 }}>
                  ${product.salePrice}
                </Typography>
              )}
            </Stack>
          </Stack>
          <Stack direction="row" sx={{ gap: 2, alignItems: 'center', mt: 4 }}>
            <Button type="submit" fullWidth disabled={value < 1 || !product.isStock} color="primary" variant="contained" size="large">
              {!product.isStock ? 'Sold Out' : 'Buy Now'}
            </Button>

            {product.isStock && value > 0 && (
              <Button fullWidth color="secondary" variant="outlined" size="large" onClick={addCart}>
                Add to Cart
              </Button>
            )}
          </Stack>
        </Form>
      </FormikProvider>
    </Stack>
  );
}

Colors.propTypes = { checked: PropTypes.bool, colorsData: PropTypes.array };

ProductInfo.propTypes = { product: PropTypes.any };
