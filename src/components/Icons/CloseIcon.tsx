import React from 'react';
import Icon from './Icon';

export interface CloseIconProps {
  size?: number | string;
  color?: string;
  className?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({
  size = 16,
  color = 'currentColor',
  className = '',
}) => {
  return (
    <Icon size={size} color={color} className={className}>
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export default CloseIcon;
