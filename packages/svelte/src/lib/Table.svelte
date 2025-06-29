<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		children?: Snippet;
		[key: string]: any;
	}

	let { className = '', children, ...restProps }: Props = $props();
</script>

<table class={`bTable ${className}`} {...restProps}>
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
