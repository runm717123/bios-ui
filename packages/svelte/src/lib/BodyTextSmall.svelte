<script lang="ts">
	export let className: string = '';
</script>

<p class={`bBodyTextSmall ${className}`} {...$$restProps}>
	<slot />
</p>

<style>
	.bBodyTextSmall {
		font-size: var(--font-size-sm);
	}
</style>
