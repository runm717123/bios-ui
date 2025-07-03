<script lang="ts">
	interface Props {
		value?: string;
		className?: string;
		[key: string]: any;
	}

	let { value = $bindable(''), className = '', ...restProps }: Props = $props();
</script>

<input bind:value class={`bg-bg-dark outline-1 outline-fg-dark py-1 bInput ${className}`} {...restProps} />

<style>
	.bInput:focus {
		outline-width: 3px;
	}
</style>
