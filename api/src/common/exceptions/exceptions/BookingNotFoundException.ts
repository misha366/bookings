export class BookingNotFoundException extends Error {
  constructor(public readonly bookingId: string) {
    super(`Booking "${bookingId}" not found`);
    this.name = 'BookingNotFoundException';
  }
}
