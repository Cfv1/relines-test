import React, {useEffect, useState} from 'react';

import {Button, Dialog, DialogActions, DialogTitle} from '@mui/material';
import {IUser} from 'src/models/IUser';
import {useActions} from 'src/store/hooks/useActions';
import {useModal} from 'src/helpers/hooks/useModal';
import {Outcome} from 'src/models/Outcome';

const mapModalMessageToModePurpose: Record<Outcome, (username: string) => string> = {
  [Outcome.BAN]: (username) => `Пора забанить ${username}. Сделать это?`,
  [Outcome.REWARD]: (username) => `Нужно вознаградить ${username}. Сделать это?`,
};

const RatingLimit = {
  MAX: 5,
  MIN: -4,
};

interface IUseEditRatingModal {
  user: IUser;
  onSuccess?(): void;
  onCancel?(): void;
}

export function useEditRatingModal(props: IUseEditRatingModal) {
  const {user, onSuccess, onCancel} = props;

  const {decreaseRating, increaseRating, resetRating, setOutcome} = useActions();

  const {open, onOpen, onClose} = useModal();
  const [ratingOutcome, setRatingOutcome] = useState<Outcome>();

  useEffect(() => {
    if(user.rating <= RatingLimit.MIN) {
      setRatingOutcome(Outcome.BAN);
      onOpen();
    }

    if(user.rating >= RatingLimit.MAX) {
      setRatingOutcome(Outcome.REWARD);
      onOpen();
    }
  }, [onOpen, user.rating]);

  const onSuccessModal = () => {
    onClose();
    ratingOutcome && setOutcome({uid: user.uid, outcome: ratingOutcome});
    resetRating(user.uid);
    onSuccess && onSuccess();
  }

  const onCancelModal = () => {
    onClose();
    if(ratingOutcome === Outcome.BAN) {
      increaseRating(user.uid);
    } else {
      decreaseRating(user.uid);
    }
    onCancel && onCancel();
  }

  const modal = !!ratingOutcome ? (
    <Dialog open={open}>
      <DialogTitle align="center" variant="h5">
        {mapModalMessageToModePurpose[ratingOutcome](user.username)}
      </DialogTitle>

      <DialogActions>
        <Button onClick={onCancelModal} color="error">
          Отмена
        </Button>
        <Button onClick={onSuccessModal} color="primary">
          Да
        </Button>
      </DialogActions>
    </Dialog>
  ) : null;

  return {
    modal,
    onCancelModal,
    onSuccessModal
  }
}