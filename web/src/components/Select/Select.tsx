import { type ReactNode } from 'react';

import './Select.sass';

type SelectOption = {
  id: string;
  value: string;
  label: string;
};

type SelectProps = {
  caption: string;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export const Select = ({
  caption,
  options,
  placeholder,
  value,
  onChange,
}: SelectProps): ReactNode => {
  return (
    <div className="select">
      <span className="select__caption">{caption}</span>
      <select
        className="select__control"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
