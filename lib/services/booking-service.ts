export interface Booking {
  id: string;
  providerId: string;
  providerName: string;
  providerEmail: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceType: string;
  startDate: string;
  endDate: string;
  numberOfDogs: number;
  dogDetails?: string;
  message?: string;
  status: 'pending' | 'accepted' | 'declined' | 'completed' | 'cancelled';
  createdAt: string;
}

// Server-side in-memory storage for demo purposes
let serverBookings: Booking[] = [];

function isServer(): boolean {
  return typeof window === 'undefined';
}

export function getAllBookings(): Booking[] {
  if (isServer()) {
    return serverBookings;
  }
  const bookings = localStorage.getItem('tourpet_bookings');
  return bookings ? JSON.parse(bookings) : [];
}

export function getBookingsByProviderId(providerId: string): Booking[] {
  const bookings = getAllBookings();
  return bookings.filter(b => b.providerId === providerId);
}

export function getBookingsByCustomerId(customerId: string): Booking[] {
  const bookings = getAllBookings();
  return bookings.filter(b => b.customerId === customerId);
}

export function createBooking(bookingData: Omit<Booking, 'id' | 'createdAt' | 'status'>): Booking {
  const newBooking: Booking = {
    ...bookingData,
    id: `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  if (isServer()) {
    serverBookings.push(newBooking);
  } else {
    const bookings = getAllBookings();
    bookings.push(newBooking);
    localStorage.setItem('tourpet_bookings', JSON.stringify(bookings));
  }

  return newBooking;
}

export function updateBookingStatus(bookingId: string, status: Booking['status']): boolean {
  if (isServer()) {
    const index = serverBookings.findIndex(b => b.id === bookingId);
    if (index === -1) return false;
    serverBookings[index].status = status;
    return true;
  } else {
    const bookings = getAllBookings();
    const index = bookings.findIndex(b => b.id === bookingId);
    if (index === -1) return false;
    bookings[index].status = status;
    localStorage.setItem('tourpet_bookings', JSON.stringify(bookings));
    return true;
  }
}
