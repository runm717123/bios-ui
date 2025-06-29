<script>
	import { copyToClipboard } from '$lib/utils/clipboard';
	import { CopyCheckIcon, CopyIcon } from '@lucide/svelte';

	let { highlightedCode, codeExample } = $props();

	let isCopied = $state(false);
	
	const handleCopy = async () => {
		await copyToClipboard(codeExample);
		isCopied = true;

		setTimeout(() => {
			isCopied = false;
		}, 1000);
	};
</script>

<div class="relative overflow-hidden rounded-xl border border-slate-200">
	<button
		onclick={handleCopy}
		class="absolute top-3 right-3 z-10 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
		title="Copy code"
	>
		{#if isCopied}
			<CopyCheckIcon color="var(--color-fg-dark)" size={15} />
		{:else}
			<CopyIcon size={15} />
		{/if}
	</button>
	{@html highlightedCode}
</div>
