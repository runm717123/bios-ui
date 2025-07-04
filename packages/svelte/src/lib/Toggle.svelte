<script lang="ts">
	interface Props {
		checked?: boolean;
		disabled?: boolean;
		size?: TSize;
		className?: string;
		[key: string]: any;
	}

	let { checked = $bindable(false), disabled = false, size = 'md', className = '', ...restProps }: Props = $props();

	const sizeClasses = {
		sm: 'w-10 h-5',
		md: 'w-12 h-6',
		lg: 'w-16 h-8'
	};

	const thumbSizeClasses = {
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-7 h-7'
	};

	const translateClasses = $derived({
		sm: checked ? 'translate-x-5' : 'translate-x-0',
		md: checked ? 'translate-x-6' : 'translate-x-0',
		lg: checked ? 'translate-x-8' : 'translate-x-0'
	});
</script>

<button
	type="button"
	role="switch"
	aria-checked={checked}
	class={`bToggle relative inline-flex items-center border-2 border-fg-dark bg-transparent transition-colors duration-200 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses[size]} ${className}`}
	class:bToggle--checked={checked}
	{disabled}
	onclick={() => !disabled && (checked = !checked)}
	{...restProps}
>
	<span
		class={`bToggle__thumb inline-block bg-fg-dark transition-transform duration-200 ease-in-out ${thumbSizeClasses[size]} ${translateClasses[size]}`}
		class:bToggle__thumb--checked={checked}
	></span>
</button>

<style>
	.bToggle {
		border-radius: 9999px;
		cursor: pointer;
	}

	.bToggle:hover {
		box-shadow:
			inset 0 0 5px 0 var(--color-fg-dark),
			0 0 10px 2px var(--color-fg-dark);
	}

	.bToggle:focus {
		outline: none;
		box-shadow:
			inset 0 0 5px 0 var(--color-fg-dark),
			0 0 10px 2px var(--color-fg-dark);
	}

	.bToggle--checked {
		background-color: var(--color-fg-dark);
		border-color: var(--color-fg-dark);
	}

	.bToggle--checked:hover {
		box-shadow:
			inset 0 0 5px 0 var(--color-bg-dark),
			0 0 10px 2px var(--color-fg-dark);
	}

	.bToggle--checked:focus {
		box-shadow:
			inset 0 0 5px 0 var(--color-bg-dark),
			0 0 10px 2px var(--color-fg-dark);
	}

	.bToggle__thumb {
		border-radius: 50%;
		margin: 1px;
	}

	.bToggle__thumb--checked {
		background-color: var(--color-bg-dark);
	}

	.bToggle:disabled {
		cursor: not-allowed;
	}

	.bToggle:disabled:hover {
		box-shadow: none;
	}
</style>
