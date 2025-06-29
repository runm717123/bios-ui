<script lang="ts">
	interface Props {
		className?: string;
		[key: string]: any;
	}

	let { className = '', ...restProps }: Props = $props();
</script>

<textarea class={`bTextArea ${className}`} {...restProps}></textarea>

<style>
	.bTextArea {
		font-family: var(--font-family-base);
		border: 2px solid var(--color-fg-dark);
		background: transparent;
		color: var(--color-fg-dark);
		padding: 0.5rem;
		box-sizing: border-box;
	}

	.bTextArea:focus {
		outline: none;
	}

	.bTextArea:disabled {
		opacity: 0.5;
	}
</style>
