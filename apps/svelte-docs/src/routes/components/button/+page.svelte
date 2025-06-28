<script>
	import { Button } from '@bios-ui/svelte-v2';
</script>

<div class="max-w-4xl">
	<div class="mb-8">
		<h1 class="text-5xl font-bold color-fg-dark mb-4">Button</h1>
		<p class="text-xl text-secondary leading-relaxed">
			A versatile button component with multiple sizes and customizable styling.
		</p>
	</div>

	<!-- Preview Section -->
	<div
		class="bg-bg-darker text-secondary rounded-2xl p-8 shadow-lg border border-slate-200/60 mb-8"
	>
		<div
			class="bg-bg-dark flex items-center justify-center rounded-xl p-8 border border-slate-200/60"
		>
			<Button size="medium">Click me</Button>
		</div>

		<div class="overflow-hidden rounded-xl border border-slate-200 mt-5">
			<table class="w-full">
				<thead class="bg-slate-50">
					<tr>
						<th class="px-6 py-4 text-left text-sm font-semibold text-slate-700">Prop</th>
						<th class="px-6 py-4 text-left text-sm font-semibold text-slate-700">Type</th>
						<th class="px-6 py-4 text-left text-sm font-semibold text-slate-700">Default</th>
						<th class="px-6 py-4 text-left text-sm font-semibold text-slate-700">Description</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-slate-200">
					<tr>
						<td class="px-6 py-4 text-sm font-mono text-slate-800">size</td>
						<td class="px-6 py-4 text-sm text-slate-600">'small' | 'medium' | 'large'</td>
						<td class="px-6 py-4 text-sm font-mono text-slate-800">'medium'</td>
						<td class="px-6 py-4 text-sm text-slate-600">Controls the size of the button</td>
					</tr>
					<tr>
						<td class="px-6 py-4 text-sm font-mono text-slate-800">className</td>
						<td class="px-6 py-4 text-sm text-slate-600">string</td>
						<td class="px-6 py-4 text-sm font-mono text-slate-800">''</td>
						<td class="px-6 py-4 text-sm text-slate-600">Additional CSS classes to apply</td>
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
