<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		size?: 'small' | 'medium' | 'large';
		className?: string;
		children?: Snippet;
		[key: string]: any;
	}

	let { size = 'medium', className = '', children, ...restProps }: Props = $props();

	const sizeClasses = {
		small: 'px-2 py-1 text-sm',
		medium: 'px-4 py-2 text-base',
		large: 'px-6 py-3 text-lg'
	};
</script>

<button
	class={`bg-transparent text-fg-dark border-2 border-fg-dark active:bg-white/90 active:border-white bButton ${sizeClasses[size]} ${className}`}
	{...restProps}
>
	{@render children?.()}
</button>

<style>
	.bButton:hover {
		box-shadow:
			inset 0 0 5px 0 var(--color-fg-dark),
			0 0 10px 2px var(--color-fg-dark);
	}

	.bButton:active {
		box-shadow: none;
	}
</style>
