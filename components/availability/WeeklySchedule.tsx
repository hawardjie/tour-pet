'use client';

import { useState, useEffect } from 'react';
import { getProviderAvailability, saveProviderAvailability, type WeeklyAvailability, type TimeSlot } from '@/lib/services/availability-service';

const DAYS_OF_WEEK = [
  { key: 'monday', label: 'Monday' },
  { key: 'tuesday', label: 'Tuesday' },
  { key: 'wednesday', label: 'Wednesday' },
  { key: 'thursday', label: 'Thursday' },
  { key: 'friday', label: 'Friday' },
  { key: 'saturday', label: 'Saturday' },
  { key: 'sunday', label: 'Sunday' },
] as const;

const DEFAULT_TIME_SLOTS: TimeSlot[] = [
  { start: '09:00', end: '12:00' },
  { start: '13:00', end: '17:00' },
];

export default function WeeklySchedule() {
  const [providerId] = useState('provider-1'); // In real app, get from auth
  const [schedule, setSchedule] = useState<WeeklyAvailability>({
    monday: { enabled: true, slots: DEFAULT_TIME_SLOTS },
    tuesday: { enabled: true, slots: DEFAULT_TIME_SLOTS },
    wednesday: { enabled: true, slots: DEFAULT_TIME_SLOTS },
    thursday: { enabled: true, slots: DEFAULT_TIME_SLOTS },
    friday: { enabled: true, slots: DEFAULT_TIME_SLOTS },
    saturday: { enabled: false, slots: [] },
    sunday: { enabled: false, slots: [] },
  });
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    const availability = getProviderAvailability(providerId);
    if (availability?.weeklySchedule) {
      setSchedule(availability.weeklySchedule);
    }
  }, [providerId]);

  const toggleDay = (day: keyof WeeklyAvailability) => {
    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        enabled: !prev[day].enabled,
        slots: !prev[day].enabled && prev[day].slots.length === 0 ? DEFAULT_TIME_SLOTS : prev[day].slots,
      },
    }));
  };

  const addTimeSlot = (day: keyof WeeklyAvailability) => {
    const lastSlot = schedule[day].slots[schedule[day].slots.length - 1];
    const newStart = lastSlot ? lastSlot.end : '09:00';
    const newEnd = lastSlot ? addHours(lastSlot.end, 1) : '10:00';

    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: [...prev[day].slots, { start: newStart, end: newEnd }],
      },
    }));
  };

  const updateTimeSlot = (day: keyof WeeklyAvailability, index: number, field: 'start' | 'end', value: string) => {
    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: prev[day].slots.map((slot, i) =>
          i === index ? { ...slot, [field]: value } : slot
        ),
      },
    }));
  };

  const removeTimeSlot = (day: keyof WeeklyAvailability, index: number) => {
    setSchedule(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        slots: prev[day].slots.filter((_, i) => i !== index),
      },
    }));
  };

  const copyToAllDays = (day: keyof WeeklyAvailability) => {
    const daySchedule = schedule[day];
    const newSchedule = { ...schedule };

    DAYS_OF_WEEK.forEach(({ key }) => {
      newSchedule[key] = {
        enabled: daySchedule.enabled,
        slots: daySchedule.slots.map(slot => ({ ...slot })),
      };
    });

    setSchedule(newSchedule);
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveMessage('');

    try {
      saveProviderAvailability(providerId, { weeklySchedule: schedule });
      setSaveMessage('✓ Schedule saved successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      setSaveMessage('✗ Failed to save schedule');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {DAYS_OF_WEEK.map(({ key, label }) => (
        <div key={key} className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={schedule[key].enabled}
                  onChange={() => toggleDay(key)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
              <span className="text-lg font-medium text-gray-900">{label}</span>
            </div>

            {schedule[key].enabled && (
              <button
                onClick={() => copyToAllDays(key)}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Copy to all days
              </button>
            )}
          </div>

          {schedule[key].enabled && (
            <div className="space-y-3">
              {schedule[key].slots.map((slot, index) => (
                <div key={index} className="flex items-center gap-3">
                  <input
                    type="time"
                    value={slot.start}
                    onChange={(e) => updateTimeSlot(key, index, 'start', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="time"
                    value={slot.end}
                    onChange={(e) => updateTimeSlot(key, index, 'end', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    onClick={() => removeTimeSlot(key, index)}
                    className="text-red-600 hover:text-red-700 p-2"
                    title="Remove time slot"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
                </div>
              ))}

              <button
                onClick={() => addTimeSlot(key)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Add time slot
              </button>
            </div>
          )}

          {!schedule[key].enabled && (
            <p className="text-gray-500 text-sm">Unavailable</p>
          )}
        </div>
      ))}

      {/* Save Button */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        {saveMessage && (
          <span className={`text-sm font-medium ${saveMessage.includes('✓') ? 'text-green-600' : 'text-red-600'}`}>
            {saveMessage}
          </span>
        )}
        <button
          onClick={handleSave}
          disabled={saving}
          className="ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
        >
          {saving ? 'Saving...' : 'Save Schedule'}
        </button>
      </div>
    </div>
  );
}

function addHours(time: string, hours: number): string {
  const [h, m] = time.split(':').map(Number);
  const newHour = (h + hours) % 24;
  return `${String(newHour).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}
