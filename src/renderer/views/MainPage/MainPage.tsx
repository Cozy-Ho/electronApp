import { useNavigate } from 'react-router';
import { Button, Box, Typography } from '@mui/material';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: '50%',
          height: '100%',
          backgroundColor: '#FFE0E0',
        }}
      >
        <Box sx={{ width: '100%', textAlign: 'right' }}>
          <Button
            // variant="contained"
            // color="black"
            onClick={() => {
              navigate('/ezbridge');
            }}
          ></Button>
          <Typography variant="h1" gutterBottom>
            ezbridge
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: '50%',
          height: '100%',
          backgroundColor: '#C6D6FF',
        }}
      >
        <Button
          onClick={() => {
            navigate('/ezdentweb');
          }}
        ></Button>
        <Typography variant="h1" gutterBottom>
          ezdentweb
        </Typography>
      </Box>
    </Box>
  );
};

export default MainPage;
