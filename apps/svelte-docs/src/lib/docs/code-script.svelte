<script>
	import { codeToHtml } from '$lib/utils/shiki';
	import { copyToClipboard } from '$lib/utils/clipboard';
	import { CopyCheckIcon, CopyIcon } from '@lucide/svelte';

	let { scripts, fileName = '+page.svelte' } = $props();

	let isCopied = $state(false);
	let highlightedCode = $state('');

	const handleCopy = async () => {
		await copyToClipboard(scripts);
		isCopied = true;

		setTimeout(() => {
			isCopied = false;
		}, 1000);
	};

	$effect(() => {
		if (scripts) {
			codeToHtml(scripts).then((html) => {
				highlightedCode = html;
			});
		}
	});
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
	{#if fileName}
		<div class="text-xs pl-2 pt-2 -mb-1">
			&lt;!-- {fileName} --&gt;
		</div>
	{/if}
	{@html highlightedCode}
</div>
