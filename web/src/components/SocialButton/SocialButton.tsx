import { type ReactNode, useEffect, useRef, useState } from 'react';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

import './SocialButton.sass';

const GAP_SIZE = 8;
const CENTER_DIVISOR = 2;

type SocialButtonProps = {
  icon: string;
  text: string;
  variant: 'google' | 'apple';
};

export const SocialButton = ({ icon, text, variant }: SocialButtonProps): ReactNode => {
  const $buttonText = useRef<HTMLSpanElement>(null);

  const [iconCenterOffset, setIconCenterOffset] = useState(0);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if ($buttonText.current !== null) {
      setIconCenterOffset(($buttonText.current.offsetWidth + GAP_SIZE) / CENTER_DIVISOR);
    }
  }, []);

  return (
    <>
      <button
        type="button"
        className="social-button"
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        onClick={() => setIsDialogOpen(true)}
      >
        <img
          className={`social-button__icon social-button__icon_${variant}`}
          src={icon}
          alt={text}
          style={{
            transform: isButtonHovered ? `translateX(${iconCenterOffset}px) scale(1.3)` : 'none',
          }}
        />
        <span
          ref={$buttonText}
          className="social-button__text"
          style={{
            opacity: isButtonHovered ? 0 : 1,
            transform: isButtonHovered ? 'translateX(20px)' : 'none',
          }}
        >
          {text}
        </span>
      </button>

      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} className="social-dialog">
        <div className="social-dialog__backdrop" aria-hidden="true" />
        <div className="social-dialog__container">
          <DialogPanel className="social-dialog__panel">
            <DialogTitle className="social-dialog__title">Coming Soon</DialogTitle>
            <p className="social-dialog__text">
              {text} authentication is currently in development. Please use email and password to sign in.
            </p>
            <button
              type="button"
              className="social-dialog__button btn-primary"
              onClick={() => setIsDialogOpen(false)}
            >
              Got it
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
