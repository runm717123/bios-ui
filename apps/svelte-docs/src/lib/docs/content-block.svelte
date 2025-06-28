<script lang="ts">
	import type { Snippet } from 'svelte';

	interface TitleProps {
		icon: string;
		text: string;
	}

	interface Props {
		title: TitleProps;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<div class="bg-bg-dark text-secondary rounded-2xl p-8 shadow-lg border border-slate-200/60 mb-8">
	<h2 class="text-2xl font-bold text-fg-dark mb-6 flex items-center gap-3">
		<div class="w-8 h-8 bg-fg-dark rounded-lg flex items-center justify-center">
			<span class="text-white text-sm">{title.icon}</span>
		</div>
		{title.text}
	</h2>

	{@render children()}
</div>
