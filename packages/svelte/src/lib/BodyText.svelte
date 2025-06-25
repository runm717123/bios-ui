<script lang="ts">
	export let className: string = '';
</script>

<span class={`bBodyText ${className}`} {...$$restProps}>
	<slot />
</span>

<style>
	.bBodyText {
		font-size: var(--font-size-md);
	}
</style>
