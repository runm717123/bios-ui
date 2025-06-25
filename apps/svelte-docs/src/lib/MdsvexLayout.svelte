<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	onMount(() => {
		if (browser) {
			// Add Prism CSS for syntax highlighting
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css';
			document.head.appendChild(link);
		}
	});
</script>

<div class="bDocs-mdsvex-layout">
	<slot />
</div>

<style>
	.bDocs-mdsvex-layout {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	:global(.bDocs-mdsvex-layout h1) {
		font-size: 2.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: #1a1a1a;
		border-bottom: 2px solid #e2e8f0;
		padding-bottom: 0.5rem;
	}

	:global(.bDocs-mdsvex-layout h2) {
		font-size: 2rem;
		font-weight: 600;
		margin: 2rem 0 1rem 0;
		color: #2d3748;
	}

	:global(.bDocs-mdsvex-layout h3) {
		font-size: 1.5rem;
		font-weight: 500;
		margin: 1.5rem 0 0.75rem 0;
		color: #4a5568;
	}

	:global(.bDocs-mdsvex-layout p) {
		margin-bottom: 1rem;
		line-height: 1.6;
		color: #2d3748;
	}

	:global(.bDocs-mdsvex-layout pre) {
		background: #f7fafc;
		border: 1px solid #e2e8f0;
		border-radius: 0.375rem;
		padding: 1rem;
		overflow-x: auto;
		margin: 1rem 0;
	}

	:global(.bDocs-mdsvex-layout code) {
		background: #edf2f7;
		padding: 0.125rem 0.25rem;
		border-radius: 0.25rem;
		font-size: 0.875rem;
		font-family: 'Fira Code', 'Consolas', monospace;
	}

	:global(.bDocs-mdsvex-layout pre code) {
		background: transparent;
		padding: 0;
	}

	:global(.bDocs-mdsvex-layout .demo-container) {
		border: 1px solid #e2e8f0;
		border-radius: 0.5rem;
		padding: 2rem;
		margin: 1.5rem 0;
		background: #ffffff;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
	}

	:global(.bDocs-mdsvex-layout .demo-grid) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		align-items: center;
	}

	:global(.bDocs-mdsvex-layout .demo-item) {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	:global(.bDocs-mdsvex-layout .demo-label) {
		font-size: 0.875rem;
		color: #718096;
		text-align: center;
	}

	:global(.bDocs-mdsvex-layout ul) {
		margin: 1rem 0;
		padding-left: 1.5rem;
	}

	:global(.bDocs-mdsvex-layout li) {
		margin-bottom: 0.5rem;
		line-height: 1.6;
	}

	:global(.bDocs-mdsvex-layout table) {
		width: 100%;
		border-collapse: collapse;
		margin: 1.5rem 0;
	}

	:global(.bDocs-mdsvex-layout th),
	:global(.bDocs-mdsvex-layout td) {
		padding: 0.75rem;
		text-align: left;
		border-bottom: 1px solid #e2e8f0;
	}

	:global(.bDocs-mdsvex-layout th) {
		background: #f7fafc;
		font-weight: 600;
	}
</style>
