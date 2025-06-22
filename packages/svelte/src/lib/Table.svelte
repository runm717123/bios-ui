<script lang="ts">
	import type { HTMLTableAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props extends HTMLTableAttributes {
		children?: Snippet;
	}

	let { class: className = '', children, ...restProps }: Props = $props();
</script>

<table class="bTable {className}" {...restProps}>
	{@render children?.()}
</table>

<style>
	.bTable {
		border-collapse: collapse;
	}

	.bTable,
	.bTable :global(td),
	.bTable :global(th) {
		border: 1px solid var(--color-fg-dark);
	}
</style>
