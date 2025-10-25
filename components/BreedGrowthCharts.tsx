'use client';

import { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  Area,
  ComposedChart,
} from 'recharts';
import { BreedGrowthData } from '@/data/breedGrowth';
import { useTranslations } from 'next-intl';

interface BreedGrowthChartsProps {
  growthData: BreedGrowthData;
  breedName: string;
}

export default function BreedGrowthCharts({ growthData, breedName }: BreedGrowthChartsProps) {
  const t = useTranslations();
  const [activeChart, setActiveChart] = useState<'growth' | 'food' | 'vaccines'>('growth');

  // Prepare data for charts
  const growthChartData = growthData.growth.map((point) => ({
    age: point.age,
    ageLabel: point.age < 12 ? `${point.age}mo` : `${Math.floor(point.age / 12)}yr`,
    weight: point.weightKg,
    height: point.heightCm,
    food: point.dailyFoodCups,
  }));

  const vaccineChartData = growthData.vaccines.map((vaccine) => ({
    age: vaccine.age,
    ageLabel: `${vaccine.age}wk`,
    vaccine: vaccine.vaccine,
    importance: vaccine.importance === 'critical' ? 3 : vaccine.importance === 'recommended' ? 2 : 1,
  }));

  // Custom tooltip for growth chart
  const GrowthTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold text-gray-900">{t('breedGrowth.age')}: {payload[0].payload.ageLabel}</p>
          <p className="text-blue-600">
            {t('breedGrowth.weight')}: {payload[0].value} kg ({(payload[0].value * 2.20462).toFixed(1)} lbs)
          </p>
          <p className="text-green-600">
            {t('breedGrowth.height')}: {payload[1].value} cm ({(payload[1].value * 0.393701).toFixed(1)} in)
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for food chart
  const FoodTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold text-gray-900">{t('breedGrowth.age')}: {payload[0].payload.ageLabel}</p>
          <p className="text-orange-600">
            {t('breedGrowth.dailyFood')}: {payload[0].value} {t('breedGrowth.cups')}
          </p>
          <p className="text-sm text-gray-600">
            ≈ {(payload[0].value * 240).toFixed(0)} ml
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom tooltip for vaccines
  const VaccineTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const vaccine = growthData.vaccines.find(v => v.age === payload[0].payload.age);
      return (
        <div className="bg-white p-4 border border-gray-300 rounded shadow-lg max-w-xs">
          <p className="font-semibold text-gray-900">{t('breedGrowth.age')}: {payload[0].payload.ageLabel}</p>
          <p className="text-purple-600 font-medium">{payload[0].payload.vaccine}</p>
          <p className={`text-sm ${
            vaccine?.importance === 'critical' ? 'text-red-600' :
            vaccine?.importance === 'recommended' ? 'text-yellow-600' :
            'text-gray-600'
          }`}>
            {t(`breedGrowth.importance_${vaccine?.importance}`)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        {t('breedGrowth.title')} - {breedName}
      </h2>

      {/* Chart Type Selector */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <button
          onClick={() => setActiveChart('growth')}
          className={`px-6 py-3 rounded-lg font-medium transition ${
            activeChart === 'growth'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          📈 {t('breedGrowth.growthChart')}
        </button>
        <button
          onClick={() => setActiveChart('food')}
          className={`px-6 py-3 rounded-lg font-medium transition ${
            activeChart === 'food'
              ? 'bg-orange-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          🍖 {t('breedGrowth.foodChart')}
        </button>
        <button
          onClick={() => setActiveChart('vaccines')}
          className={`px-6 py-3 rounded-lg font-medium transition ${
            activeChart === 'vaccines'
              ? 'bg-purple-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          💉 {t('breedGrowth.vaccineChart')}
        </button>
      </div>

      {/* Growth Chart */}
      {activeChart === 'growth' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('breedGrowth.weightAndHeight')}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {t('breedGrowth.growthChartDescription')}
            </p>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={growthChartData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis
                  dataKey="ageLabel"
                  stroke="#666"
                  label={{ value: t('breedGrowth.ageLabel'), position: 'insideBottom', offset: -10 }}
                />
                <YAxis
                  yAxisId="left"
                  stroke="#3b82f6"
                  label={{ value: t('breedGrowth.weightKg'), angle: -90, position: 'insideLeft' }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#10b981"
                  label={{ value: t('breedGrowth.heightCm'), angle: 90, position: 'insideRight' }}
                />
                <Tooltip content={<GrowthTooltip />} />
                <Legend wrapperStyle={{ paddingTop: '15px' }} />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="weight"
                  fill="#93c5fd"
                  stroke="#3b82f6"
                  fillOpacity={0.3}
                  name={t('breedGrowth.weight')}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="height"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  name={t('breedGrowth.height')}
                />
                {/* Life stage markers */}
                <ReferenceLine
                  x={growthChartData.find(d => d.age === growthData.lifeStages.puppy.end)?.ageLabel}
                  stroke="#f59e0b"
                  strokeDasharray="3 3"
                  label={{ value: t('breedGrowth.puppy'), position: 'top' }}
                />
                <ReferenceLine
                  x={growthChartData.find(d => d.age === growthData.lifeStages.adolescent.end)?.ageLabel}
                  stroke="#f59e0b"
                  strokeDasharray="3 3"
                  label={{ value: t('breedGrowth.adolescent'), position: 'top' }}
                />
                <ReferenceLine
                  x={growthChartData.find(d => d.age === growthData.lifeStages.adult.end)?.ageLabel}
                  stroke="#f59e0b"
                  strokeDasharray="3 3"
                  label={{ value: t('breedGrowth.adult'), position: 'top' }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Life Stages Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
              <div className="text-3xl mb-2">🐕</div>
              <div className="font-semibold text-gray-800">{t('breedGrowth.puppy')}</div>
              <div className="text-sm text-gray-600">0-{growthData.lifeStages.puppy.end}mo</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
              <div className="text-3xl mb-2">🦮</div>
              <div className="font-semibold text-gray-800">{t('breedGrowth.adolescent')}</div>
              <div className="text-sm text-gray-600">
                {growthData.lifeStages.adolescent.start}-{growthData.lifeStages.adolescent.end}mo
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
              <div className="text-3xl mb-2">🐕‍🦺</div>
              <div className="font-semibold text-gray-800">{t('breedGrowth.adult')}</div>
              <div className="text-sm text-gray-600">
                {growthData.lifeStages.adult.start}-{growthData.lifeStages.adult.end}mo
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
              <div className="text-3xl mb-2">🐩</div>
              <div className="font-semibold text-gray-800">{t('breedGrowth.senior')}</div>
              <div className="text-sm text-gray-600">{growthData.lifeStages.senior.start}mo+</div>
            </div>
          </div>
        </div>
      )}

      {/* Food Consumption Chart */}
      {activeChart === 'food' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('breedGrowth.dailyFoodRequirements')}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {t('breedGrowth.foodChartDescription')}
            </p>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={growthChartData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis
                  dataKey="ageLabel"
                  stroke="#666"
                  label={{ value: t('breedGrowth.ageLabel'), position: 'insideBottom', offset: -10 }}
                />
                <YAxis
                  stroke="#f97316"
                  label={{ value: t('breedGrowth.cupsPerDay'), angle: -90, position: 'insideLeft' }}
                />
                <Tooltip content={<FoodTooltip />} />
                <Bar
                  dataKey="food"
                  fill="#fb923c"
                  radius={[8, 8, 0, 0]}
                  name={t('breedGrowth.dailyFood')}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Nutrition Notes */}
          <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200">
            <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center gap-2">
              <span>📝</span> {t('breedGrowth.nutritionNotes')}
            </h4>
            <ul className="space-y-2">
              {growthData.nutritionNotes.map((note, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Vaccination Timeline */}
      {activeChart === 'vaccines' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {t('breedGrowth.vaccinationSchedule')}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              {t('breedGrowth.vaccineChartDescription')}
            </p>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={vaccineChartData} margin={{ top: 5, right: 30, left: 80, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis
                  dataKey="ageLabel"
                  stroke="#666"
                  label={{ value: t('breedGrowth.ageInWeeks'), position: 'insideBottom', offset: -10 }}
                />
                <YAxis
                  stroke="#9333ea"
                  domain={[0, 3]}
                  ticks={[1, 2, 3]}
                  width={70}
                  tickFormatter={(value) =>
                    value === 3 ? t('breedGrowth.critical') : value === 2 ? t('breedGrowth.recommended') : t('breedGrowth.optional')
                  }
                />
                <Tooltip content={<VaccineTooltip />} />
                <Bar
                  dataKey="importance"
                  fill="#a855f7"
                  radius={[8, 8, 0, 0]}
                  name={t('breedGrowth.vaccine')}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Vaccine List */}
          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <h4 className="font-semibold text-lg text-gray-800 mb-4 flex items-center gap-2">
              <span>💉</span> {t('breedGrowth.vaccineList')}
            </h4>
            <div className="grid gap-3">
              {growthData.vaccines.map((vaccine, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg border-2 ${
                    vaccine.importance === 'critical'
                      ? 'bg-red-50 border-red-200'
                      : vaccine.importance === 'recommended'
                      ? 'bg-yellow-50 border-yellow-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{vaccine.vaccine}</div>
                    <div className="text-sm text-gray-600">{vaccine.age} {t('breedGrowth.weeks')}</div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      vaccine.importance === 'critical'
                        ? 'bg-red-100 text-red-700'
                        : vaccine.importance === 'recommended'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {t(`breedGrowth.importance_${vaccine.importance}`)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
