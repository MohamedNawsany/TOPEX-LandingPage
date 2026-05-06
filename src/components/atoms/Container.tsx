import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  fluid?: boolean;
}

export default function Container({ children, className = '', fluid = false }: ContainerProps) {
  return (
    <div className={`
      mx-auto 
      px-4 
      sm:px-6 
      lg:px-8 
      transition-colors
      ${!fluid ? 'max-w-7xl' : 'max-w-full'}
      ${className}
    `}>
      {children}
    </div>
  );
}