import type { FC } from 'react';
import { bButton } from './styles';
import { cx } from '@linaria/core';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	isPrimary?: boolean;
	size?: 'small' | 'medium' | 'large';
}

export const Button: FC<IButtonProps> = ({ className, isPrimary, size = 'medium', children, ...props }) => {
	return (
		<button className={cx(bButton, className)} {...props} data-is-primary={isPrimary} data-size={size}>
			{children}
		</button>
	);
};
