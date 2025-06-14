import React from 'react';
import { cx } from '@linaria/core';
import { bButtonGroup } from './styles';

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ 
  children, 
  className, 
  ...props 
}) => {
  return (
    <div className={cx(bButtonGroup, className)} {...props}>
      {children}
    </div>
  );
};