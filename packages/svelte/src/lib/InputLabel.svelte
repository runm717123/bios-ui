<script lang="ts">
	export let className: string = '';
</script>

<label class={`bInputLabel ${className}`} {...$$restProps}>
	<slot />
</label>

<style>
	.bInputLabel {
		font-size: var(--font-size-md);
	}
</style>
