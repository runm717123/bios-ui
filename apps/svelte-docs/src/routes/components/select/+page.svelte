<script lang="ts">
	import { Select, InputLabel } from '@bios-ui/svelte';
	
	const fruitOptions = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'orange', label: 'Orange' },
		{ value: 'grape', label: 'Grape' },
		{ value: 'strawberry', label: 'Strawberry' }
	];
	
	const countryOptions = [
		{ value: 'us', label: 'United States' },
		{ value: 'ca', label: 'Canada' },
		{ value: 'uk', label: 'United Kingdom' },
		{ value: 'de', label: 'Germany' },
		{ value: 'fr', label: 'France' }
	];
	
	let selectedFruit = '';
	let selectedCountry = '';
</script>

<div class="bDocs-component">
	<h1 class="bDocs-component-title">Select</h1>
	<p class="bDocs-component-description">
		A dropdown select component that renders a list of options. Supports both simple and complex option structures
		with consistent styling and accessibility features.
	</p>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Default</h2>
		<div class="bDocs-story-canvas">
			<Select options={fruitOptions} bind:value={selectedFruit} />
		</div>
		<div class="bDocs-story-code">
			<pre><code>const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' }
];

&lt;Select options={"{options}"} bind:value={"{selectedFruit}"} /&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">With Label</h2>
		<div class="bDocs-story-canvas">
			<div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 300px;">
				<InputLabel for="country-select">Choose Country</InputLabel>
				<Select 
					id="country-select"
					options={countryOptions} 
					bind:value={selectedCountry} 
				/>
				{#if selectedCountry}
					<p style="margin: 0.5rem 0 0 0; font-size: 0.875rem; color: var(--color-fg-medium);">
						Selected: {countryOptions.find(c => c.value === selectedCountry)?.label}
					</p>
				{/if}
			</div>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;InputLabel for="country-select"&gt;Choose Country&lt;/InputLabel&gt;
&lt;Select 
  id="country-select"
  options={"{countryOptions}"} 
  bind:value={"{selectedCountry}"} 
/&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">States</h2>
		<div class="bDocs-story-canvas">
			<div style="display: grid; gap: 1rem; max-width: 400px;">
				<div>
					<InputLabel for="normal-select">Normal</InputLabel>
					<Select id="normal-select" options={fruitOptions} />
				</div>
				<div>
					<InputLabel for="disabled-select">Disabled</InputLabel>
					<Select id="disabled-select" options={fruitOptions} disabled />
				</div>
			</div>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;Select options={"{options}"} /&gt;
&lt;Select options={"{options}"} disabled /&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Custom Styling</h2>
		<div class="bDocs-story-canvas">
			<Select options={fruitOptions} class="custom-select" />
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;Select options={"{options}"} class="custom-select" /&gt;</code></pre>
		</div>
	</div>

	<table class="bDocs-props-table">
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
				<td><code>options</code></td>
				<td><code>ISelectOptions[]</code></td>
				<td><code>[]</code></td>
				<td>Array of options with value and label properties</td>
			</tr>
			<tr>
				<td><code>value</code></td>
				<td><code>string</code></td>
				<td><code>''</code></td>
				<td>The selected value</td>
			</tr>
			<tr>
				<td><code>disabled</code></td>
				<td><code>boolean</code></td>
				<td><code>false</code></td>
				<td>Whether the select is disabled</td>
			</tr>
			<tr>
				<td><code>class</code></td>
				<td><code>string</code></td>
				<td><code>''</code></td>
				<td>Additional CSS classes</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	:global(.custom-select) {
		border-color: #28a745 !important;
		border-width: 3px !important;
	}
</style>
