import type { EventApi } from '@fullcalendar/core';

export type TrainingSessionDetails = {
  trainer: string;
  participationType: string;
  participants: number;
  capacity: number;
  location: string;
  availability: string;
};

export type CalendarEventDetails = Pick<EventApi, 'title' | 'start' | 'end'> & TrainingSessionDetails;

export type MyBookingsFilter = 'upcoming' | 'past' | 'canceled';
