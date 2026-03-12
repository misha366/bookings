import { type ReactNode } from 'react';

import { Calendar as CalendarComponent } from '../../components/Calendar';
import { CalendarSidebar } from '../../components/CalendarSidebar';

import './Calendar.sass';

export const Calendar = (): ReactNode => {
  return (
    <div className="calendar-page">
      <div className="calendar-page__content">
        <CalendarSidebar />
        <div className="calendar-page__calendar">
          <CalendarComponent />
        </div>
      </div>
    </div>
  );
}
