<script lang="ts">
	interface Props {
		className?: string;
		[key: string]: any;
	}

	let { className = '', ...restProps }: Props = $props();
</script>

<input class={`bg-bg-dark outline-1 outline-fg-dark py-1 bInput ${className}`} {...restProps} />

<style>
	.bInput:focus {
		outline-width: 3px;
	}
</style>
