<script>
	import { Toggle, InputLabel } from '@bios-ui/svelte';
	import CodeScript from '$lib/docs/code-script.svelte';

	let isToggled = $state(false);

	const codeExample = `<script>
	import { Toggle, InputLabel } from '@bios-ui/svelte';
	
	let isToggled = $state(false);
<\/script>

<InputLabel>
  Enable notifications
  <Toggle bind:checked={isToggled} />
</InputLabel>`;
</script>

<div class="max-w-4xl">
	<div class="mb-8">
		<h1 class="text-5xl font-bold color-fg-dark mb-4">Toggle</h1>
		<p class="text-xl text-secondary leading-relaxed">
			A toggle switch component for boolean input with multiple sizes and smooth animations.
		</p>
	</div>

	<div
		class="bg-bg-darker text-secondary rounded-2xl p-8 shadow-lg border border-slate-200/60 mb-8"
	>
		<InputLabel class="flex items-center justify-center gap-2">
			Enable notifications
			<Toggle bind:checked={isToggled} />
		</InputLabel>

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
						<td>checked</td>
						<td>boolean</td>
						<td>false</td>
						<td>Controls the toggle state (bindable)</td>
					</tr>
					<tr>
						<td>disabled</td>
						<td>boolean</td>
						<td>false</td>
						<td>Disables the toggle interaction</td>
					</tr>
					<tr>
						<td>size</td>
						<td>'sm' | 'md' | 'lg'</td>
						<td>'md'</td>
						<td>Controls the size of the toggle</td>
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
				<strong>Note:</strong> The Toggle component also accepts all standard HTML button attributes
				via <code class="bg-blue-100 px-1 py-0.5 rounded font-mono">$$restProps</code>.
			</p>
		</div>

		<!-- Size Examples -->
		<div class="mt-8">
			<h3 class="text-xl font-semibold text-fg-dark mb-4">Size Examples</h3>
			<div class="bg-bg-dark rounded-xl p-6 border border-slate-200/60">
				<div class="flex items-center gap-8">
					<div class="flex items-center gap-2">
						<span class="text-sm text-secondary">Small:</span>
						<Toggle size="sm" />
					</div>
					<div class="flex items-center gap-2">
						<span class="text-sm text-secondary">Medium:</span>
						<Toggle size="md" />
					</div>
					<div class="flex items-center gap-2">
						<span class="text-sm text-secondary">Large:</span>
						<Toggle size="lg" />
					</div>
				</div>
			</div>
		</div>

		<!-- States Example -->
		<div class="mt-8">
			<h3 class="text-xl font-semibold text-fg-dark mb-4">States</h3>
			<div class="bg-bg-dark rounded-xl p-6 border border-slate-200/60">
				<div class="flex items-center gap-8">
					<div class="flex items-center gap-2">
						<span class="text-sm text-secondary">Unchecked:</span>
						<Toggle checked={false} />
					</div>
					<div class="flex items-center gap-2">
						<span class="text-sm text-secondary">Checked:</span>
						<Toggle checked={true} />
					</div>
					<div class="flex items-center gap-2">
						<span class="text-sm text-secondary">Disabled:</span>
						<Toggle disabled={true} />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
