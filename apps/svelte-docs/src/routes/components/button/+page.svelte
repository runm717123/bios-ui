<script lang="ts">
	import { Button } from '@bios-ui/svelte';
</script>

<div class="bDocs-component">
	<h1 class="bDocs-component-title">Button</h1>
	<p class="bDocs-component-description">
		A versatile button component that supports different sizes and can be customized with various props.
		Built with accessibility in mind and follows semantic HTML standards.
	</p>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Default</h2>
		<div class="bDocs-story-canvas">
			<Button>Click me</Button>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;Button&gt;Click me&lt;/Button&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Sizes</h2>
		<div class="bDocs-story-canvas">
			<div class="bDocs-component-grid">
				<div class="bDocs-component-grid-item">
					<Button size="small">Small</Button>
					<span class="bDocs-component-grid-label">Small</span>
				</div>
				<div class="bDocs-component-grid-item">
					<Button size="medium">Medium</Button>
					<span class="bDocs-component-grid-label">Medium (Default)</span>
				</div>
				<div class="bDocs-component-grid-item">
					<Button size="large">Large</Button>
					<span class="bDocs-component-grid-label">Large</span>
				</div>
			</div>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;Button size="small"&gt;Small&lt;/Button&gt;
&lt;Button size="medium"&gt;Medium&lt;/Button&gt;
&lt;Button size="large"&gt;Large&lt;/Button&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">States</h2>
		<div class="bDocs-story-canvas">
			<div class="bDocs-component-grid">
				<div class="bDocs-component-grid-item">
					<Button>Default</Button>
					<span class="bDocs-component-grid-label">Default</span>
				</div>
				<div class="bDocs-component-grid-item">
					<Button disabled>Disabled</Button>
					<span class="bDocs-component-grid-label">Disabled</span>
				</div>
			</div>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;Button&gt;Default&lt;/Button&gt;
&lt;Button disabled&gt;Disabled&lt;/Button&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Custom Styling</h2>
		<div class="bDocs-story-canvas">
			<Button class="custom-button">Custom Styled</Button>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;Button class="custom-button"&gt;Custom Styled&lt;/Button&gt;</code></pre>
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
				<td><code>size</code></td>
				<td><code>'small' | 'medium' | 'large'</code></td>
				<td><code>'medium'</code></td>
				<td>Controls the size of the button</td>
			</tr>
			<tr>
				<td><code>class</code></td>
				<td><code>string</code></td>
				<td><code>''</code></td>
				<td>Additional CSS classes to apply</td>
			</tr>
			<tr>
				<td><code>disabled</code></td>
				<td><code>boolean</code></td>
				<td><code>false</code></td>
				<td>Whether the button is disabled</td>
			</tr>
			<tr>
				<td><code>type</code></td>
				<td><code>'button' | 'submit' | 'reset'</code></td>
				<td><code>'button'</code></td>
				<td>The button type attribute</td>
			</tr>
			<tr>
				<td><code>onclick</code></td>
				<td><code>() => void</code></td>
				<td><code>undefined</code></td>
				<td>Click event handler</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	:global(.custom-button) {
		background-color: #007bff !important;
		color: white !important;
		border-color: #007bff !important;
	}
</style>
