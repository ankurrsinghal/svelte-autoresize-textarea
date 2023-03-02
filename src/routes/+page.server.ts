import Prism from 'prismjs';
import 'prism-svelte';

const plain = `<script>
import { AutoResizeTextarea } from 'svelte-autoresize-textarea';
</script>

<AutoResizeTextarea />
`;

const minRows = `<script>
import { AutoResizeTextarea } from 'svelte-autoresize-textarea';
</script>

<AutoResizeTextarea minRows={5} />
`;

const minMaxRows = `<script>
import { AutoResizeTextarea } from 'svelte-autoresize-textarea';
</script>

<AutoResizeTextarea minRows={5} maxRows={10} />
`;

const controlled = `<script>
import { AutoResizeTextarea } from 'svelte-autoresize-textarea';

let value = '';
</script>

<AutoResizeTextarea bind:value={value} />
`;

export async function load() {
  return {
    plain: Prism.highlight(plain, Prism.languages.svelte, 'svelte'),
    minRows: Prism.highlight(minRows, Prism.languages.svelte, 'svelte'),
    minMaxRows: Prism.highlight(minMaxRows, Prism.languages.svelte, 'svelte'),
    controlled: Prism.highlight(controlled, Prism.languages.svelte, 'svelte'),
  }
}