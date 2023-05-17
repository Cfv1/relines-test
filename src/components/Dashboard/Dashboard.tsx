import React, {memo} from 'react';
import Header from 'src/components/Header/Header';
import {Box, Container} from '@mui/material';
import {CONTENT_CONTAINER, SEPARATOR} from 'src/components/Dashboard/styles';
import InitialUsers from 'src/components/InitialUsers/InitialUsers';
import WorkingUsers from 'src/components/WorkingUsers/WorkingUsers';

const Dashboard = () => {
  return (
    <>
      <Header />

      <Container sx={CONTENT_CONTAINER}>
        <Box display="flex">
          <InitialUsers />
          <Box sx={SEPARATOR} />
          <WorkingUsers />
        </Box>
      </Container>
    </>
  )
}

export default memo(Dashboard);