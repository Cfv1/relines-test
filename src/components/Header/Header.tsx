import React, {memo, useEffect, useMemo} from 'react';
import {AccountCircle} from '@mui/icons-material';
import {AppBar, Box, Container, Toolbar} from '@mui/material';

import {useAppSelector} from 'src/store/hooks/useAppSelector';
import {selectCurrent} from 'src/store/reducers/user/userSelector';
import {useAppDispatch} from 'src/store/hooks/useAppDispatch';
import {fetchUser} from 'src/store/services/user';
import {AVATAR_CONTAINER, CUSTOM_AVATAR, DEFAULT_AVATAR, HEADER, TOOLBAR} from './styles';
import {useErrorCommunication} from 'src/helpers/hooks/useErrorCommunication';
import UserInfoTooltip from 'src/components/common/UserInfoButton/UserInfoTooltip';

const Header = () => {
  const dispatch = useAppDispatch();

  const {currentUser, communication} = useAppSelector(selectCurrent);

  useErrorCommunication(communication);

  useEffect(() => {
    dispatch(fetchUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userAvatar = useMemo(() => {
    if(communication.isRequesting || !currentUser) {
      return <AccountCircle sx={DEFAULT_AVATAR} />;
    }

    return (
      <UserInfoTooltip user={currentUser}>
        <Box component="img" style={CUSTOM_AVATAR} src={currentUser.avatar} alt="avatar"/>
      </UserInfoTooltip>
    )
  }, [currentUser, communication.isRequesting])

  return (
    <AppBar position="static" sx={HEADER}>
      <Container>
        <Toolbar sx={TOOLBAR}>
          <Box sx={AVATAR_CONTAINER}>
            {userAvatar}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default memo(Header);