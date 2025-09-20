import React from 'react';
import { TagProps } from '@/types';

const Tag: React.FC<TagProps> = ({
  label,
  onClick,
  variant = 'default',
}) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer';
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    selected: 'bg-blue-500 text-white hover:bg-blue-600',
    disabled: 'bg-gray-50 text-gray-400 cursor-not-allowed',
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <span
      className={classes}
      onClick={variant === 'disabled' ? undefined : onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {label}
    </span>
  );
};

export default Tag;
