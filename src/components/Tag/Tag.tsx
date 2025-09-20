import React from 'react';
import { TagProps } from '@/types';
import { TagIcon } from '@/components/Icons';

const Tag: React.FC<TagProps> = ({
  label,
  onClick,
  variant = 'default',
}) => {
  const baseClasses = 'group inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 active:outline-none hover:outline-none border-0';
  
  const variantClasses = {
    default: 'bg-gray-100 text-primary hover:bg-primary-400 hover:text-white',
    selected: 'bg-primary text-white hover:bg-primary-600',
    disabled: 'bg-gray-50 text-gray-400 cursor-not-allowed',
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <button
      type="button"
      className={classes}
      onClick={variant === 'disabled' ? undefined : onClick}
      disabled={variant === 'disabled'}
    >
      <TagIcon 
        size={20} 
        color="currentColor"
        className="flex-shrink-0 text-primary group-hover:text-white"
      />
      <span className="tracking-wider text-sm font-medium">{label}</span>
    </button>
  );
};

export default Tag;
