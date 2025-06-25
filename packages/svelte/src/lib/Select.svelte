<script lang="ts">
	export let options: Array<{ label: string; value: string }>;
	export let className: string = '';
</script>

<select class={`bSelect ${className}`} {...$$restProps}>
	<option value="">Select an option</option>
	{#each options as { label, value } (value)}
		<option {value}>{label}</option>
	{/each}
</select>

<style>
	.bSelect {
		font-family: var(--font-family-base);
		border: 2px solid var(--color-fg-dark);
		background: transparent;
		color: var(--color-fg-dark);
		padding: 0.5rem;
	}

	.bSelect:focus {
		outline: none;
	}

	.bSelect:disabled {
		opacity: 0.5;
	}
</style>
