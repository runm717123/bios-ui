<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		children?: Snippet;
		[key: string]: any;
	}

	let { className = '', children, ...restProps }: Props = $props();
</script>

<table class={`border-collapse [&_td]:border [&_td]:border-fg-dark [&_th]:border [&_th]:border-fg-dark border border-fg-dark ${className}`} {...restProps}>
	{@render children?.()}
</table>
