import type { ReactNode } from 'react';

import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

import { formatDate, formatTime } from '../../common';
import iconClose from '../../assets/icons/icon-close.svg';
import trainerPhoto from '../../assets/images/trainer.png';
import type { CalendarEventDetails } from '../../types';

import './CalendarEventDialog.sass';

type CalendarEventDialogProps = {
  event: CalendarEventDetails;
  onClose: () => void;
  onBook: () => void;
};

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
};

const TIME_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
};

export const CalendarEventDialog = ({
  event,
  onClose,
  onBook,
}: CalendarEventDialogProps): ReactNode => {
  return (
    <Dialog open onClose={onClose} className="event-dialog">
      <div className="event-dialog__backdrop" aria-hidden="true" />
      <div className="event-dialog__container">
        <DialogPanel className="event-dialog__panel dialog-panel">
          <button type="button" className="dialog-panel__close" onClick={onClose}>
            <img src={iconClose} alt="Close" />
          </button>
          <DialogTitle className="dialog-panel__title">Book Session</DialogTitle>
          <div className="dialog-panel__trainer trainer-card">
            <img src={trainerPhoto} alt={event.trainer} className="trainer-card__photo" />
            <div className="trainer-card__info">
              <span className="trainer-card__name">{event.trainer}</span>
              <span className="trainer-card__role">{event.title}</span>
            </div>
          </div>
          <div className="dialog-panel__content info-list">
            <div className="info-list__row info-row">
              <span className="info-row__label">Date</span>
              <span className="info-row__value">{formatDate({ date: event.start, options: DATE_OPTIONS })}</span>
            </div>
            <div className="info-list__row info-row">
              <span className="info-row__label">Time</span>
              <span className="info-row__value">
                {formatTime({ date: event.start, options: TIME_OPTIONS })} - {formatTime({ date: event.end, options: TIME_OPTIONS })}
              </span>
            </div>
            <div className="info-list__row info-row">
              <span className="info-row__label">Location</span>
              <span className="info-row__value">{event.location}</span>
            </div>
            <div className="info-list__row info-row">
              <span className="info-row__label">Type</span>
              <span className="info-row__value">
                {event.participationType === 'Group' ? 'Group Session' : 'Individual Session'}
              </span>
            </div>
            {event.participationType === 'Group' && (
              <div className="info-list__row info-row">
                <span className="info-row__label">Available Spots</span>
                <span className={`info-row__value info-row__value_${event.availability}`}>
                  {event.capacity - event.participants} of {event.capacity}
                </span>
              </div>
            )}
          </div>
          <div className="dialog-panel__actions action-buttons">
            <button type="button" className="action-buttons__button button button-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="action-buttons__button button button-primary" onClick={onBook}>
              Book Session
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
