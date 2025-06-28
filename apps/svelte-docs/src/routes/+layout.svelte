<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	import '@bios-ui/core/css';

	let isSidebarOpen = false;

	const navigation = [
		{
			title: 'Getting Started',
			items: [{ name: 'Installation', href: '/installation' }]
		},
		{
			title: 'Components',
			items: [{ name: 'Button', href: '/components/button' }]
		}
	];

	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}

	function closeSidebar() {
		isSidebarOpen = false;
	}
</script>

<div class="h-screen flex flex-row page-container">
	<!-- Mobile hamburger button -->
	<button
		class="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg border border-slate-200 md:hidden"
		on:click={toggleSidebar}
		aria-label="Toggle sidebar"
	>
		<svg
			class="w-6 h-6 text-slate-700"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			></path>
		</svg>
	</button>

	<!-- Mobile overlay -->
	{#if isSidebarOpen}
		<div
			class="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
			on:click={closeSidebar}
			on:keydown={(e) => e.key === 'Escape' && closeSidebar()}
			role="button"
			tabindex="0"
		></div>
	{/if}

	<aside
		class="w-72 bg-bg-dark shadow-xl border-r border-slate-200/60 h-full overflow-y-auto p-8 
		       fixed md:static z-40 transform transition-transform duration-300 ease-in-out
		       {isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0"
	>
		<div class="flex items-center gap-3 mb-10">
			<div
				class="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center"
			>
				<span class="text-white font-bold text-lg">B</span>
			</div>
			<div>
				<h1
					class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
				>
					BIOS UI
				</h1>
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
							on:click={closeSidebar}
						>
							{item.name}
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</aside>

	<main class="flex-1 md:ml-0 pt-16 md:pt-0 h-full overflow-y-auto">
		<div class="px-4 md:px-12 py-6 md:py-12">
			<slot />
		</div>
	</main>
</div>
