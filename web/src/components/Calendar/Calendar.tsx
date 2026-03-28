import { type CSSProperties, type ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import type { EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';

import { clientLogger } from '../../common';
import { MOCK_EVENTS } from '../../mock/events';
import { useAppSelector } from '../../store/hooks';
import type { CalendarEventDetails } from '../../types';
import { CalendarEvent } from '../CalendarEvent';
import { CalendarEventDialog } from '../CalendarEventDialog';

import './Calendar.sass';

export const Calendar = (): ReactNode => {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEventDetails | null>(null);
  const [indicatorPortalTarget, setIndicatorPortalTarget] = useState<HTMLElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<CSSProperties>({ width: 0, transform: 'translateX(0)' });

  const $calendar = useRef<FullCalendar>(null);
  const filters = useAppSelector((state) => state.filters);

  const updateIndicatorPosition = useCallback((target: HTMLElement, animate = true): void => {
    const activeViewButton = target.querySelector('.fc-button-active') as HTMLElement | null;
    if (activeViewButton === null) {
      clientLogger.warn('Calendar view switcher: active button not found');
      return;
    }

    setIndicatorStyle({
      width: activeViewButton.offsetWidth,
      transform: `translateX(${activeViewButton.offsetLeft}px)`,
      transition: animate ? undefined : 'none',
    });
  }, []);

  // on .calendar mount: sets portal target for view-indicator, then sets initial indicator position without animation
  const containerRef = useCallback((node: HTMLDivElement | null) => {
    if (node === null) return;

    const viewSwitcherButtonGroup = node.querySelector(
      '.fc-toolbar-chunk:last-child .fc-button-group',
    ) as HTMLElement | null;

    if (viewSwitcherButtonGroup === null) {
      clientLogger.warn('Calendar: view switcher button group not found');
      return;
    }

    setIndicatorPortalTarget(viewSwitcherButtonGroup);
    updateIndicatorPosition(viewSwitcherButtonGroup, false); // set initial position for view switcher indicator
  }, [updateIndicatorPosition]);

  const handleViewChange = (): void => {
    if (indicatorPortalTarget !== null) {
      updateIndicatorPosition(indicatorPortalTarget, true);
    }
  };

  const handleEventClick = (info: EventClickArg): void => {
    const { title, start, end, extendedProps } = info.event;
    const availability = extendedProps.availability as string;

    if (availability === 'full' || availability === 'canceled') {
      return;
    }

    setSelectedEvent({
      title,
      start,
      end,
      trainer: extendedProps.trainer as string,
      participationType: extendedProps.participationType as string,
      participants: extendedProps.participants as number,
      capacity: extendedProps.capacity as number,
      location: extendedProps.location as string,
      availability,
    });
  };

  const closeDialog = (): void => {
    setSelectedEvent(null);
  };

  const handleBook = (): void => {
    console.log('Booking session:', selectedEvent);
    closeDialog();
  };

  const filteredEvents = useMemo(() => {
    return MOCK_EVENTS.filter((event) => (
      (!filters.trainingType || event.title === filters.trainingType) &&
      (!filters.trainer || event.extendedProps.trainer === filters.trainer) &&
      (!filters.location || event.extendedProps.location === filters.location)
    ));
  }, [filters]);

  return (
    <div className="calendar" ref={containerRef}>
      <FullCalendar
        ref={$calendar}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        customButtons={{
          customPrev: {
            icon: 'custom-prev',
            click: () => $calendar.current?.getApi().prev(),
          },
          customNext: {
            icon: 'custom-next',
            click: () => $calendar.current?.getApi().next(),
          },
        }}
        headerToolbar={{
          left: 'title customPrev,customNext today',
          center: '',
          right: 'timeGridDay,timeGridWeek,dayGridMonth',
        }}
        buttonText={{
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day',
        }}
        dayHeaderContent={(arg) => {
          const weekday = arg.date.toLocaleDateString('en-US', { weekday: 'short' });
          if (arg.view.type === 'dayGridMonth') {
            return weekday;
          }
          return `${weekday} ${arg.date.getDate()}`;
        }}
        events={filteredEvents}
        eventContent={(arg) => {
          const { trainer, participationType, participants, capacity, location, availability } = arg.event.extendedProps;

          return (
            <CalendarEvent
              trainer={trainer as string}
              participationType={participationType as string}
              participants={participants as number}
              capacity={capacity as number}
              location={location as string}
              availability={availability as string}
            />
          );
        }}
        eventClick={handleEventClick}
        datesSet={handleViewChange}
        firstDay={1}
        editable={false}
        selectable={true}
        allDaySlot={false}
        dayMaxEvents={1}
        moreLinkClick={(info) => {
          $calendar.current?.getApi().changeView('timeGridDay', info.date);
        }}
        slotDuration="01:00:00"
        slotLabelFormat={{
          hour: 'numeric',
          minute: '2-digit',
          hour12: true,
        }}
      />

      {selectedEvent !== null && (
        <CalendarEventDialog
          event={selectedEvent}
          onClose={closeDialog}
          onBook={handleBook}
        />
      )}

      {indicatorPortalTarget !== null && createPortal(
        <div className="header-calendar-view-indicator" style={indicatorStyle} />,
        indicatorPortalTarget
      )}
    </div>
  );
}
