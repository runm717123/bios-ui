<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		children?: Snippet;
		[key: string]: any;
	}

	let { className = '', children, ...restProps }: Props = $props();
</script>

<table
	class={`b-table border-collapse [&_td]:border [&_td]:border-fg-dark [&_th]:border [&_th]:border-fg-dark border border-fg-dark ${className}`}
	{...restProps}
>
	{@render children?.()}
</table>

<style>
	:global(.b-table td),
	:global(.b-table th) {
		padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);
	}
</style>
