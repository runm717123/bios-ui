<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getTextSize } from './utils/get-text-size.js';

	interface Props {
		size?: TSize;
		className?: string;
		children?: Snippet;
		[key: string]: any;
	}

	let { className = '', children, size = 'md', ...restProps }: Props = $props();
</script>

<label class={`${getTextSize(size)} ${className}`} {...restProps}>
	{@render children?.()}
</label>
