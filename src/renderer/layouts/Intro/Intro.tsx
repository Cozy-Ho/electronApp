import { Box } from '@mui/material';
import { Children } from 'renderer/types';

const Intro = (children: Children) => {
  //
  return <Box sx={{ height: '100vh', width: '100vw' }}>{children}</Box>;
};

export default Intro;
