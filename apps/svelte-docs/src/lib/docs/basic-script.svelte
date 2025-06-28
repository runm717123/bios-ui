<script lang="ts">
  interface Props {
    title?: string;
    code: string;
  }

  let { title, code }: Props = $props();
</script>

<div class="bg-slate-50 rounded-xl p-4 border border-slate-200">
  {#if title}
    <h3 class="text-sm font-semibold text-slate-700 mb-2">{title}</h3>
  {/if}
  <code class="text-slate-800 font-mono">{code}</code>
</div>
