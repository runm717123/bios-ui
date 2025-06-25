<div class="bDocs-component">
	<h1 class="bDocs-component-title">Installation</h1>
	<p class="bDocs-component-description">
		Get started with BIOS UI Svelte components in your project. Follow these steps to install and configure
		the component library in your Svelte application.
	</p>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Package Installation</h2>
		<p>Install the BIOS UI Svelte package and its peer dependencies:</p>
		<div class="bDocs-story-code">
			<pre><code># Using npm
npm install @bios-ui/svelte @bios-ui/core

# Using pnpm
pnpm add @bios-ui/svelte @bios-ui/core

# Using yarn
yarn add @bios-ui/svelte @bios-ui/core</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">CSS Import</h2>
		<p>Import the core CSS styles in your main application file:</p>
		<div class="bDocs-story-code">
			<pre><code>// In your main.ts or App.svelte
import '@bios-ui/core/index.css';</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Basic Usage</h2>
		<p>Import and use components in your Svelte files:</p>
		<div class="bDocs-story-code">
			<pre><code>&lt;script lang="ts"&gt;
  import { Button, Input, Select } from '@bios-ui/svelte';
  
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ];
  
  let inputValue = '';
  let selectedValue = '';
&lt;/script&gt;

&lt;div&gt;
  &lt;Button&gt;Click me&lt;/Button&gt;
  &lt;Input bind:value={inputValue} placeholder="Enter text..." /&gt;
  &lt;Select {options} bind:value={selectedValue} /&gt;
&lt;/div&gt;</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Available Components</h2>
		<p>The library includes the following components:</p>
		<ul>
			<li><strong>Button</strong> - Interactive button with size variants</li>
			<li><strong>Input</strong> - Text input with various types</li>
			<li><strong>InputLabel</strong> - Accessible labels for form inputs</li>
			<li><strong>Select</strong> - Dropdown select with options</li>
			<li><strong>TextArea</strong> - Multi-line text input</li>
			<li><strong>Table</strong> - Styled table for tabular data</li>
			<li><strong>BodyText</strong> - Standard body text component</li>
			<li><strong>BodyTextSmall</strong> - Smaller text for secondary content</li>
		</ul>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">TypeScript Support</h2>
		<p>All components are built with TypeScript and provide full type safety:</p>
		<div class="bDocs-story-code">
			<pre><code>import type { ISelectOptions } from '@bios-ui/svelte';

const typedOptions: ISelectOptions[] = [
  { value: 'js', label: 'JavaScript' },
  { value: 'ts', label: 'TypeScript' },
  { value: 'svelte', label: 'Svelte' }
];</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">CSS Custom Properties</h2>
		<p>The design system uses CSS custom properties that you can override:</p>
		<div class="bDocs-story-code">
			<pre><code>/* In your global CSS */
:root {
  --color-primary-light: #e3f2fd;
  --color-primary-dark: #1976d2;
  --color-fg-dark: #212121;
  --color-bg-light: #f5f5f5;
  --font-family-base: 'Inter', sans-serif;
  --font-size-base: 1rem;
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
}</code></pre>
		</div>
	</div>

	<div class="bDocs-story">
		<h2 class="bDocs-story-title">Next Steps</h2>
		<p>Now that you have the library installed, explore the component documentation:</p>
		<ul>
			<li>Browse individual component pages for detailed examples</li>
			<li>Check out the interactive demos and code snippets</li>
			<li>Review the props tables for configuration options</li>
			<li>Experiment with custom styling and CSS classes</li>
		</ul>
	</div>
</div>
