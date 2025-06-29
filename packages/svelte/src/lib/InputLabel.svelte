<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		className?: string;
		children?: Snippet;
		[key: string]: any;
	}

	let { className = '', children, ...restProps }: Props = $props();
</script>

<label class={`bInputLabel ${className}`} {...restProps}>
	{@render children?.()}
</label>

<style>
	.bInputLabel {
		font-size: var(--font-size-md);
	}
</style>
