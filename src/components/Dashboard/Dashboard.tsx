import React, {memo} from 'react';
import Header from 'src/components/Header/Header';
import {Box, Container} from '@mui/material';
import {CONTENT_CONTAINER} from 'src/components/Dashboard/styles';

const Dashboard = () => {
  return (
    <>
      <Header />

      <Container sx={CONTENT_CONTAINER}>
        <Box display="flex">
          <div>Начальные пользователи</div>
          <div>-разделитель-</div>
          <div>Пользователи в работе с рейтингом</div>
        </Box>
      </Container>
    </>
  )
}

export default memo(Dashboard);