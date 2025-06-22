<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLSpanElement> {
	}

	let { class: className = '', ...restProps }: Props = $props();
</script>

<span class="bBodyText {className}" {...restProps}>
	<slot />
</span>

<style>
	.bBodyText {
		font-size: var(--font-size-md);
	}
</style>
