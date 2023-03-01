import Prism from 'prismjs';
import 'prism-svelte';

const plain = `
// Component.svelte

<script>
import AutoResizeTextarea from 'svelte-auto-resize-textarea';
</script>

<AutoResizeTextarea />
`;

const minRows = `
// Component.svelte

<script>
import AutoResizeTextarea from 'svelte-auto-resize-textarea';
</script>

<AutoResizeTextarea minRows={5} />
`;

const minMaxRows = `
// Component.svelte

<script>
import AutoResizeTextarea from 'svelte-auto-resize-textarea';
</script>

<AutoResizeTextarea minRows={5} maxRows={10} />
`;

export async function load() {
  return {
    plain: Prism.highlight(plain, Prism.languages.svelte, 'svelte'),
    minRows: Prism.highlight(minRows, Prism.languages.svelte, 'svelte'),
    minMaxRows: Prism.highlight(minMaxRows, Prism.languages.svelte, 'svelte'),
  }
}