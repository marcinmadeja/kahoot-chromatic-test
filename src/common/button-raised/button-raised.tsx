import "./button-raised.css"
import { PropsWithChildren } from 'react';

export const Button = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return <button className={`button-raised ${className}`}>{children}</button>
}