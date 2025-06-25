<script lang="ts">
	import { BodyText, BodyTextSmall } from '@bios-ui/svelte';
</script>

<div class="bDocs-component">
	<h1 class="bDocs-component-title">Typography</h1>
	<p class="bDocs-component-description">
		Typography components for consistent text styling throughout your application.
		These components provide semantic meaning and consistent visual hierarchy.
	</p>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Body Text</h2>
		<div class="bDocs-story-canvas">
			<BodyText>
				This is the standard body text component. It provides consistent styling for regular paragraph content 
				and maintains proper line height and spacing for optimal readability.
			</BodyText>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;BodyText&gt;
  This is the standard body text component...
&lt;/BodyText&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Small Body Text</h2>
		<div class="bDocs-story-canvas">
			<BodyTextSmall>
				This is smaller body text, perfect for captions, disclaimers, or secondary information.
				It maintains readability while providing visual hierarchy.
			</BodyTextSmall>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;BodyTextSmall&gt;
  This is smaller body text, perfect for captions...
&lt;/BodyTextSmall&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Text Hierarchy</h2>
		<div class="bDocs-story-canvas">
			<div style="display: flex; flex-direction: column; gap: 1rem;">
				<h1 style="margin: 0;">Heading 1 - Main Title</h1>
				<h2 style="margin: 0;">Heading 2 - Section Title</h2>
				<h3 style="margin: 0;">Heading 3 - Subsection Title</h3>
				<BodyText>Regular body text for main content and paragraphs.</BodyText>
				<BodyTextSmall>Small text for captions, notes, and secondary information.</BodyTextSmall>
			</div>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;h1&gt;Heading 1 - Main Title&lt;/h1&gt;
&lt;h2&gt;Heading 2 - Section Title&lt;/h2&gt;
&lt;h3&gt;Heading 3 - Subsection Title&lt;/h3&gt;
&lt;BodyText&gt;Regular body text for main content...&lt;/BodyText&gt;
&lt;BodyTextSmall&gt;Small text for captions...&lt;/BodyTextSmall&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Text with Custom Styling</h2>
		<div class="bDocs-story-canvas">
			<div style="display: flex; flex-direction: column; gap: 1rem;">
				<BodyText class="custom-text">Custom styled body text</BodyText>
				<BodyTextSmall class="custom-small-text">Custom styled small text</BodyTextSmall>
			</div>
		</div>
		<div class="bDocs-story-code">
			<pre><code>&lt;BodyText class="custom-text"&gt;Custom styled body text&lt;/BodyText&gt;
&lt;BodyTextSmall class="custom-small-text"&gt;Custom styled small text&lt;/BodyTextSmall&gt;</code></pre>
		</div>
	</div>

	<table class="bDocs-props-table">
		<thead>
			<tr>
				<th>Component</th>
				<th>Props</th>
				<th>Description</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td><code>BodyText</code></td>
				<td><code>class?: string</code></td>
				<td>Standard body text with optimal line height and spacing</td>
			</tr>
			<tr>
				<td><code>BodyTextSmall</code></td>
				<td><code>class?: string</code></td>
				<td>Smaller text for secondary content, captions, and notes</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	:global(.custom-text) {
		color: #007bff !important;
		font-weight: 600 !important;
	}
	
	:global(.custom-small-text) {
		color: #28a745 !important;
		font-style: italic !important;
	}
</style>
