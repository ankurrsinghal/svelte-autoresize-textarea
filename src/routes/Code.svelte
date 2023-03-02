<script lang="ts">
export let title: string;
export let code: string;
</script>
<div class="flex flex-col flex-1">
  <div class="p-4 bg-slate-200">{title}</div>
  <div class="p-4 flex-1 text-sm bg-slate-50 overflow-auto">
    <pre>
      <code>
{@html code}
      </code>
    </pre>
  </div>
</div>