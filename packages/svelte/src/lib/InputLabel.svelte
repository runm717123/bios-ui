<script lang="ts">
	import type { HTMLLabelAttributes } from 'svelte/elements';

	interface Props extends HTMLLabelAttributes {
	}

	let { class: className = '', ...restProps }: Props = $props();
</script>

<label class="bInputLabel {className}" {...restProps}>
	<slot />
</label>

<style>
	.bInputLabel {
		font-size: var(--font-size-md);
	}
</style>
