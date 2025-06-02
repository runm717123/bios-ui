import { styled } from '@linaria/react';

export const Input = styled.input`
	background-color: var(--color-bg-dark);
	outline: 1px solid var(--color-fg-dark);
	&:focus {
		outline-width: 3px;
	}
`;

export const InputLabel = styled.label`
	font-size: var(--font-size-md);
`;
