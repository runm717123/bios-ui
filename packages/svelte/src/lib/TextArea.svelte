<script lang="ts">
	interface Props {
		className?: string;
		[key: string]: any;
	}

	
	let { value = $bindable(''), className = '', ...restProps }: Props = $props();
</script>

<textarea bind:value class={`font-family-base border-2 border-fg-dark bg-transparent text-fg-dark p-2 box-border focus:outline-none disabled:opacity-50 ${className}`} {...restProps}></textarea>
