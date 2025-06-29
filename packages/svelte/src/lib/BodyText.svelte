<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		children?: Snippet;
		[key: string]: any;
	}

	let { className = '', children, ...restProps }: Props = $props();
</script>

<span class={`bBodyText ${className}`} {...restProps}>
	{@render children?.()}
</span>

<style>
	.bBodyText {
		font-size: var(--font-size-md);
	}
</style>
