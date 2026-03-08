import { type ReactNode } from 'react';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

import './Calendar.sass';

export const Calendar = (): ReactNode => {
  const handleDateClick = (info: { dateStr: string }): void => {
    console.log('Date clicked:', info.dateStr);
  };

  const handleEventClick = (info: { event: { title: string } }): void => {
    console.log('Event clicked:', info.event.title);
  };

  return (
    <div className="calendar">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={[
          { title: 'Training Session', date: '2026-03-10' },
          { title: 'Personal Training', date: '2026-03-15' },
        ]}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        selectable={true}
      />
    </div>
  );
}
