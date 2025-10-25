'use client';

import { useState, useEffect } from 'react';
import { getProviderAvailability, getAvailableSlots } from '@/lib/services/availability-service';

interface TimeSlotSelectorProps {
  providerId: string;
  selectedDate: string;
  selectedSlot: string;
  onDateChange: (date: string) => void;
  onSlotChange: (slot: string) => void;
  slotDuration?: number;
}

export default function TimeSlotSelector({
  providerId,
  selectedDate,
  selectedSlot,
  onDateChange,
  onSlotChange,
  slotDuration = 60,
}: TimeSlotSelectorProps) {
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [blockedDates, setBlockedDates] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load provider's date exceptions
    const availability = getProviderAvailability(providerId);
    if (availability) {
      const blocked = new Set(availability.dateExceptions.map(e => e.date));
      setBlockedDates(blocked);
    }
  }, [providerId]);

  useEffect(() => {
    if (selectedDate) {
      const date = new Date(selectedDate + 'T00:00:00');
      const slots = getAvailableSlots(providerId, date, slotDuration);
      setAvailableSlots(slots);

      // Clear selected slot if it's not available on the new date
      if (selectedSlot && !slots.includes(selectedSlot)) {
        onSlotChange('');
      }
    }
  }, [selectedDate, providerId, slotDuration, selectedSlot, onSlotChange]);

  const isDateBlocked = (dateString: string): boolean => {
    return blockedDates.has(dateString);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    if (!isDateBlocked(newDate)) {
      onDateChange(newDate);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-6">
      {/* Date Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Date *
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          min={today}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        {selectedDate && isDateBlocked(selectedDate) && (
          <p className="mt-2 text-sm text-red-600">
            This date is unavailable. Please select another date.
          </p>
        )}
      </div>

      {/* Time Slot Selector */}
      {selectedDate && !isDateBlocked(selectedDate) && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Time Slot *
          </label>
          {availableSlots.length === 0 ? (
            <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-gray-400 mb-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-600 font-medium">No available time slots</p>
              <p className="text-gray-500 text-sm mt-1">The provider is not available on this date</p>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => onSlotChange(slot)}
                  className={`px-4 py-3 rounded-lg border-2 font-medium transition-all ${
                    selectedSlot === slot
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:text-blue-600'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          )}
          {selectedSlot && (
            <p className="mt-3 text-sm text-green-600 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
              Selected: {selectedSlot}
            </p>
          )}
        </div>
      )}

      {/* Provider Availability Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <div className="text-sm text-blue-800">
            <p className="font-medium">Availability Info</p>
            <p className="mt-1">Time slots shown are based on the provider's weekly schedule. Some dates may be blocked due to vacations or holidays.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
