import {memo} from 'react';
import {IconButton, IconButtonProps, styled} from '@mui/material';
import {common, pink} from '@mui/material/colors';

const ColorIconButton = styled(IconButton)<IconButtonProps>(() => ({
  color: pink[500],
  backgroundColor: common.white,
    '&:hover': {
      color: pink[700],
    },
}));

export default memo(ColorIconButton);