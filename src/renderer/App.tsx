import { Box } from '@mui/material';
import { MemoryRouter as Router } from 'react-router-dom';
import { WithRouter } from './components';
import pages from './views/RouteGlobal';

export default function App() {
  return (
    <Box sx={{ height: '100vh', minWidth: 720, width: '100vw' }}>
      <Router>
        <WithRouter pages={pages} />
      </Router>
    </Box>
  );
}
