import { css } from '@linaria/core';

export const bButton = css`
	background-color: transparent;
	color: var(--color-foreground);
	border: 2px solid var(--color-foreground);
	padding: 0.5rem 1rem;

	&:hover {
		box-shadow:
			0 0 5px 0 var(--color-foreground) inset,
			0 0 10px 2px var(--color-foreground);
	}

	&:active {
		background-color: white;
		border-color: white;
		box-shadow: none;
	}
`;
