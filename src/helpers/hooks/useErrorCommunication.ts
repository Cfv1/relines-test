import {useEffect} from 'react';
import useSnackbar from 'src/common/Snackbar/useSnackbar';
import {usePrevious} from 'src/helpers/hooks/usePrevious';
import {ICommunication} from 'src/models/common/ICommunication';

export function useErrorCommunication(communication: ICommunication) {
  const prevCommunication = usePrevious<ICommunication>(communication);

  const {setSnack} = useSnackbar();

  useEffect(() => {
    if (prevCommunication?.isRequesting && !communication.isRequesting && !!communication.error) {
      setTimeout(() => setSnack({message: communication.error!, open: true}), 0);
    }
  }, [setSnack, prevCommunication?.isRequesting, communication.isRequesting, communication.error]);
}
