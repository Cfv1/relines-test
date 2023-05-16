import React from "react";
import {ISnackInfo} from 'src/components/common/Snackbar/SnackbarProvider';

export interface ISnackbarContext {
  snack: ISnackInfo;
  setSnack(props: ISnackInfo): void;
}

export const SnackbarContext = React.createContext<ISnackbarContext>(null as any);

export default function useSnackbar() {
  return React.useContext(SnackbarContext);
}
