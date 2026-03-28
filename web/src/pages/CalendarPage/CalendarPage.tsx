import { type ReactNode } from 'react';

import { Calendar } from '../../components/Calendar';
import { CalendarSidebar } from '../../components/CalendarSidebar';

import './CalendarPage.sass';

export const CalendarPage = (): ReactNode => {
  return (
    <div className="calendar-page">
      <div className="calendar-page__content">
        <CalendarSidebar />
        <div className="calendar-page__calendar">
          <Calendar />
        </div>
      </div>
    </div>
  );
}
