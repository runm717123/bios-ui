<script lang="ts">
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let className: string = '';
</script>

<button class={`bButton ${className}`} data-size={size} {...$$restProps}>
	<slot />
</button>


<style>
	.bButton {
		background-color: transparent;
		color: var(--color-fg-dark);
		border: 2px solid var(--color-fg-dark);
	}

	.bButton[data-size='small'] {
		padding: 0.25rem 0.5rem;
		font-size: var(--font-size-sm);
	}

	.bButton[data-size='medium'] {
		padding: 0.5rem 1rem;
		font-size: var(--font-size-md);
	}

	.bButton[data-size='large'] {
		padding: 0.75rem 1.5rem;
		font-size: var(--font-size-lg);
	}

	.bButton:hover {
		box-shadow:
			0 0 5px 0 var(--color-fg-dark) inset,
			0 0 10px 2px var(--color-fg-dark);
	}

	.bButton:active {
		background-color: rgba(255, 255, 255, 0.9);
		border-color: white;
		box-shadow: none;
	}
</style>
