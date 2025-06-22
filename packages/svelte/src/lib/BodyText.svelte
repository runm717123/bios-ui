<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props extends HTMLAttributes<HTMLSpanElement> {
		children?: Snippet;
	}

	let { class: className = '', children, ...restProps }: Props = $props();
</script>

<span class="bBodyText {className}" {...restProps}>
	{@render children?.()}
</span>

<style>
	.bBodyText {
		font-size: var(--font-size-md);
	}
</style>
