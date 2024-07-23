import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100%',
  border: '1px solid #ccc',
  background: '#f8f8f8',
});

export const StyledTable = styled(Box)(({ theme }) => ({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
}));
