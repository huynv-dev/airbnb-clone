'use client';

import { useCallback, useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Button } from '@/components/atoms';
import clsx from 'clsx';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;
    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={handleClose}
        className="fixed inset-0 z-40 bg-black/50"
        data-testid="modal-overlay"
      />

      {/* Modal Container */}
      <div
        className={clsx(
          'fixed inset-0 z-50 flex items-center justify-center px-4',
          showModal ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0',
          'transition-all duration-300',
        )}
        data-testid="modal-container"
      >
        <div className="w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-lg">
          {/* Header */}
          <div className="relative border-b p-5">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              data-testid="close-button"
            >
              <IoMdClose size={18} />
            </button>
            <h2 className="text-center text-lg font-semibold">{title}</h2>
          </div>

          {/* Body */}
          <div className="p-6">{body}</div>

          {/* Footer */}
          <div className="px-6 pb-6">
            <div className="flex flex-col gap-3">
              {secondaryAction && secondaryActionLabel && (
                <Button
                  disabled={disabled}
                  label={secondaryActionLabel}
                  onClick={handleSecondaryAction}
                  outline
                />
              )}
              <Button disabled={disabled} label={actionLabel} onClick={handleSubmit} />
            </div>
            {footer && <div className="mt-4">{footer}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
