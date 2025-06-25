<script lang="ts">
	import { Input, InputLabel } from '@bios-ui/svelte';
	
	let inputValue = '';
	let emailValue = '';
	let passwordValue = '';
</script>

<div class="bDocs-component">
	<h1 class="bDocs-component-title">Input</h1>
	<p class="bDocs-component-description">
		A flexible input component that supports various input types and can be combined with labels.
		Built with accessibility standards and provides consistent styling across all input types.
	</p>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Default</h2>
		<div class="bDocs-story-canvas">
			<Input placeholder="Enter text..." bind:value={inputValue} />
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;Input placeholder="Enter text..." bind:value={"{inputValue}"} /&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">With Label</h2>
		<div class="bDocs-story-canvas">
			<div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 300px;">
				<InputLabel for="email-input">Email Address</InputLabel>
				<Input 
					id="email-input"
					type="email" 
					placeholder="you@example.com" 
					bind:value={emailValue} 
				/>
			</div>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;InputLabel for="email-input"&gt;Email Address&lt;/InputLabel&gt;
&lt;Input 
  id="email-input"
  type="email" 
  placeholder="you@example.com" 
  bind:value={"{emailValue}"} 
/&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Input Types</h2>
		<div class="bDocs-story-canvas">
			<div style="display: grid; gap: 1rem; max-width: 400px;">
				<div>
					<InputLabel for="text-input">Text</InputLabel>
					<Input id="text-input" type="text" placeholder="Text input" />
				</div>
				<div>
					<InputLabel for="email-input-2">Email</InputLabel>
					<Input id="email-input-2" type="email" placeholder="email@domain.com" />
				</div>
				<div>
					<InputLabel for="password-input">Password</InputLabel>
					<Input 
						id="password-input" 
						type="password" 
						placeholder="Enter password" 
						bind:value={passwordValue} 
					/>
				</div>
				<div>
					<InputLabel for="number-input">Number</InputLabel>
					<Input id="number-input" type="number" placeholder="123" />
				</div>
				<div>
					<InputLabel for="date-input">Date</InputLabel>
					<Input id="date-input" type="date" />
				</div>
			</div>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;Input type="text" placeholder="Text input" /&gt;
&lt;Input type="email" placeholder="email@domain.com" /&gt;
&lt;Input type="password" placeholder="Enter password" /&gt;
&lt;Input type="number" placeholder="123" /&gt;
&lt;Input type="date" /&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">States</h2>
		<div class="bDocs-story-canvas">
			<div style="display: grid; gap: 1rem; max-width: 400px;">
				<div>
					<InputLabel for="normal-input">Normal</InputLabel>
					<Input id="normal-input" placeholder="Normal input" />
				</div>
				<div>
					<InputLabel for="disabled-input">Disabled</InputLabel>
					<Input id="disabled-input" placeholder="Disabled input" disabled />
				</div>
				<div>
					<InputLabel for="readonly-input">Read Only</InputLabel>
					<Input id="readonly-input" value="Read only value" readonly />
				</div>
			</div>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;Input placeholder="Normal input" /&gt;
&lt;Input placeholder="Disabled input" disabled /&gt;
&lt;Input value="Read only value" readonly /&gt;</code></pre>
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
				<td><code>type</code></td>
				<td><code>string</code></td>
				<td><code>'text'</code></td>
				<td>The input type (text, email, password, etc.)</td>
			</tr>
			<tr>
				<td><code>value</code></td>
				<td><code>string</code></td>
				<td><code>''</code></td>
				<td>The input value</td>
			</tr>
			<tr>
				<td><code>placeholder</code></td>
				<td><code>string</code></td>
				<td><code>undefined</code></td>
				<td>Placeholder text</td>
			</tr>
			<tr>
				<td><code>disabled</code></td>
				<td><code>boolean</code></td>
				<td><code>false</code></td>
				<td>Whether the input is disabled</td>
			</tr>
			<tr>
				<td><code>readonly</code></td>
				<td><code>boolean</code></td>
				<td><code>false</code></td>
				<td>Whether the input is read-only</td>
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
