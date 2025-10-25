/**
 * Availability Service
 * Manages provider availability schedules and date exceptions
 */

export interface TimeSlot {
  start: string; // Format: "HH:MM"
  end: string;   // Format: "HH:MM"
}

export interface DaySchedule {
  enabled: boolean;
  slots: TimeSlot[];
}

export interface WeeklyAvailability {
  monday: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
  sunday: DaySchedule;
}

export interface DateException {
  date: string; // Format: "YYYY-MM-DD"
  reason?: string;
}

export interface ProviderAvailability {
  providerId: string;
  weeklySchedule: WeeklyAvailability;
  dateExceptions: DateException[];
}

// Storage key for availability data
const STORAGE_KEY = 'tourpet_provider_availability';

/**
 * Get all provider availability data from storage
 */
function getAllAvailability(): Record<string, ProviderAvailability> {
  if (typeof window === 'undefined') return {};

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Error reading availability data:', error);
    return {};
  }
}

/**
 * Save all provider availability data to storage
 */
function saveAllAvailability(data: Record<string, ProviderAvailability>): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving availability data:', error);
  }
}

/**
 * Get availability for a specific provider
 */
export function getProviderAvailability(providerId: string): ProviderAvailability | null {
  const allData = getAllAvailability();
  return allData[providerId] || null;
}

/**
 * Save availability for a specific provider
 */
export function saveProviderAvailability(
  providerId: string,
  availability: Partial<ProviderAvailability>
): void {
  const allData = getAllAvailability();

  allData[providerId] = {
    providerId,
    weeklySchedule: availability.weeklySchedule || getDefaultWeeklySchedule(),
    dateExceptions: availability.dateExceptions || [],
  };

  saveAllAvailability(allData);
}

/**
 * Get default weekly schedule (Monday-Friday 9AM-5PM)
 */
export function getDefaultWeeklySchedule(): WeeklyAvailability {
  const weekdaySchedule: DaySchedule = {
    enabled: true,
    slots: [
      { start: '09:00', end: '12:00' },
      { start: '13:00', end: '17:00' },
    ],
  };

  const weekendSchedule: DaySchedule = {
    enabled: false,
    slots: [],
  };

  return {
    monday: weekdaySchedule,
    tuesday: weekdaySchedule,
    wednesday: weekdaySchedule,
    thursday: weekdaySchedule,
    friday: weekdaySchedule,
    saturday: weekendSchedule,
    sunday: weekendSchedule,
  };
}

/**
 * Check if a provider is available on a specific date and time
 */
export function isProviderAvailable(
  providerId: string,
  date: Date,
  startTime: string, // Format: "HH:MM"
  endTime: string    // Format: "HH:MM"
): boolean {
  const availability = getProviderAvailability(providerId);
  if (!availability) return false;

  // Check date exceptions
  const dateString = date.toISOString().split('T')[0];
  const hasException = availability.dateExceptions.some(
    exception => exception.date === dateString
  );
  if (hasException) return false;

  // Get day of week (0 = Sunday, 1 = Monday, etc.)
  const dayOfWeek = date.getDay();
  const dayNames: (keyof WeeklyAvailability)[] = [
    'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
  ];
  const dayName = dayNames[dayOfWeek];

  const daySchedule = availability.weeklySchedule[dayName];
  if (!daySchedule.enabled) return false;

  // Check if requested time falls within any available slot
  return daySchedule.slots.some(slot => {
    return isTimeInRange(startTime, endTime, slot.start, slot.end);
  });
}

/**
 * Check if a time range is within another time range
 */
function isTimeInRange(
  requestStart: string,
  requestEnd: string,
  slotStart: string,
  slotEnd: string
): boolean {
  const reqStart = timeToMinutes(requestStart);
  const reqEnd = timeToMinutes(requestEnd);
  const slStart = timeToMinutes(slotStart);
  const slEnd = timeToMinutes(slotEnd);

  return reqStart >= slStart && reqEnd <= slEnd;
}

/**
 * Convert time string to minutes since midnight
 */
function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

/**
 * Get available time slots for a specific date
 */
export function getAvailableSlots(
  providerId: string,
  date: Date,
  slotDuration: number = 60 // Duration in minutes
): string[] {
  const availability = getProviderAvailability(providerId);
  if (!availability) return [];

  // Check date exceptions
  const dateString = date.toISOString().split('T')[0];
  const hasException = availability.dateExceptions.some(
    exception => exception.date === dateString
  );
  if (hasException) return [];

  // Get day schedule
  const dayOfWeek = date.getDay();
  const dayNames: (keyof WeeklyAvailability)[] = [
    'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
  ];
  const dayName = dayNames[dayOfWeek];
  const daySchedule = availability.weeklySchedule[dayName];

  if (!daySchedule.enabled) return [];

  // Generate slots
  const slots: string[] = [];
  daySchedule.slots.forEach(timeSlot => {
    const startMinutes = timeToMinutes(timeSlot.start);
    const endMinutes = timeToMinutes(timeSlot.end);

    for (let minutes = startMinutes; minutes + slotDuration <= endMinutes; minutes += slotDuration) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      const timeString = `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
      slots.push(timeString);
    }
  });

  return slots;
}
