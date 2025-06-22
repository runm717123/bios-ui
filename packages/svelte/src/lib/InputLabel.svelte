<script lang="ts">
	import type { HTMLLabelAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props extends HTMLLabelAttributes {
		children?: Snippet;
	}

	let { class: className = '', children, ...restProps }: Props = $props();
</script>

<label class="bInputLabel {className}" {...restProps}>
	{@render children?.()}
</label>

<style>
	.bInputLabel {
		font-size: var(--font-size-md);
	}
</style>
