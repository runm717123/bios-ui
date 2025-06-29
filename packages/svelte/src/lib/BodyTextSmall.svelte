<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		children?: Snippet;
		[key: string]: any;
	}

	let { className = '', children, ...restProps }: Props = $props();
</script>

<p class={`bBodyTextSmall ${className}`} {...restProps}>
	{@render children?.()}
</p>

<style>
	.bBodyTextSmall {
		font-size: var(--font-size-sm);
	}
</style>
