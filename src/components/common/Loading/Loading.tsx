import React, {memo} from 'react';
import {Box} from '@mui/material';
import styles from 'src/components/common/Loading/Loading.module.css';
import {ROOT_CONTAINER} from 'src/components/common/Loading/styles';

const Loading = () => {
  return (
    <Box sx={ROOT_CONTAINER}>
      <div className={styles.heart}>
        <div/>
      </div>
    </Box>
  )
}

export default memo(Loading);