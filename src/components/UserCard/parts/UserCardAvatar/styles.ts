import {common, grey, red, yellow} from '@mui/material/colors';

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

export const TOOLTIP_CONTAINER = {
  position: 'absolute',
  top: 5,
  right: 5,
  color: grey[800]
}

export const OUTCOME_CONTAINER = {
  position: 'absolute',
  top: 5,
  left: 5
}

const outcome_default = {
  borderRadius: '50%',
  color: red[500]
}

export const PRIZE_OUTCOME = {
  ...outcome_default,
  background: `linear-gradient(90deg, ${yellow[100]} 50%, ${yellow[400]} 50%)`
}

export const BAN_OUTCOME = {
  ...outcome_default,
  background: common.white
}