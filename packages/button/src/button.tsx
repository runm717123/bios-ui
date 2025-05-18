import type { FC } from 'react';
import { bButton } from './styles';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isPrimary?: boolean;
	size?: 'small' | 'medium' | 'large';
}

export const Button: FC<IButtonProps> = ({ className, isPrimary, size = 'medium', children, ...props }) => {
	return <button className={bButton} {... props}>{children}</button>;
};
