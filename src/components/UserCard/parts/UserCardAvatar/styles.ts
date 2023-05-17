import {common, grey, red} from '@mui/material/colors';

export const ROOT_CONTAINER = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 210,
  backgroundImage: `linear-gradient(140deg, ${red[500]} 50%, ${common.white} 50%)`
};

export const IMAGE_DEFAULT = {
  width: 170,
  height: 170,
  backgroundColor: grey[300],
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  borderRadius: '50%'
}

export const IMAGE_MOBILE = {
  ...IMAGE_DEFAULT,
  width: 120,
  height: 120,
}
