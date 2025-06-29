<script>
	import { codeToHtml } from '$lib/utils/shiki';
	import { Input, InputLabel } from '@bios-ui/svelte';
	import { onMount } from 'svelte';

	let highlightedCode = '';

	const codeExample = `<` + `script>
	import { Input, InputLabel } from '@bios-ui/svelte';
</` + `script>

<InputLabel>
  Field Label
  <Input placeholder="Enter text here..." />
</InputLabel>`;

	onMount(async () => {
		highlightedCode = await codeToHtml(codeExample);
	});
</script>

<div class="max-w-4xl">
	<div class="mb-8">
		<h1 class="text-5xl font-bold color-fg-dark mb-4">Input</h1>
		<p class="text-xl text-secondary leading-relaxed">
			A styled input field component with focus states and customizable styling.
		</p>
	</div>

	<div
		class="bg-bg-darker text-secondary rounded-2xl p-8 shadow-lg border border-slate-200/60 mb-8"
	>
		<div
			class="bg-bg-dark flex items-center justify-center rounded-xl p-8 border border-slate-200/60"
		>
			<InputLabel>
        Field Label
				<Input placeholder="Enter text here..." />
			</InputLabel>
		</div>

		<!-- Code Example Section -->
		<div class="mt-6">
			<h3 class="text-lg font-semibold text-fg-dark mb-3">Usage Examples</h3>
			<div class="overflow-hidden rounded-xl border border-slate-200">
				{@html highlightedCode}
			</div>
		</div>

		<div class="overflow-hidden rounded-xl border border-slate-200 mt-5">
			<table class="table-v2">
				<thead>
					<tr>
						<th>Prop</th>
						<th>Type</th>
						<th>Default</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>className</td>
						<td>string</td>
						<td>''</td>
						<td>Additional CSS classes to apply</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
			<p class="text-sm text-blue-700">
				<strong>Note:</strong> The Input component also accepts all standard HTML input attributes
				via <code class="bg-blue-100 px-1 py-0.5 rounded font-mono">$$restProps</code>.
			</p>
		</div>
	</div>
</div>
