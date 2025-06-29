<script lang="ts">
	interface Props {
		options: Array<{ label: string; value: string }>;
		className?: string;
		[key: string]: any;
	}

	let { options, className = '', ...restProps }: Props = $props();
</script>

<select class={`font-family-base border-2 border-fg-dark bg-transparent text-secondary p-2 focus:outline-none disabled:opacity-50 ${className}`} {...restProps}>
	<option value="">Select an option</option>
	{#each options as { label, value } (value)}
		<option {value}>{label}</option>
	{/each}
</select>
