import React, {memo, useState} from 'react';
import {Alert, Snackbar} from '@mui/material';

import { SnackbarContext } from 'src/components/common/Snackbar/useSnackbar';

const initialSnack = {
  message: '',
  open: false
}

export interface ISnackInfo {
  message: string;
  open: boolean;
}

const SnackbarProvider = ({children}: React.PropsWithChildren) => {
  const [snack, setSnack] = useState<ISnackInfo>(initialSnack);

  const onClose = () => {
    setSnack(initialSnack);
  }

  return (
    <SnackbarContext.Provider value={{snack, setSnack}}>
      <Snackbar onClose={onClose} open={snack.open} autoHideDuration={2000} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
        <Alert severity="error">{snack.message}</Alert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  )
}

export default memo(SnackbarProvider);