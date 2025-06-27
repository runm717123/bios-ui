<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(() => {
    goto('/installation');
  });
</script>

<div class="flex items-center justify-center min-h-[60vh]">
  <div class="text-center">
    <div class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
      <span class="text-white font-bold text-2xl">B</span>
    </div>
    <h1 class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">BIOS UI</h1>
    <p class="text-slate-600">Redirecting to documentation...</p>
  </div>
</div>
