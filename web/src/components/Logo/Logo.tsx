import { type ReactNode } from 'react';

import iconDumbbell from '../../assets/icons/icon-dumbbell.png';

import './Logo.sass';

export function Logo(): ReactNode {
  return (
    <div className="logo">
      <div className="logo__image-wrapper">
        <img src={iconDumbbell} alt="FitnessBooking" className="logo__image" />
      </div>
      <span className="logo__title">FitnessBooking</span>
    </div>
  );
}
