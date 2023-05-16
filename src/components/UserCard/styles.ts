import {grey} from '@mui/material/colors';

const container_default = {
  padding: 0,
  borderRadius: 0,
  border: `1px solid ${grey[300]}`,
  boxShadow: 'rgba(0, 0, 0, 0.2) 5px 5px 15px',
  margin: '10px'
}

export const ROOT_CONTAINER = {
  ...container_default,
  width: 265,
  height: 375,
};

export const ROOT_CONTAINER_MOBILE = {
  ...container_default,
  width: 160,
  height: 295
}