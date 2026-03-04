import { type ReactNode, useState } from 'react';
import { type UseFormRegisterReturn } from 'react-hook-form';

import './FormField.sass';

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  icon?: string;
  register: UseFormRegisterReturn;
}

export function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  error,
  icon,
  register,
}: FormFieldProps): ReactNode {
  const isPassword = type === 'password';

  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="form-field">
      <label htmlFor={id} className="form-field__label">
        {label}
      </label>
      <div className="form-field__input-wrapper">
        <input
          id={id}
          type={inputType}
          className="form-field__input"
          placeholder={placeholder}
          {...register} // react-hook-form: unpacks name, onChange, onBlur, ref
        />
        {icon && !isPassword && <img src={icon} alt="" className="form-field__icon" />}
        {icon && isPassword && (
          <button
            type="button"
            className="form-field__button"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img src={icon} alt="" className="form-field__icon" />
          </button>
        )}
      </div>
      {error && <span className="form-field__error">{error}</span>}
    </div>
  );
}
