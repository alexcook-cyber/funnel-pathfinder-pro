import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
}
export function Button({
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  variant = 'primary',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 disabled:opacity-65 disabled:cursor-not-allowed';
  const widthStyles = fullWidth ? 'w-full' : '';
  const variantStyles = variant === 'primary' ? 'bg-accent-blue text-white hover:bg-opacity-90 active:scale-[0.98]' : 'bg-white text-deep-blue border-2 border-deep-blue hover:bg-deep-blue hover:text-white';
  return <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyles} ${widthStyles} ${variantStyles}`}>
      {children}
    </button>;
}