<script lang="ts">
	import { page } from '$app/stores';
	
	const navigation = [
		{
			title: 'Getting Started',
			items: [
				{ name: 'Introduction', href: '/' },
				{ name: 'Installation', href: '/installation' }
			]
		},
		{
			title: 'Components',
			items: [
				{ name: 'Button', href: '/components/button' },
				{ name: 'Input', href: '/components/input' },
				{ name: 'Select', href: '/components/select' },
				{ name: 'TextArea', href: '/components/textarea' },
				{ name: 'Table', href: '/components/table' },
				{ name: 'Typography', href: '/components/typography' }
			]
		}
	];
</script>

<div class="bDocs-layout">
	<aside class="bDocs-sidebar">
		<nav class="bDocs-nav">
			<h1 class="bDocs-nav-title">BIOS UI</h1>
			
			{#each navigation as section}
				<div class="bDocs-nav-section">
					<h2 class="bDocs-nav-section-title">{section.title}</h2>
					{#each section.items as item}
						<a 
							href={item.href} 
							class="bDocs-nav-link"
							class:active={$page.url.pathname === item.href}
						>
							{item.name}
						</a>
					{/each}
				</div>
			{/each}
		</nav>
	</aside>

	<main class="bDocs-main">
		<header class="bDocs-header">
			<h1>Svelte Component Library</h1>
		</header>
		
		<div class="bDocs-content">
			<slot />
		</div>
	</main>
</div>
