import { css, cx } from '@linaria/core';
import type { FC } from 'react';

export const selectStyle = css`
	font-family: var(--font-family-base);
	border: 2px solid var(--color-fg-dark);
	background: transparent;
	color: var(--color-fg-dark);
	&:focus {
		outline: none;
	}
	padding: 0.5rem;
	&:disabled {
		opacity: 0.5;
	}
`;

export interface ISelectOptions {
	value: string;
	label: string;
}

export interface ISelectProps extends React.HTMLAttributes<HTMLSelectElement> {
	options: ISelectOptions[];
}

export const Select: FC<ISelectProps> = ({ options, ...props }) => {
	return (
		<select {...props} className={cx(props.className, selectStyle)}>
			<option value="">Select an option</option>
			{options.map(({ label, value }) => (
				<option key={label} value={value}>
					{label}
				</option>
			))}
		</select>
	);
};
