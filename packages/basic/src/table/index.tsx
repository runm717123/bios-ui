import { styled } from '@linaria/react';

export const Table = styled.table`
	border-collapse: collapse;

	&,
	td,
	th {
		border: 1px solid var(--color-fg-dark);
	}
`;
