<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props extends HTMLAttributes<HTMLParagraphElement> {
		children?: Snippet;
	}

	let { class: className = '', children, ...restProps }: Props = $props();
</script>

<p class="bBodyTextSmall {className}" {...restProps}>
	{@render children?.()}
</p>

<style>
	.bBodyTextSmall {
		font-size: var(--font-size-sm);
	}
</style>
