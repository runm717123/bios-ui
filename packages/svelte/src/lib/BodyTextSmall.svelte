<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLParagraphElement> {
	}

	let { class: className = '', ...restProps }: Props = $props();
</script>

<p class="bBodyTextSmall {className}" {...restProps}>
	<slot />
</p>

<style>
	.bBodyTextSmall {
		font-size: var(--font-size-sm);
	}
</style>
