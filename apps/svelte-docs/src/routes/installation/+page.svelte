<script>
	import BasicScript from '$lib/docs/basic-script.svelte';
	import ContentBlock from '$lib/docs/content-block.svelte';
</script>

<div class="max-w-4xl">
	<div class="mb-8">
		<h1 class="text-5xl font-bold color-fg-dark mb-4">Getting Started</h1>
		<p class="text-xl text-secondary leading-relaxed">
			Install and set up BIOS UI Svelte components in your project.
		</p>
	</div>

	<ContentBlock title={{ icon: '�', text: 'Requirements' }}>
		<p class="mb-6">
			BIOS UI Svelte components are designed for simplicity and don't require complex setup. Make
			sure you have the following in your project:
		</p>

		<ul class="space-y-3 mb-6">
			<li class="flex items-center gap-3">
				<div class="w-2 h-2 bg-green-500 rounded-full"></div>
				<span><strong>Svelte 5:</strong> Latest version of Svelte framework</span>
			</li>
			<li class="flex items-center gap-3">
				<div class="w-2 h-2 bg-green-500 rounded-full"></div>
				<span><strong>Tailwind CSS 4:</strong> For styling and utility classes</span>
			</li>
			<li class="flex items-center gap-3">
				<div class="w-2 h-2 bg-green-500 rounded-full"></div>
				<span><strong>@bios-ui/core:</strong> Latest version of the core design system</span>
			</li>
		</ul>

		<div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
			<p class="text-blue-800">
				<strong>Note:</strong> No additional build tools or complex configuration required. BIOS UI components
				work out of the box with standard Svelte and Tailwind setups.
			</p>
		</div>
	</ContentBlock>

	<ContentBlock title={{ icon: '�📦', text: 'Installation' }}>
		<p class="mb-6">Install the BIOS UI Svelte package using your preferred package manager:</p>

		<div class="space-y-4">
			<BasicScript title="npm" code="npm install @bios-ui/svelte-v2 @bios-ui/core" />

			<BasicScript title="pnpm" code="pnpm add @bios-ui/svelte-v2 @bios-ui/core" />

			<BasicScript title="yarn" code="yarn add @bios-ui/svelte-v2 @bios-ui/core" />
		</div>
	</ContentBlock>
	<ContentBlock title={{ icon: '⚙️', text: 'Setup' }}>
		<div class="space-y-6">
			<div>
				<h3 class="text-lg font-semibold text-secondary mb-3">Import Styles</h3>
				<p class="text-secondary mb-4">Import the core styles in your main app file:</p>
				<BasicScript
				title="+layout.svelte"
					code="import '@bios-ui/core/index.css';"
				/>
			</div>

			<div>
				<h3 class="text-lg font-semibold text-secondary mb-3">Inject Tailwind Theme</h3>
				<p class="text-secondary mb-4">
					To inject the tailwind theme with core design tokens just after your tailwind import:
				</p>
				<BasicScript title="app.css" code="@import '@bios-ui/core/tw';" />
				<p class="my-4">this way you can use the design tokens with tailwind classes</p>
				<BasicScript code="<div class='bg-bg-dark'>your content</div>" />
			</div>

			<div>
				<h3 class="text-lg font-semibold mb-3">Import Components</h3>
				<p class="mb-4">Import and use components in your Svelte files:</p>
				<BasicScript
					code="import &#123; Button &#125; from '@bios-ui/svelte-v2';&#10;&#10;&lt;Button&gt;Click me&lt;/Button&gt;"
				/>
			</div>
		</div>
	</ContentBlock>

	<ContentBlock title={{ icon: '🔧', text: 'Troubleshooting' }}>
		<div class="space-y-6">
			<div>
				<h3 class="text-lg font-semibold mb-3">Styling Issues</h3>
				<p class="mb-4">If components don't appear styled correctly:</p>
				<ol class="list-decimal list-inside space-y-2 ml-4">
					<li>
						Ensure you've imported <code class="bg-slate-100 px-2 py-1 rounded text-sm"
							>@bios-ui/core/index.css</code
						>
					</li>
					<li>Check that the import is in the correct order (before other styles)</li>
					<li>Verify your bundler is processing CSS files correctly</li>
				</ol>
			</div>

			<div>
				<h3 class="text-lg font-semibold mb-3">TypeScript Errors</h3>
				<p class="mb-4">If you encounter TypeScript errors:</p>
				<ol class="list-decimal list-inside space-y-2 ml-4">
					<li>Ensure you're using a compatible TypeScript version (4.0+)</li>
					<li>
						Check that your <code class="bg-slate-100 px-2 py-1 rounded text-sm">tsconfig.json</code
						> includes the node_modules
					</li>
					<li>Try restarting your TypeScript server</li>
				</ol>
			</div>

			<div>
				<h3 class="text-lg font-semibold mb-3">Build Issues</h3>
				<p class="mb-4">If you encounter build issues:</p>
				<ol class="list-decimal list-inside space-y-2 ml-4">
					<li>Clear your node_modules and reinstall dependencies</li>
					<li>Check that your bundler supports Svelte files</li>
					<li>Ensure all peer dependencies are installed</li>
				</ol>
			</div>
		</div>
	</ContentBlock>

	<ContentBlock title={{ icon: '💬', text: 'Support' }}>
		<p class="mb-6">Need help? Check out:</p>

		<ul class="space-y-3">
			<li class="flex items-center gap-3">
				<div class="w-2 h-2 bg-blue-500 rounded-full"></div>
				<a
					href="https://github.com/your-repo/bios-ui/issues"
					class="text-blue-600 hover:text-blue-800 transition-colors">GitHub Issues</a
				> for bug reports
			</li>
			<li class="flex items-center gap-3">
				<div class="w-2 h-2 bg-blue-500 rounded-full"></div>
				<a href="/components/button" class="text-blue-600 hover:text-blue-800 transition-colors"
					>Documentation</a
				> for component guides
			</li>
			<li class="flex items-center gap-3">
				<div class="w-2 h-2 bg-blue-500 rounded-full"></div>
				<a
					href="https://github.com/your-repo/bios-ui/blob/main/CONTRIBUTING.md"
					class="text-blue-600 hover:text-blue-800 transition-colors">Contributing Guide</a
				> for development setup
			</li>
		</ul>
	</ContentBlock>
</div>
