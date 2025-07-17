<script lang="ts">
	interface Props {
		className?: string;
		[key: string]: any;
	}

	let { value = $bindable(''), className = '', ...restProps }: Props = $props();
</script>

<textarea
	bind:value
	class={`font-family-base outline-1 focus:outline-[3px] outline-fg-dark bg-transparent text-fg-dark p-2 disabled:opacity-50 ${className}`}
	{...restProps}
></textarea>
