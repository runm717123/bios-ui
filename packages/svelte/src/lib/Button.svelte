<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		size?: TSize;
		className?: string;
		children?: Snippet;
		[key: string]: any;
	}

	let { size = 'md', className = '', children, ...restProps }: Props = $props();

	const sizeClasses = {
		sm: 'px-2 py-1 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg'
	};
</script>

<button
	class={`bg-transparent text-fg-dark border border-fg-dark active:bg-white/90 active:border-white bButton ${sizeClasses[size]} ${className}`}
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
