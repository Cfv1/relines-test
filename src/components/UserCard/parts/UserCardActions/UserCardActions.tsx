import React, {ComponentType, memo, useMemo} from 'react';

import {IUser} from 'src/models/IUser';
import {UserMode} from 'src/models/UserMode';
import UserCardShowModeActions from './parts/UserCardShowModeActions/UserCardShowModeActions';
import UserCardRateModeActions from './parts/UserCardRateModeActions/UserCardRateModeActions';

const mapModeToComponent: Record<UserMode, ComponentType<UserCardActionsProps>> = {
  [UserMode.SHOW]: UserCardShowModeActions,
  [UserMode.RATE]: UserCardRateModeActions
}

interface IUserCardActionsProps {
  user: IUser;
  mode: UserMode;
}

const UserCardActions = (props: IUserCardActionsProps) => {
  const {mode, ...rest} = props;
  const Component = useMemo(() => mapModeToComponent[mode], [mode]);

  return <Component {...rest} />;
}

export default memo(UserCardActions);
export type UserCardActionsProps = Omit<IUserCardActionsProps, 'mode'>;