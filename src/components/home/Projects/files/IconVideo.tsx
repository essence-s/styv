import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function IconVideo({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='currentColor'
      className={className}
      {...props}
    >
      <polygon points='5 3 19 12 5 21 5 3'></polygon>
    </svg>
  );
}