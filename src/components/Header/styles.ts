import {common, grey, pink, red} from '@mui/material/colors';

export const HEADER = {
  background: `linear-gradient(150deg, ${red[600]} 70%, ${pink[500]} 80%)`
}

export const TOOLBAR = {
  display: 'flex',
  justifyContent: 'end'
}

export const AVATAR_CONTAINER = {
  cursor: 'pointer',
  width: '30px',
  backgroundColor: common.white,
  borderRadius: '50%',
  border: `1px solid ${grey[300]}`,
  height: '30px',
}

export const DEFAULT_AVATAR = {
  width: '100%',
  height: '100%',
  color: common.black,
  opacity: 0.5
}

export const CUSTOM_AVATAR = {
  width: '100%',
  height: '100%',
  borderRadius: '50%'
}