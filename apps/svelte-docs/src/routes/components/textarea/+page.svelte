<script lang="ts">
	import { TextArea, InputLabel } from '@bios-ui/svelte';
	
	let textValue = '';
	let longTextValue = '';
</script>

<div class="bDocs-component">
	<h1 class="bDocs-component-title">TextArea</h1>
	<p class="bDocs-component-description">
		A multiline text input component that provides a larger text editing area. 
		Perfect for comments, descriptions, and other longer text content.
	</p>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Default</h2>
		<div class="bDocs-story-canvas">
			<TextArea placeholder="Enter your message..." bind:value={textValue} />
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;TextArea placeholder="Enter your message..." bind:value={"{textValue}"} /&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">With Label</h2>
		<div class="bDocs-story-canvas">
			<div style="display: flex; flex-direction: column; gap: 0.5rem; max-width: 500px;">
				<InputLabel for="message-textarea">Your Message</InputLabel>
				<TextArea 
					id="message-textarea"
					placeholder="Tell us about your experience..." 
					bind:value={longTextValue}
					rows="5"
				/>
			</div>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;InputLabel for="message-textarea"&gt;Your Message&lt;/InputLabel&gt;
&lt;TextArea 
  id="message-textarea"
  placeholder="Tell us about your experience..." 
  bind:value={"{longTextValue}"}
  rows="5"
/&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Different Sizes</h2>
		<div class="bDocs-story-canvas">
			<div style="display: grid; gap: 1rem; max-width: 500px;">
				<div>
					<InputLabel for="small-textarea">Small (3 rows)</InputLabel>
					<TextArea id="small-textarea" placeholder="Small textarea..." rows="3" />
				</div>
				<div>
					<InputLabel for="medium-textarea">Medium (5 rows)</InputLabel>
					<TextArea id="medium-textarea" placeholder="Medium textarea..." rows="5" />
				</div>
				<div>
					<InputLabel for="large-textarea">Large (8 rows)</InputLabel>
					<TextArea id="large-textarea" placeholder="Large textarea..." rows="8" />
				</div>
			</div>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;TextArea placeholder="Small textarea..." rows="3" /&gt;
&lt;TextArea placeholder="Medium textarea..." rows="5" /&gt;
&lt;TextArea placeholder="Large textarea..." rows="8" /&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">States</h2>
		<div class="bDocs-story-canvas">
			<div style="display: grid; gap: 1rem; max-width: 500px;">
				<div>
					<InputLabel for="normal-textarea">Normal</InputLabel>
					<TextArea id="normal-textarea" placeholder="Normal textarea" />
				</div>
				<div>
					<InputLabel for="disabled-textarea">Disabled</InputLabel>
					<TextArea id="disabled-textarea" placeholder="Disabled textarea" disabled />
				</div>
				<div>
					<InputLabel for="readonly-textarea">Read Only</InputLabel>
					<TextArea id="readonly-textarea" value="This is read-only content that cannot be edited." readonly />
				</div>
			</div>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;TextArea placeholder="Normal textarea" /&gt;
&lt;TextArea placeholder="Disabled textarea" disabled /&gt;
&lt;TextArea value="Read-only content..." readonly /&gt;</code></pre>
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
				<td><code>value</code></td>
				<td><code>string</code></td>
				<td><code>''</code></td>
				<td>The textarea value</td>
			</tr>
			<tr>
				<td><code>placeholder</code></td>
				<td><code>string</code></td>
				<td><code>undefined</code></td>
				<td>Placeholder text</td>
			</tr>
			<tr>
				<td><code>rows</code></td>
				<td><code>number</code></td>
				<td><code>4</code></td>
				<td>Number of visible text lines</td>
			</tr>
			<tr>
				<td><code>cols</code></td>
				<td><code>number</code></td>
				<td><code>undefined</code></td>
				<td>Number of visible character widths</td>
			</tr>
			<tr>
				<td><code>disabled</code></td>
				<td><code>boolean</code></td>
				<td><code>false</code></td>
				<td>Whether the textarea is disabled</td>
			</tr>
			<tr>
				<td><code>readonly</code></td>
				<td><code>boolean</code></td>
				<td><code>false</code></td>
				<td>Whether the textarea is read-only</td>
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
