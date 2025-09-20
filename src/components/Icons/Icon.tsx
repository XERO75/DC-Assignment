import React from 'react';

export interface IconProps {
  size?: number | string;
  color?: string;
  className?: string;
  children: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({
  size = 16,
  color = 'currentColor',
  className = '',
  children,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ color }}
    >
      {children}
    </svg>
  );
};

export default Icon;
