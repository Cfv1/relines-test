import { useCallback, useState } from 'react';

export function useModal() {
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => setOpen(true), [setOpen]);
  const onClose = useCallback(() => setOpen(false), [setOpen]);

  return {
    open,
    onOpen,
    onClose,
  };
}
