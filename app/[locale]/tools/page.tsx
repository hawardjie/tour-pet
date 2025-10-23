'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function ToolsPage() {
  const t = useTranslations();
  const [dogAge, setDogAge] = useState('');
  const [dogSize, setDogSize] = useState('medium');
  const [humanAge, setHumanAge] = useState<number | null>(null);

  const [dogWeight, setDogWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [dailyCalories, setDailyCalories] = useState<number | null>(null);

  const calculateHumanAge = () => {
    const age = parseFloat(dogAge);
    if (isNaN(age) || age <= 0) {
      setHumanAge(null);
      return;
    }

    let result = 0;

    // First year counts as 15 human years
    if (age <= 1) {
      result = age * 15;
    } else if (age <= 2) {
      // Second year adds 9 years (total 24)
      result = 15 + ((age - 1) * 9);
    } else {
      // Each year after adds 4-5 years depending on size
      const baseAge = 24;
      const remainingYears = age - 2;

      switch (dogSize) {
        case 'small':
          result = baseAge + (remainingYears * 4);
          break;
        case 'medium':
          result = baseAge + (remainingYears * 4.5);
          break;
        case 'large':
          result = baseAge + (remainingYears * 5);
          break;
        case 'giant':
          result = baseAge + (remainingYears * 6);
          break;
      }
    }

    setHumanAge(Math.round(result));
  };

  const calculateCalories = () => {
    const weight = parseFloat(dogWeight);
    if (isNaN(weight) || weight <= 0) {
      setDailyCalories(null);
      return;
    }

    // Resting Energy Requirement (RER) = 70 * (body weight in kg)^0.75
    const rer = 70 * Math.pow(weight, 0.75);

    // Multiply by activity factor
    let multiplier = 1.6; // moderate activity default
    switch (activityLevel) {
      case 'low':
        multiplier = 1.2;
        break;
      case 'moderate':
        multiplier = 1.6;
        break;
      case 'high':
        multiplier = 2.0;
        break;
      case 'veryHigh':
        multiplier = 2.5;
        break;
    }

    setDailyCalories(Math.round(rer * multiplier));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-600">🐾 TourPet</Link>
            <Link href="/" className="text-gray-700 hover:text-blue-600">← {t('tools.backToHome')}</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{t('tools.title')}</h1>
          <p className="text-xl text-teal-100">
            {t('tools.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Dog Age Calculator */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🎂</span>
              <h2 className="text-2xl font-bold text-gray-900">{t('tools.ageCalculator')}</h2>
            </div>

            <p className="text-gray-600 mb-6">
              {t('tools.ageCalculatorDesc')}
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('tools.dogAge')}
                </label>
                <input
                  type="number"
                  value={dogAge}
                  onChange={(e) => setDogAge(e.target.value)}
                  min="0"
                  step="0.5"
                  placeholder="e.g., 3.5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('tools.dogSize')}
                </label>
                <select
                  value={dogSize}
                  onChange={(e) => setDogSize(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="small">{t('tools.small')}</option>
                  <option value="medium">{t('tools.medium')}</option>
                  <option value="large">{t('tools.large')}</option>
                  <option value="giant">{t('tools.giant')}</option>
                </select>
              </div>

              <button
                onClick={calculateHumanAge}
                className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
              >
                {t('tools.calculateHumanAge')}
              </button>

              {humanAge !== null && (
                <div className="bg-teal-50 border-l-4 border-teal-500 p-6 mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700 font-medium">{t('tools.dogAgeLabel')}</span>
                    <span className="text-2xl font-bold text-teal-900">{dogAge} years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{t('tools.humanAgeEquivalent')}</span>
                    <span className="text-3xl font-bold text-teal-600">{humanAge} years</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    {humanAge < 18 && t('tools.youngster')}
                    {humanAge >= 18 && humanAge < 40 && t('tools.primeAdult')}
                    {humanAge >= 40 && humanAge < 60 && t('tools.middleAge')}
                    {humanAge >= 60 && t('tools.senior')}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{t('tools.howItWorks')}</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• {t('tools.ageFormula1')}</li>
                <li>• {t('tools.ageFormula2')}</li>
                <li>• {t('tools.ageFormula3')}</li>
                <li>• {t('tools.ageFormula4')}</li>
              </ul>
            </div>
          </div>

          {/* Calorie Calculator */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">🍖</span>
              <h2 className="text-2xl font-bold text-gray-900">{t('tools.calorieCalculator')}</h2>
            </div>

            <p className="text-gray-600 mb-6">
              {t('tools.calorieCalculatorDesc')}
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('tools.dogWeight')}
                </label>
                <input
                  type="number"
                  value={dogWeight}
                  onChange={(e) => setDogWeight(e.target.value)}
                  min="0"
                  placeholder="e.g., 45"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('tools.activityLevel')}
                </label>
                <select
                  value={activityLevel}
                  onChange={(e) => setActivityLevel(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="low">{t('tools.lowActivity')}</option>
                  <option value="moderate">{t('tools.moderateActivity')}</option>
                  <option value="high">{t('tools.highActivity')}</option>
                  <option value="veryHigh">{t('tools.veryHighActivity')}</option>
                </select>
              </div>

              <button
                onClick={calculateCalories}
                className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
              >
                {t('tools.calculateCalories')}
              </button>

              {dailyCalories !== null && (
                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-700 font-medium">{t('tools.dailyCalorieNeeds')}</span>
                    <span className="text-3xl font-bold text-orange-600">{dailyCalories} cal</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {t('tools.calorieNote')}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{t('tools.importantNotes')}</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• {t('tools.calorieNote1')}</li>
                <li>• {t('tools.calorieNote2')}</li>
                <li>• {t('tools.calorieNote3')}</li>
                <li>• {t('tools.calorieNote4')}</li>
                <li>• {t('tools.calorieNote5')}</li>
              </ul>
            </div>
          </div>

          {/* Body Condition Guide */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">⚖️</span>
              <h2 className="text-2xl font-bold text-gray-900">{t('tools.bodyConditionGuide')}</h2>
            </div>

            <p className="text-gray-600 mb-6">
              {t('tools.bodyConditionDesc')}
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 bg-red-50 p-4">
                <h3 className="font-semibold text-red-900 mb-2">{t('tools.underweight')}</h3>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Ribs, spine, and hip bones easily visible</li>
                  <li>• No body fat</li>
                  <li>• Severe waist and abdominal tuck</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 bg-green-50 p-4">
                <h3 className="font-semibold text-green-900 mb-2">{t('tools.idealWeight')}</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Ribs easily felt with slight fat covering</li>
                  <li>• Visible waist from above</li>
                  <li>• Abdominal tuck visible from side</li>
                  <li>• Hourglass figure</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 bg-orange-50 p-4">
                <h3 className="font-semibold text-orange-900 mb-2">{t('tools.overweight')}</h3>
                <ul className="text-sm text-orange-800 space-y-1">
                  <li>• Ribs difficult to feel</li>
                  <li>• Waist barely visible or absent</li>
                  <li>• Fat deposits on tail base and back</li>
                  <li>• Minimal abdominal tuck</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Reference */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📋</span>
              <h2 className="text-2xl font-bold text-gray-900">{t('tools.quickReference')}</h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('tools.vaccinationSchedule')}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 6-8 weeks: DHPP, Bordetella</li>
                  <li>• 10-12 weeks: DHPP, Leptospirosis</li>
                  <li>• 14-16 weeks: DHPP, Rabies</li>
                  <li>• Annual boosters thereafter</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('tools.vetVisitFrequency')}</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Puppies: Every 3-4 weeks until 16 weeks</li>
                  <li>• Adult dogs: Annual wellness exam</li>
                  <li>• Senior dogs (7+): Every 6 months</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('tools.emergencySigns')}</h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Difficulty breathing</li>
                  <li>• Unconsciousness or collapse</li>
                  <li>• Severe bleeding</li>
                  <li>• Seizures</li>
                  <li>• Suspected poisoning</li>
                  <li>• Inability to urinate</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-purple-200">
              <Link href="/faq" className="text-purple-600 hover:text-purple-700 font-medium">
                {t('tools.viewCompleteFAQ')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
