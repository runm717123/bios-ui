<script>
	import { codeToHtml } from '$lib/utils/shiki';
	import { Button } from '@bios-ui/svelte';
	import CodeScript from '$lib/docs/code-script.svelte';

	let highlightedCode = $state('');

	const codeExample =
		`<` +
		`script>
	import { Button } from '@bios-ui/svelte';
</` +
		`script>
<Button size="medium">Small</Button>
`;

	$effect(() => {
		codeToHtml(codeExample).then((html) => {
			highlightedCode = html;
		});
	});
</script>

<div class="max-w-4xl">
	<div class="mb-8">
		<h1 class="text-5xl font-bold color-fg-dark mb-4">Button</h1>
		<p class="text-xl text-secondary leading-relaxed">
			A versatile button component with multiple sizes and customizable styling.
		</p>
	</div>

	<div
		class="bg-bg-darker text-secondary rounded-2xl p-8 shadow-lg border border-slate-200/60 mb-8"
	>
		<div
			class="bg-bg-dark flex items-center justify-center rounded-xl p-8 border border-slate-200/60"
		>
			<Button size="medium">Click me</Button>
		</div>

		<div class="mt-6">
			<CodeScript {highlightedCode} {codeExample} />
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
						<td>size</td>
						<td>'small' | 'medium' | 'large'</td>
						<td>'medium'</td>
						<td>Controls the size of the button</td>
					</tr>
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
				<strong>Note:</strong> The Button component also accepts all standard HTML button attributes
				via <code class="bg-blue-100 px-1 py-0.5 rounded font-mono">$$restProps</code>.
			</p>
		</div>
	</div>
</div>
