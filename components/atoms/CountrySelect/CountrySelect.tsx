'use client';

import React from 'react';

interface CountryOption {
  value: string;
  label: string;
}

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
  options: CountryOption[];
  label?: string;
  required?: boolean;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange,
  options,
  label = 'Country',
  required = false,
}) => {
  return (
    <div className="w-full">
      <label htmlFor="country-select" className="mb-1 block text-sm font-medium text-neutral-700">
        {label}
      </label>
      <select
        id="country-select"
        required={required}
        className="w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none disabled:opacity-50"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          Select a country
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
