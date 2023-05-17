import React, {JSX, memo} from 'react';
import {Box, Tooltip, useTheme} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BlockIcon from '@mui/icons-material/Block';
import useMediaQuery from '@mui/material/useMediaQuery';

import UserInfoTooltip from 'src/components/common/UserInfoButton/UserInfoTooltip';
import {Outcome} from 'src/models/Outcome';
import {IUser} from 'src/models/IUser';
import {BAN_OUTCOME, OUTCOME_CONTAINER, PRIZE_OUTCOME, TOOLTIP_CONTAINER} from './styles';

const mapOutcomeDescriptionToOutcome: Record<Outcome, string> = {
  [Outcome.REWARD]: 'Пользователь был вознагражден',
  [Outcome.BAN]: 'Пользователь был забанен'
};

const mapIconToOutcome: Record<Outcome, JSX.Element> = {
  [Outcome.REWARD]: <EmojiEventsIcon sx={PRIZE_OUTCOME}/>,
  [Outcome.BAN]: <BlockIcon sx={BAN_OUTCOME}/>
};

interface IUserCardAvatarHeaderProps {
  user: IUser;
}

const UserCardAvatarHeader = (props: IUserCardAvatarHeaderProps) => {
  const {user} = props;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      {user.lastOutcome && (
        <Tooltip title={mapOutcomeDescriptionToOutcome[user.lastOutcome]} data-testid="outcome">
          <Box sx={OUTCOME_CONTAINER}>
            {mapIconToOutcome[user.lastOutcome]}
          </Box>
        </Tooltip>
      )}
      {!matches && (
        <Box sx={TOOLTIP_CONTAINER}>
          <UserInfoTooltip user={user}>
            <HelpOutlineIcon />
          </UserInfoTooltip>
        </Box>
      )}
    </>
  )
}

export default memo(UserCardAvatarHeader);