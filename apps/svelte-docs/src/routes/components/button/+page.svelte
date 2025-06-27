<script>
  import { Button } from '@bios-ui/svelte-v2';
</script>

<div class="max-w-4xl">
  <div class="mb-8">
    <h1 class="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Button</h1>
    <p class="text-xl text-slate-600 leading-relaxed">A versatile button component with multiple sizes and customizable styling.</p>
  </div>

  <!-- Preview Section -->
  <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-slate-200/60 mb-8">
    <div class="flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 border border-slate-200/60">
      <Button size="medium">Click me</Button>
    </div>
  </div>

  <!-- Props Documentation -->
  <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/60 mb-8">
    <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
      <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
        <span class="text-white text-sm">⚙️</span>
      </div>
      Props
    </h2>

    <div class="overflow-hidden rounded-xl border border-slate-200">
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
        <strong>Note:</strong> The Button component also accepts all standard HTML button attributes via <code class="bg-blue-100 px-1 py-0.5 rounded font-mono">$$restProps</code>.
      </p>
    </div>
  </div>

  <!-- Examples Section -->
  <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/60">
    <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
      <div class="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
        <span class="text-white text-sm">💻</span>
      </div>
      Examples
    </h2>

    <!-- Basic Usage -->
    <div class="mb-8">
      <h3 class="text-lg font-semibold text-slate-700 mb-4">Basic Usage</h3>
      <div class="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200/60 mb-4">
        <div class="flex items-center justify-center">
          <Button>Default Button</Button>
        </div>
      </div>
      <div class="bg-slate-900 rounded-xl p-4 overflow-x-auto">
        <code class="text-green-400 text-sm">
&lt;Button&gt;Default Button&lt;/Button&gt;
        </code>
      </div>
    </div>

    <!-- Sizes -->
    <div class="mb-8">
      <h3 class="text-lg font-semibold text-slate-700 mb-4">Sizes</h3>
      <div class="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200/60 mb-4">
        <div class="flex items-center justify-center gap-4">
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </div>
      <div class="bg-slate-900 rounded-xl p-4 overflow-x-auto">
        <code class="text-green-400 text-sm">
&lt;Button size="small"&gt;Small&lt;/Button&gt;<br/>
&lt;Button size="medium"&gt;Medium&lt;/Button&gt;<br/>
&lt;Button size="large"&gt;Large&lt;/Button&gt;
        </code>
      </div>
    </div>

    <!-- With Custom Classes -->
    <div class="mb-8">
      <h3 class="text-lg font-semibold text-slate-700 mb-4">Custom Styling</h3>
      <div class="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200/60 mb-4">
        <div class="flex items-center justify-center">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white border-purple-600">Custom Button</Button>
        </div>
      </div>
      <div class="bg-slate-900 rounded-xl p-4 overflow-x-auto">
        <code class="text-green-400 text-sm">
&lt;Button className="bg-purple-600 hover:bg-purple-700 text-white border-purple-600"&gt;<br/>
&nbsp;&nbsp;Custom Button<br/>
&lt;/Button&gt;
        </code>
      </div>
    </div>

    <!-- With Event Handlers -->
    <div>
      <h3 class="text-lg font-semibold text-slate-700 mb-4">With Event Handlers</h3>
      <div class="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200/60 mb-4">
        <div class="flex items-center justify-center">
          <Button on:click={() => alert('Button clicked!')}>Click me!</Button>
        </div>
      </div>
      <div class="bg-slate-900 rounded-xl p-4 overflow-x-auto">
        <code class="text-green-400 text-sm">
&lt;Button &gt;<br/>
&nbsp;&nbsp;Click me!<br/>
&lt;/Button&gt;
        </code>
      </div>
    </div>
  </div>
</div>
