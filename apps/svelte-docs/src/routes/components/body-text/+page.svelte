<script>
	import { BodyText } from '@bios-ui/svelte';
	import CodeScript from '$lib/docs/code-script.svelte';

	const codeExample = `<` + `script>
	import { BodyText } from '@bios-ui/svelte';
</` + `script>

<BodyText>This is body text content</BodyText>`;
</script>

<div class="max-w-4xl">
	<div class="mb-8">
		<h1 class="text-5xl font-bold color-fg-dark mb-4">BodyText</h1>
		<p class="text-xl text-secondary leading-relaxed">
			A basic text component for body content with standard font size.
		</p>
	</div>

	<div
		class="bg-bg-darker text-secondary rounded-2xl p-8 shadow-lg border border-slate-200/60 mb-8"
	>
		<div
			class="bg-bg-dark flex items-center justify-center rounded-xl p-8 border border-slate-200/60"
		>
			<BodyText>This is body text content</BodyText>
		</div>

		<!-- Code Example Section -->
		<div class="mt-6">
			<CodeScript scripts={codeExample} />
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
				<strong>Note:</strong> The BodyText component also accepts all standard HTML span attributes
				via <code class="bg-blue-100 px-1 py-0.5 rounded font-mono">$$restProps</code>.
			</p>
		</div>
	</div>
</div>
