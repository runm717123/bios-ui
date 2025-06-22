<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
	}

	let { class: className = '', ...restProps }: Props = $props();
</script>

<input class="bInput {className}" {...restProps} />

<style>
	.bInput {
		background-color: var(--color-bg-dark);
		outline: 1px solid var(--color-fg-dark);
		padding-block: calc(1 * var(--spacing-xs));
	}

	.bInput:focus {
		outline-width: 3px;
	}
</style>
