<script>
	import { Table } from '@bios-ui/svelte';
	import CodeScript from '$lib/docs/code-script.svelte';

	const codeExample = `<` + `script>
	import { Table } from '@bios-ui/svelte';
</` + `script>

<Table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Age</th>
			<th>City</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>John</td>
			<td>25</td>
			<td>New York</td>
		</tr>
		<tr>
			<td>Jane</td>
			<td>30</td>
			<td>Los Angeles</td>
		</tr>
	</tbody>
</Table>`;
</script>

<div class="max-w-4xl">
	<div class="mb-8">
		<h1 class="text-5xl font-bold color-fg-dark mb-4">Table</h1>
		<p class="text-xl text-secondary leading-relaxed">
			A styled table component with consistent borders and styling.
		</p>
	</div>

	<div
		class="bg-bg-darker text-secondary rounded-2xl p-8 shadow-lg border border-slate-200/60 mb-8"
	>
		<div
			class="bg-bg-dark flex items-center justify-center rounded-xl p-8 border border-slate-200/60"
		>
			<Table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>City</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>John</td>
						<td>25</td>
						<td>New York</td>
					</tr>
					<tr>
						<td>Jane</td>
						<td>30</td>
						<td>Los Angeles</td>
					</tr>
				</tbody>
			</Table>
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
				<strong>Note:</strong> The Table component also accepts all standard HTML table attributes
				via <code class="bg-blue-100 px-1 py-0.5 rounded font-mono">$$restProps</code>.
			</p>
		</div>
	</div>
</div>
