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
      <label htmlFor="country-select" className="block mb-1 text-sm font-medium text-neutral-700">
        {label}
      </label>
      <select
        id="country-select"
        required={required}
        className="w-full px-4 py-2 border border-neutral-300 rounded-md bg-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 disabled:opacity-50"
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
