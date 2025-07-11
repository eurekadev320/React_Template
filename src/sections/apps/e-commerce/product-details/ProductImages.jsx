import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// project imports
import MainCard from 'components/MainCard';
import Avatar from 'components/@extended/Avatar';
import IconButton from 'components/@extended/IconButton';

import { openSnackbar } from 'api/snackbar';
import { getImageUrl, ImagePath } from 'utils/getImageUrl';

// third-party
import Slider from 'react-slick';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

// assets
import ZoomInOutlined from '@ant-design/icons/ZoomInOutlined';
import ZoomOutOutlined from '@ant-design/icons/ZoomOutOutlined';
import RedoOutlined from '@ant-design/icons/RedoOutlined';
import HeartFilled from '@ant-design/icons/HeartFilled';
import HeartOutlined from '@ant-design/icons/HeartOutlined';
import DownOutlined from '@ant-design/icons/DownOutlined';
import UpOutlined from '@ant-design/icons/UpOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import LeftOutlined from '@ant-design/icons/LeftOutlined';

import prod1 from 'assets/images/e-commerce/prod-1.png';
import prod2 from 'assets/images/e-commerce/prod-2.png';
import prod3 from 'assets/images/e-commerce/prod-3.png';
import prod4 from 'assets/images/e-commerce/prod-4.png';
import prod5 from 'assets/images/e-commerce/prod-5.png';
import prod6 from 'assets/images/e-commerce/prod-6.png';
import prod7 from 'assets/images/e-commerce/prod-7.png';
import prod8 from 'assets/images/e-commerce/prod-8.png';
import prod9 from 'assets/images/e-commerce/prod-9.png';

function ArrowUp({ currentSlide, slideCount, ...props }) {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Box
      {...props}
      color="secondary"
      className={'prev' + (currentSlide === 0 ? ' slick-disabled' : '')}
      aria-hidden="true"
      aria-disabled={currentSlide === 0 && slideCount !== 0 ? true : false}
      sx={{
        cursor: 'pointer',
        '&:hover': { bgcolor: 'transparent' },
        bgcolor: 'background.paper',
        color: 'secondary.light',
        border: '1px solid',
        borderColor: 'grey.200',
        borderRadius: 1,
        p: 0.75,
        mr: 1.25,
        ...(!downMD && { mb: 1.25, mr: 0 }),
        lineHeight: 0,
        '&:after': { boxShadow: 'none' }
      }}
    >
      {downMD ? <LeftOutlined style={{ fontSize: 'small' }} /> : <UpOutlined style={{ fontSize: 'small' }} />}
    </Box>
  );
}

function ArrowDown({ currentSlide, slideCount, ...props }) {
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Box
      {...props}
      color="secondary"
      className={'next' + (currentSlide === Number(slideCount) - 1 ? ' slick-disabled' : '')}
      aria-hidden="true"
      aria-disabled={currentSlide === Number(slideCount) - 1 ? true : false}
      sx={{
        cursor: 'pointer',
        '&:hover': { bgcolor: 'transparent' },
        bgcolor: 'background.paper',
        color: 'secondary.light',
        border: '1px solid',
        borderColor: 'grey.200',
        borderRadius: 1,
        p: 0.75,
        ml: 1.5,
        ...(!downMD && { mt: 1.25, ml: 0 }),
        lineHeight: 0,
        '&:after': { boxShadow: 'none' }
      }}
    >
      {downMD ? <RightOutlined style={{ fontSize: 'small' }} /> : <DownOutlined style={{ fontSize: 'small' }} />}
    </Box>
  );
}

// ==============================|| PRODUCT DETAILS - IMAGES ||============================== //

export default function ProductImages({ product }) {
  const products = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9];

  const upLG = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const downMD = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const [selected, setSelected] = useState('');
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setSelected(product && product?.image ? getImageUrl(`${product.image}`, ImagePath.ECOMMERCE) : '');
  }, [product]);

  const [wishlisted, setWishlisted] = useState(false);
  const addToFavourite = () => {
    setWishlisted(!wishlisted);
    openSnackbar({
      open: true,
      message: !wishlisted ? 'Added to favorites' : 'Removed from favorites',
      variant: 'alert',

      alert: {
        color: 'success'
      }
    });
  };

  const lgNo = upLG ? 5 : 4;

  const settings = {
    rows: 1,
    vertical: !downMD,
    verticalSwiping: !downMD,
    dots: false,
    initialSlide: Number(product.id) + 1,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '0px',
    slidesToShow: products.length > 3 ? lgNo : products.length,
    prevArrow: <ArrowUp />,
    nextArrow: <ArrowDown />
  };

  return (
    <Grid container spacing={0.5}>
      <Grid size={{ xs: 12, md: 10, lg: 9 }}>
        <MainCard
          content={false}
          border={false}
          boxShadow={false}
          shadow={false}
          sx={(theme) => ({
            m: '0 auto',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'secondary.lighter',
            ...theme.applyStyles('dark', { bgcolor: 'grey.50' }),
            '& .react-transform-wrapper': { cursor: 'crosshair', height: '100%' },
            '& .react-transform-component': { height: '100%' }
          })}
        >
          <TransformWrapper initialScale={1}>
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <TransformComponent>
                  <CardMedia
                    onClick={() => setModal(!modal)}
                    component="img"
                    image={selected}
                    title="Scroll Zoom"
                    sx={{ borderRadius: `4px`, position: 'relative' }}
                  />
                </TransformComponent>
                <Stack direction="row" className="tools" sx={{ position: 'absolute', bottom: 10, right: 10, zIndex: 1 }}>
                  <IconButton color="secondary" onClick={() => zoomIn()}>
                    <ZoomInOutlined style={{ fontSize: '1.15rem' }} />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => zoomOut()}>
                    <ZoomOutOutlined style={{ fontSize: '1.15rem' }} />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => resetTransform()}>
                    <RedoOutlined style={{ fontSize: '1.15rem' }} />
                  </IconButton>
                </Stack>
              </>
            )}
          </TransformWrapper>
          <IconButton
            color={wishlisted ? 'error' : 'secondary'}
            sx={{ ml: 'auto', position: 'absolute', top: 5, right: 5, '&:hover': { bgcolor: 'transparent' } }}
            onClick={addToFavourite}
          >
            {wishlisted ? <HeartFilled style={{ fontSize: '1.15rem' }} /> : <HeartOutlined style={{ fontSize: '1.15rem' }} />}
          </IconButton>
        </MainCard>
      </Grid>
      <Grid sx={{ height: '100%' }} size={{ xs: 12, md: 2, lg: 3 }}>
        <Box
          sx={{
            '& .slick-slider': {
              display: 'flex',
              alignItems: 'center',
              mt: 2
            },
            ...(!downMD && {
              display: 'flex',
              height: '100%',
              '& .slick-slider': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: { xs: 0, md: 3, lg: 1.25 },
                width: { xs: 72, lg: 100 }
              },
              '& .slick-arrow': {
                '&:hover': { bgcolor: 'grey.A200' },
                position: 'initial',
                color: 'grey.500',
                bgcolor: 'grey.A200',
                p: 0,
                transform: 'rotate(90deg)',
                borderRadius: '50%',
                height: 17,
                width: 19
              }
            })
          }}
        >
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <Box key={index} onClick={() => setSelected(getImageUrl(`prod-${item}.png`, ImagePath.ECOMMERCE))} sx={{ p: 1 }}>
                <Avatar
                  size={upLG ? 'xl' : 'md'}
                  src={getImageUrl(`prod-${item}.png`, ImagePath.ECOMMERCE)}
                  variant="rounded"
                  sx={{ m: '0 auto', cursor: 'pointer', bgcolor: 'grey.0', border: '1px solid', borderColor: 'grey.200' }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Grid>
    </Grid>
  );
}

ArrowUp.propTypes = { currentSlide: PropTypes.any, slideCount: PropTypes.any, props: PropTypes.any };

ArrowDown.propTypes = { currentSlide: PropTypes.any, slideCount: PropTypes.any, props: PropTypes.any };

ProductImages.propTypes = { product: PropTypes.any };
