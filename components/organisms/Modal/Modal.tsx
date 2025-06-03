'use client';

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "@/components/atoms";
import styles from './Modal.module.css';
import clsx from "clsx";

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
  secondaryActionLabel
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
  
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className={styles.overlay}
        onClick={handleClose}
        data-testid="modal-overlay"
      />
      <div
        className={clsx(
          styles.container,
          showModal ? styles.show : styles.hide
        )}
        data-testid="modal-container"
      >
        {/* Content */}
        <div className={styles.content}>
          {/* Header */}
          <div className={styles.header}>
            <button 
              className={styles.closeButton}
              onClick={handleClose}
              data-testid="close-button"
            >
              <IoMdClose size={18} />
            </button>
            <div className={styles.title}>
              {title}
            </div>
          </div>
          {/* Body */}
          <div className={styles.body}>
            {body}
          </div>
          {/* Footer */}
          <div className={styles.footer}>
            <div className={styles.buttonContainer}>
              {secondaryAction && secondaryActionLabel && (
                <Button
                  disabled={disabled}
                  label={secondaryActionLabel}
                  onClick={handleSecondaryAction}
                  outline
                />
              )}
              <Button
                disabled={disabled}
                label={actionLabel}
                onClick={handleSubmit}
              />
            </div>
            {footer}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal; 