import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// third-party
import ReactApexChart from 'react-apexcharts';

// project imports
import useConfig from 'hooks/useConfig';
import { ThemeMode } from 'config';

// chart options
const areaChartOptions = {
  chart: { height: 350, type: 'area', background: 'transparent' },
  colors: ['primary.700', 'primary.main'],
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth' },
  xaxis: {
    type: 'datetime',
    categories: [
      '2018-09-19T00:00:00.000Z',
      '2018-09-19T01:30:00.000Z',
      '2018-09-19T02:30:00.000Z',
      '2018-09-19T03:30:00.000Z',
      '2018-09-19T04:30:00.000Z',
      '2018-09-19T05:30:00.000Z',
      '2018-09-19T06:30:00.000Z'
    ]
  },
  tooltip: { x: { format: 'dd/MM/yy HH:mm' } },
  legend: {
    show: true,
    fontFamily: `'Roboto', sans-serif`,
    position: 'bottom',
    offsetX: 10,
    offsetY: 10,
    labels: { useSeriesColors: false },
    markers: { width: 16, height: 16, radius: 5 },
    itemMargin: { horizontal: 15, vertical: 8 }
  }
};

// ==============================|| APEXCHART - AREA ||============================== //

export default function ApexAreaChart() {
  const theme = useTheme();

  const { mode } = useConfig();
  const { primary } = theme.palette.text;

  const [series] = useState([
    { name: 'Series 1', data: [31, 40, 28, 51, 42, 109, 100] },
    { name: 'Series 2', data: [11, 32, 45, 32, 34, 52, 41] }
  ]);

  const [options, setOptions] = useState(areaChartOptions);
  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.primary[700], theme.palette.primary.main],
      xaxis: {
        labels: {
          style: {
            colors: [primary, primary, primary, primary, primary, primary, primary]
          }
        }
      },
      yaxis: { labels: { style: { colors: [primary] } } },
      grid: { borderColor: theme.palette.divider },
      legend: { labels: { colors: 'grey.500' } },
      theme: {
        mode: mode === ThemeMode.DARK ? 'dark' : 'light'
      }
    }));
  }, [mode, primary, theme]);

  return (
    <Box id="chart" sx={{ bgcolor: 'transparent' }}>
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </Box>
  );
}
