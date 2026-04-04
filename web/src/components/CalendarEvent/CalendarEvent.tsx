import type { ReactNode } from 'react';

import type { TrainingSessionDetails } from '../../types';

import './CalendarEvent.sass';

export const CalendarEvent = ({
  trainer,
  participationType,
  participants,
  capacity,
  location,
  availability,
}: TrainingSessionDetails): ReactNode => {
  const isCancelled = availability === 'canceled';
  const isDisabled = availability === 'full' || availability === 'canceled';

  return (
    <div className={`event-card${isDisabled ? ' event-card_disabled' : ''}${isCancelled ? ' event-card_cancelled' : ''}`}>
      <span className={`event-card__availability event-card__availability_${availability}`} />
      <div className="event-card__letter">{trainer.charAt(0)}</div>
      <div className="event-card__trainer">{trainer}</div>
      <div className="event-card__info">
        {isCancelled ? (
          <span className="event-card__status">Cancelled</span>
        ) : (
          <>
            <span>{participationType}</span>
            {participationType === 'Group' && <span> • {participants}/{capacity}</span>}
          </>
        )}
      </div>
      <div className="event-card__location">{location}</div>
    </div>
  );
};
