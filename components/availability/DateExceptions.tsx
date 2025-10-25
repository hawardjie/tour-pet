'use client';

import { useState, useEffect } from 'react';
import { getProviderAvailability, saveProviderAvailability, type DateException } from '@/lib/services/availability-service';

export default function DateExceptions() {
  const [providerId] = useState('provider-1'); // In real app, get from auth
  const [exceptions, setExceptions] = useState<DateException[]>([]);
  const [newException, setNewException] = useState({ date: '', reason: '' });
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    const availability = getProviderAvailability(providerId);
    if (availability?.dateExceptions) {
      setExceptions(availability.dateExceptions);
    }
  }, [providerId]);

  const addException = () => {
    if (!newException.date) {
      alert('Please select a date');
      return;
    }

    // Check if date already exists
    if (exceptions.some(e => e.date === newException.date)) {
      alert('This date already has an exception');
      return;
    }

    setExceptions(prev => [
      ...prev,
      { date: newException.date, reason: newException.reason || 'Unavailable' }
    ]);
    setNewException({ date: '', reason: '' });
  };

  const removeException = (date: string) => {
    setExceptions(prev => prev.filter(e => e.date !== date));
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveMessage('');

    try {
      const availability = getProviderAvailability(providerId);
      saveProviderAvailability(providerId, {
        ...availability,
        dateExceptions: exceptions,
      });
      setSaveMessage('✓ Exceptions saved successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      setSaveMessage('✗ Failed to save exceptions');
    } finally {
      setSaving(false);
    }
  };

  // Sort exceptions by date
  const sortedExceptions = [...exceptions].sort((a, b) =>
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-6">
      {/* Add New Exception */}
      <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Add Date Exception</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              min={today}
              value={newException.date}
              onChange={(e) => setNewException(prev => ({ ...prev, date: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reason (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g., Vacation, Holiday"
              value={newException.reason}
              onChange={(e) => setNewException(prev => ({ ...prev, reason: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={addException}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Add Exception
            </button>
          </div>
        </div>
      </div>

      {/* Exceptions List */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Blocked Dates ({exceptions.length})
        </h3>

        {sortedExceptions.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-gray-400 mb-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <p className="text-gray-500 font-medium">No blocked dates</p>
            <p className="text-gray-400 text-sm mt-1">Add dates when you're unavailable above</p>
          </div>
        ) : (
          <div className="space-y-2">
            {sortedExceptions.map((exception) => (
              <div
                key={exception.date}
                className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {formatDate(exception.date)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {exception.reason || 'Unavailable'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeException(exception.date)}
                  className="px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-gray-700 rounded-md transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

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
          {saving ? 'Saving...' : 'Save Exceptions'}
        </button>
      </div>
    </div>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
