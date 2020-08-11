// @ts
import React from 'react';
import { ConfirmationDialog, ConfirmationOptions } from '../modules/Shared/ConfirmationModal/ConfirmationModal.component';

const ConfirmationServiceContext = (
  React.createContext<(options: ConfirmationOptions) =>
  (Promise<void>)
  >(Promise.reject)
);

export const useConfirmation = () => (
  React.useContext(ConfirmationServiceContext)
);

export const ConfirmationServiceProvider = (
  { children }: { children: React.ReactNode },
) => {
  const [
    confirmationState,
    setConfirmationState,
  ] = React.useState<ConfirmationOptions>({ catchOnCancel: false, title: '', description: '' });

  const awaitingPromiseRef = React.useRef<{
    resolve:() => void;
    reject: () => void;
  }>();

  const openConfirmation = (options: ConfirmationOptions) => {
    setConfirmationState(options);
    return new Promise<void>((resolve, reject) => {
      awaitingPromiseRef.current = { resolve, reject };
    });
  };

  const handleClose = () => {
    if (confirmationState
      && confirmationState.catchOnCancel
      && awaitingPromiseRef.current) {
      awaitingPromiseRef.current.reject();
    }

    setConfirmationState({ catchOnCancel: false, title: '', description: '' });
  };

  const handleSubmit = () => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.resolve();
    }

    setConfirmationState({ catchOnCancel: false, title: '', description: '' });
  };

  return (
    <>
      <ConfirmationServiceContext.Provider
        value={openConfirmation}
      >
        {children}
      </ConfirmationServiceContext.Provider>

      <ConfirmationDialog
        open={confirmationState.catchOnCancel}
        onSubmit={handleSubmit}
        onClose={handleClose}
        {...confirmationState}
      />
    </>
  );
};
