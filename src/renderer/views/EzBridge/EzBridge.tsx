import { useNavigate } from 'react-router';
import { Button } from '@mui/material';

const EzBridge = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Hello EzBridge page.</div>
      <Button
        variant="outlined"
        onClick={() => {
          navigate('/');
        }}
      >
        Back
      </Button>
    </>
  );
};

export default EzBridge;
