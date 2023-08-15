import "./styles.css"
import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  errorMessage?: string | React.ReactNode;
  showErrorStyle?: boolean;
  id: string;
  label?: ReactNode;
  as?: 'input' | 'textarea';
  forwardedAs?: 'input' | 'textarea';
  functionalSelector?: string;
  children?: ReactNode;
  disabled?: boolean;
  tooltip?: string;
  className?: string;
  showUpsellIcon?: boolean;
  isRTL?: boolean;
  minLength?: number;
  hasChildrenPositionedManually?: boolean;
  limit?: number;
  isOptional?: boolean;
}

export const Input = ({ className, label, id, errorMessage, disabled, limit, isOptional, ...args }: Props) => {
  return (
    <div className={`input__wrapper ${!!errorMessage && 'is-error'} ${!!disabled && 'is-disabled'}`}>
      {label && <label className="input__label" htmlFor={id}>{label} {!!isOptional && <span className="input__optional">(Optional)</span> }</label>}
      <div className="input__container">
        <input {...args} id={id} className={`input ${className}`} disabled={disabled} />
        {limit !== undefined && <div className="input__limit">{limit}</div>}
      </div>
      {!!errorMessage && <div className="input__error">{errorMessage}</div>}
    </div>
  );
}