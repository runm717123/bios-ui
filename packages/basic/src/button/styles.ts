import { css } from '@linaria/core';

export const bButton = css`
	background-color: transparent;
	color: var(--color-fb-dark);
	border: 2px solid var(--color-fg-dark);

	&[data-size='small'] {
		padding: 0.25rem 0.5rem;
		font-size: var(--font-size-sm);
	}

	&[data-size='medium'] {
		padding: 0.5rem 1rem;
		font-size: var(--font-size-md);
	}

	&[data-size='large'] {
		padding: 0.75rem 1.5rem;
		font-size: var(--font-size-lg);
	}

	&:hover {
		box-shadow:
			0 0 5px 0 var(--color-fg-dark) inset,
			0 0 10px 2px var(--color-fg-dark);
	}

	&:active {
		background-color: rgba(255, 255, 255, 0.9);
		border-color: white;
		box-shadow: none;
	}
`;
