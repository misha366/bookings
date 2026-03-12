import { type ReactNode, useState } from 'react';

import { type UseFormRegisterReturn } from 'react-hook-form';

import './FormField.sass';

type FormFieldProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  icon?: string;
  register: UseFormRegisterReturn;
};

export const FormField = ({
  id,
  label,
  type = 'text',
  placeholder,
  error,
  icon,
  register,
}: FormFieldProps): ReactNode => {
  const isPassword = type === 'password';

  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="form-field">
      <label htmlFor={id} className="form-field__label">
        {label}
      </label>
      <div className="form-field__input-wrapper field-input">
        <input
          id={id}
          type={inputType}
          className="field-input__input"
          placeholder={placeholder}
          {...register}
        />
        {icon && !isPassword && <img src={icon} alt="" className="field-input__icon" />}
        {icon && isPassword && (
          <button
            type="button"
            className="field-input__toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            <img src={icon} alt="" />
          </button>
        )}
      </div>
      {error && <span className="form-field__error">{error}</span>}
    </div>
  );
}
