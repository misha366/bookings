import { type ReactNode } from 'react';

import iconDumbbell from '../../assets/icons/icon-dumbbell.png';

import './Logo.sass';

export const Logo = (): ReactNode => {
  return (
    <div className="logo">
      <div className="logo__image-wrapper logo-image">
        <img src={iconDumbbell} alt="FitnessBooking" className="logo-image__icon" />
      </div>
      <span className="logo__title">FitnessBooking</span>
    </div>
  );
}
