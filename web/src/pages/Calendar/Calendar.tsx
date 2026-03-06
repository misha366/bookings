import { type ReactNode } from 'react';

import { Calendar as CalendarComponent } from '../../components/Calendar';
import { MyBookingsSidebar } from '../../components/MyBookingsSidebar';

import './Calendar.sass';

export function Calendar(): ReactNode {
  return (
    <div className="calendar-page">
      <div className="calendar-page__content">
        <MyBookingsSidebar />
        <div className="calendar-page__calendar">
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
}
