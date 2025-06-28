<script lang="ts">
	import { page } from '$app/stores';
import '../app.css';
import '@bios-ui/core/css';

	const navigation = [
		{
			title: 'Getting Started',
			items: [
				{ name: 'Installation', href: '/installation' }
			]
		},
		{
			title: 'Components',
			items: [{ name: 'Button', href: '/components/button' }]
		}
	];
</script>

<div class="min-h-screen flex flex-row page-container">
	<aside class="w-72 bg-bg-dark backdrop-blur-sm shadow-xl border-r border-slate-200/60 h-screen overflow-y-auto">
		<div class="p-8">
			<div class="flex items-center gap-3 mb-10">
				<div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
					<span class="text-white font-bold text-lg">B</span>
				</div>
				<div>
					<h1 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BIOS UI</h1>
					<p class="text-sm text-slate-500">Svelte Components</p>
				</div>
			</div>

			{#each navigation as section}
				<div class="mb-8 bg-bg-dark">
					<h2 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-3">
						{section.title}
					</h2>
					<div class="space-y-1">
						{#each section.items as item}
							<a
								href={item.href}
								class="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 {$page
									.url.pathname === item.href
									? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-200'
									: 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:translate-x-1'}"
							>
								{item.name}
							</a>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</aside>

	<main class="flex-1 ml-72">
		<div class="px-12 py-12">
			<slot />
		</div>
	</main>
</div>
