export const MOCK_EVENTS = [
  // Current week: March 23-29, 2026
  // Monday 23
  { title: 'Spinning', start: '2026-03-23T06:00:00', end: '2026-03-23T07:00:00', extendedProps: { trainer: 'Lisa White', participationType: 'Group', participants: 25, capacity: 25, location: 'Spin Room', availability: 'full' } },
  { title: 'Yoga Class', start: '2026-03-23T07:00:00', end: '2026-03-23T08:00:00', extendedProps: { trainer: 'Sarah Elizabeth Montgomery-Richardson', participationType: 'Group', participants: 8, capacity: 15, location: 'Studio A', availability: 'available' } },
  { title: 'Personal Training', start: '2026-03-23T14:00:00', end: '2026-03-23T15:00:00', extendedProps: { trainer: 'Mike Smith', participationType: 'Individual', participants: 1, capacity: 1, location: 'Gym Floor', availability: 'available' } },
  // Tuesday 24
  { title: 'Swimming', start: '2026-03-24T08:00:00', end: '2026-03-24T09:00:00', extendedProps: { trainer: 'Anna Lee', participationType: 'Group', participants: 4, capacity: 10, location: 'Pool', availability: 'available' } },
  { title: 'Pilates', start: '2026-03-24T11:00:00', end: '2026-03-24T12:00:00', extendedProps: { trainer: 'Emma Davis', participationType: 'Group', participants: 10, capacity: 15, location: 'Studio B', availability: 'available' } },
  { title: 'CrossFit', start: '2026-03-24T16:00:00', end: '2026-03-24T17:00:00', extendedProps: { trainer: 'John Miller', participationType: 'Group', participants: 12, capacity: 20, location: 'CrossFit Box', availability: 'available' } },
  // Wednesday 25
  { title: 'Yoga Class', start: '2026-03-25T07:00:00', end: '2026-03-25T08:00:00', extendedProps: { trainer: 'Sarah Johnson', participationType: 'Group', participants: 6, capacity: 15, location: 'Studio A', availability: 'available' } },
  { title: 'Boxing', start: '2026-03-25T10:00:00', end: '2026-03-25T11:00:00', extendedProps: { trainer: 'Chris Brown', participationType: 'Individual', participants: 1, capacity: 1, location: 'Boxing Ring', availability: 'available' } },
  { title: 'Stretching', start: '2026-03-25T13:00:00', end: '2026-03-25T14:00:00', extendedProps: { trainer: 'Emma Davis', participationType: 'Group', participants: 3, capacity: 10, location: 'Studio B', availability: 'available' } },
  { title: 'Spinning', start: '2026-03-25T18:00:00', end: '2026-03-25T19:00:00', extendedProps: { trainer: 'Lisa White', participationType: 'Group', participants: 22, capacity: 25, location: 'Spin Room', availability: 'low' } },
  // Thursday 26
  { title: 'Swimming', start: '2026-03-26T08:00:00', end: '2026-03-26T09:00:00', extendedProps: { trainer: 'Anna Lee', participationType: 'Group', participants: 7, capacity: 10, location: 'Pool', availability: 'available' } },
  { title: 'Personal Training', start: '2026-03-26T11:00:00', end: '2026-03-26T12:00:00', extendedProps: { trainer: 'Mike Smith', participationType: 'Individual', participants: 1, capacity: 1, location: 'Gym Floor', availability: 'available' } },
  { title: 'CrossFit', start: '2026-03-26T17:00:00', end: '2026-03-26T18:00:00', extendedProps: { trainer: 'John Miller', participationType: 'Group', participants: 15, capacity: 20, location: 'CrossFit Box', availability: 'canceled' } },
  // Friday 27
  { title: 'Yoga Class', start: '2026-03-27T07:00:00', end: '2026-03-27T08:00:00', extendedProps: { trainer: 'Sarah Johnson', participationType: 'Group', participants: 10, capacity: 15, location: 'Studio A', availability: 'available' } },
  { title: 'Pilates', start: '2026-03-27T10:00:00', end: '2026-03-27T11:00:00', extendedProps: { trainer: 'Emma Davis', participationType: 'Group', participants: 14, capacity: 15, location: 'Studio B', availability: 'low' } },
  { title: 'Boxing', start: '2026-03-27T15:00:00', end: '2026-03-27T16:00:00', extendedProps: { trainer: 'Chris Brown', participationType: 'Individual', participants: 1, capacity: 1, location: 'Boxing Ring', availability: 'canceled' } },
  { title: 'Spinning', start: '2026-03-27T19:00:00', end: '2026-03-27T20:00:00', extendedProps: { trainer: 'Lisa White', participationType: 'Group', participants: 15, capacity: 25, location: 'Spin Room', availability: 'available' } },
  // Saturday 28
  { title: 'CrossFit', start: '2026-03-28T09:00:00', end: '2026-03-28T10:00:00', extendedProps: { trainer: 'John Miller', participationType: 'Group', participants: 18, capacity: 20, location: 'CrossFit Box', availability: 'low' } },
  { title: 'Swimming', start: '2026-03-28T11:00:00', end: '2026-03-28T12:00:00', extendedProps: { trainer: 'Anna Lee', participationType: 'Group', participants: 5, capacity: 10, location: 'Pool', availability: 'available' } },
  { title: 'Yoga Class', start: '2026-03-28T14:00:00', end: '2026-03-28T15:00:00', extendedProps: { trainer: 'Sarah Johnson', participationType: 'Group', participants: 15, capacity: 15, location: 'Studio A', availability: 'full' } },
  // Sunday 29
  { title: 'Stretching', start: '2026-03-29T10:00:00', end: '2026-03-29T11:00:00', extendedProps: { trainer: 'Emma Davis', participationType: 'Group', participants: 4, capacity: 10, location: 'Studio B', availability: 'available' } },
  { title: 'Personal Training', start: '2026-03-29T13:00:00', end: '2026-03-29T14:00:00', extendedProps: { trainer: 'Mike Smith', participationType: 'Individual', participants: 1, capacity: 1, location: 'Gym Floor', availability: 'available' } },

  { title: 'Yoga Class', start: '2026-03-30T09:00:00', end: '2026-03-30T10:00:00', extendedProps: { trainer: 'Sarah Johnson', participationType: 'Group', participants: 9, capacity: 15, location: 'Studio A', availability: 'available' } },
  { title: 'Pilates', start: '2026-04-01T11:00:00', end: '2026-04-01T12:00:00', extendedProps: { trainer: 'Emma Davis', participationType: 'Group', participants: 11, capacity: 15, location: 'Studio B', availability: 'available' } },
];
