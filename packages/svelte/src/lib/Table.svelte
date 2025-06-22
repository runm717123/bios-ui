<script lang="ts">
	import type { HTMLTableAttributes } from 'svelte/elements';

	interface Props extends HTMLTableAttributes {
	}

	let { class: className = '', ...restProps }: Props = $props();
</script>

<table class="bTable {className}" {...restProps}>
	<slot />
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
