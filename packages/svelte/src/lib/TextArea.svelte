<script lang="ts">
	interface Props {
		className?: string;
		[key: string]: any;
	}

	let { className = '', ...restProps }: Props = $props();
</script>

<textarea class={`font-family-base border-2 border-fg-dark bg-transparent text-fg-dark p-2 box-border focus:outline-none disabled:opacity-50 ${className}`} {...restProps}></textarea>
