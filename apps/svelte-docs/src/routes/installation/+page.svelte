<div class="max-w-4xl">
  <div class="mb-8">
    <h1 class="text-5xl font-bold bg-fg-dark bg-clip-text text-transparent mb-4">Getting Started</h1>
    <p class="text-xl text-secondary leading-relaxed">Install and set up BIOS UI Svelte components in your project.</p>
  </div>

  <div class="bg-bg-dark backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/60 mb-8">
    <h2 class="text-2xl font-bold text-fg-dark mb-6 flex items-center gap-3">
      <div class="w-8 h-8 bg-fg-dark rounded-lg flex items-center justify-center">
        <span class="text-white text-sm">📦</span>
      </div>
      Installation
    </h2>

    <p class="text-fg-dark mb-6">Install the BIOS UI Svelte package using your preferred package manager:</p>

    <div class="space-y-4">
      <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
        <h3 class="text-sm font-semibold text-slate-700 mb-2">npm</h3>
        <code class="text-slate-800 font-mono">npm install @bios-ui/svelte-v2 @bios-ui/core</code>
      </div>

      <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
        <h3 class="text-sm font-semibold text-slate-700 mb-2">pnpm</h3>
        <code class="text-slate-800 font-mono">pnpm add @bios-ui/svelte-v2 @bios-ui/core</code>
      </div>

      <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
        <h3 class="text-sm font-semibold text-slate-700 mb-2">yarn</h3>
        <code class="text-slate-800 font-mono">yarn add @bios-ui/svelte-v2 @bios-ui/core</code>
      </div>
    </div>
  </div>

  <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/60 mb-8">
    <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
      <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
        <span class="text-white text-sm">⚙️</span>
      </div>
      Setup
    </h2>

    <div class="space-y-6">
      <div>
        <h3 class="text-lg font-semibold text-slate-700 mb-3">Import Styles</h3>
        <p class="text-slate-600 mb-4">Import the core styles in your main app file:</p>
        <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
          <code class="text-slate-800 font-mono text-sm">
// In your main.js or App.svelte<br/>
import '@bios-ui/core/index.css';
          </code>
        </div>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-slate-700 mb-3">Import Components</h3>
        <p class="text-slate-600 mb-4">Import and use components in your Svelte files:</p>
        <div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
          <code class="text-slate-800 font-mono text-sm">
import &#123; Button &#125; from '@bios-ui/svelte-v2';<br/><br/>
&lt;Button&gt;Click me&lt;/Button&gt;
          </code>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/60 mb-8">
    <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
      <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
        <span class="text-white text-sm">🔧</span>
      </div>
      Troubleshooting
    </h2>

    <div class="space-y-6">
      <div>
        <h3 class="text-lg font-semibold text-slate-700 mb-3">Styling Issues</h3>
        <p class="text-slate-600 mb-4">If components don't appear styled correctly:</p>
        <ol class="list-decimal list-inside text-slate-600 space-y-2 ml-4">
          <li>Ensure you've imported <code class="bg-slate-100 px-2 py-1 rounded text-sm">@bios-ui/core/index.css</code></li>
          <li>Check that the import is in the correct order (before other styles)</li>
          <li>Verify your bundler is processing CSS files correctly</li>
        </ol>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-slate-700 mb-3">TypeScript Errors</h3>
        <p class="text-slate-600 mb-4">If you encounter TypeScript errors:</p>
        <ol class="list-decimal list-inside text-slate-600 space-y-2 ml-4">
          <li>Ensure you're using a compatible TypeScript version (4.0+)</li>
          <li>Check that your <code class="bg-slate-100 px-2 py-1 rounded text-sm">tsconfig.json</code> includes the node_modules</li>
          <li>Try restarting your TypeScript server</li>
        </ol>
      </div>

      <div>
        <h3 class="text-lg font-semibold text-slate-700 mb-3">Build Issues</h3>
        <p class="text-slate-600 mb-4">If you encounter build issues:</p>
        <ol class="list-decimal list-inside text-slate-600 space-y-2 ml-4">
          <li>Clear your node_modules and reinstall dependencies</li>
          <li>Check that your bundler supports Svelte files</li>
          <li>Ensure all peer dependencies are installed</li>
        </ol>
      </div>
    </div>
  </div>

  <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/60">
    <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
      <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
        <span class="text-white text-sm">💬</span>
      </div>
      Support
    </h2>

    <p class="text-slate-600 mb-6">Need help? Check out:</p>

    <ul class="space-y-3 text-slate-600">
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
        <a href="https://github.com/your-repo/bios-ui/issues" class="text-blue-600 hover:text-blue-800 transition-colors">GitHub Issues</a> for bug reports
      </li>
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
        <a href="/components/button" class="text-blue-600 hover:text-blue-800 transition-colors">Documentation</a> for component guides
      </li>
      <li class="flex items-center gap-3">
        <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
        <a href="https://github.com/your-repo/bios-ui/blob/main/CONTRIBUTING.md" class="text-blue-600 hover:text-blue-800 transition-colors">Contributing Guide</a> for development setup
      </li>
    </ul>
  </div>
</div>
