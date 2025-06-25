<script lang="ts">
	export let className: string = '';
</script>

<table class={`bTable ${className}`} {...$$restProps}>
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
