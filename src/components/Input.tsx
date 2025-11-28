import React from 'react';
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}
export function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false
}: InputProps) {
  return <div>
      <label className="block text-sm font-semibold mb-2 text-deep-blue">
        {label}
      </label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} required={required} className="w-full px-4 py-3 rounded-lg border-2 border-deep-blue border-opacity-20 bg-white text-deep-blue focus:outline-none focus:border-accent-blue transition-colors duration-300" />
    </div>;
}