import { css, cx } from '@linaria/core';
import type { FC, TextareaHTMLAttributes } from 'react';
import { selectStyle } from '../select';

export const TextArea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className, ...props }) => {
	return (
		<textarea
			{...props}
			className={cx(
				className,
				selectStyle,
				css`
					box-sizing: border-box;
				`
			)}
		/>
	);
};
