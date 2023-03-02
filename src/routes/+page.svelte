<script lang="ts">
import AutoResizeTextarea from '$lib/AutoResizeTextarea.svelte';
import { SiteDescription, SiteTitle } from './constants';
import type { PageData } from './$types';
import Button from './Button.svelte';
	import Code from './Code.svelte';

export let data: PageData;

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const textLines = text.split('. ');
const numberOfLines = textLines.length;
let currentLine = 0;

let value = '';

function addDummyText() {
  value += textLines[(++currentLine) % numberOfLines] + '. ';
}
</script>

<svelte:head>
	<title>SvelteUse • Svelte Autosize Textarea</title>

	<meta name="twitter:title" content="Svelte Autosize Textarea" />
	<meta name="twitter:description" content="Svelte Autosize Textarea" />
	<meta name="description" content="A Svelte textarea component which will automatically resize itself when content changes." />

	<style>
		:root {
			/* --code-bg: var(--back-light);
			--code-base: hsl(45, 7%, 35%);
			--code-comment: hsl(0, 0%, 41%);
			--code-keyword: hsl(204, 88%, 35%);
			--code-function: hsl(19, 67%, 44%);
			--code-string: hsl(41, 37%, 38%);
			--code-number: hsl(120, 100%, 25%);
			--code-template-string: hsl(2, 80%, 47%);
			--code-tags: var(--code-function);
			--code-important: var(--code-string); */

      --sk-code-bg: var(--sk-back-3);
      --sk-code-ts-bg: var(--sk-back-1);
      --sk-code-base: hsl(45, 7%, 35%);
      --sk-code-comment: hsl(0, 0%, 41%);
      --sk-code-keyword: hsl(204, 88%, 35%);
      --sk-code-function: hsl(19, 67%, 44%);
      --sk-code-string: hsl(41, 37%, 38%);
      --sk-code-number: hsl(120, 100%, 25%);
      --sk-code-template-string: hsl(2, 80%, 47%);
      --sk-code-tags: var(--code-function);
      --sk-code-important: var(--code-string);
      --sk-code-diff-base: hsla(0, 0%, 0%, .4);
      --sk-code-diff-inserted: hsl(120, 100%, 25%);
      --sk-code-diff-removed: hsl(2, 80%, 47%);

      --shiki-color-text: var(--sk-code-base);
      --shiki-color-background: var(--sk-back-3);
      --shiki-token-constant: var(--sk-code-base);
      --shiki-token-string: var(--sk-code-string);
      --shiki-token-comment: var(--sk-code-comment);
      --shiki-token-keyword: var(--sk-code-keyword);
      --shiki-token-parameter: var(--sk-code-base);
      --shiki-token-function: var(--sk-code-function);
      --shiki-token-string-expression: var(--sk-code-string);
      --shiki-token-punctuation: var(--sk-code-base);
      --shiki-token-link: var(--sk-code-keyword);

      --code-bg: var(--shiki-color-background);
			--code-base: var(--shiki-color-text);
			--code-comment: var(--shiki-token-comment);
			--code-keyword: var(--shiki-token-keyword);
			--code-function: var(--shiki-token-function);
			--code-string: var(--shiki-token-string);
			--code-number: hsl(120, 100%, 25%);
			--code-template-string: hsl(2, 80%, 47%);
			--code-tags: var(--code-function);
			--code-important: var(--code-string);
		}

		pre {
			tab-size: 2;
			-moz-tab-size: 2;
		}

		.code-block pre {
			background-color: var(--code-bg);
			color: var(--code-base);
			border-radius: 0.5rem;
			padding: 1rem;
			margin: 0 0 1rem;
			font-size: 14px;
		}

		.code-block pre code,
		.token {
			color: var(--code-base);
		}

		.token.tag,
		.token.attr-value .attr-equals {
			color: var(--code-function);
		}

		.token.string,
		.token.interpolation-punctuation,
		.token.attr-value,
		.token.inserted {
			color: var(--code-string);
		}

		.token.builtin,
		.token.function {
			color: var(--code-function);
		}

		.token.keyword,
		.token.boolean {
			color: var(--code-keyword);
		}

		.token.comment {
			color: var(--code-comment);
		}

		.token.deleted {
			color: #fc9b9b;
		}

		.token.template-string .interpolation-punctuation,
		.token.template-string .string {
			color: var(--code-template-string);
		}
	</style>
</svelte:head>

<section class="p-6">
  <div class="max-w-xl">
    <h1 class="text-5xl tracking-wider font-extralight uppercase text-second leading-snug">Svelte <b class="text-prime">AutoResize</b> Textarea</h1>
  </div>
</section>

<section class="p-4 pb-20">
  <section class="py-10">
    <div>
      <h2 class="text-2xl mb-8">Quick Start</h2>
      <div class=" border border-slate-400 rounded-lg flex overflow-clip flex-col">
        <Code title="Component.svelte" code={data.plain} />
        <div class="w-px bg-slate-600" />
        <div class="flex-1 flex p-6">
          <AutoResizeTextarea placeholder="Enter some text..." class="border-2 border-black p-4 rounded-md focus:border-blue-500 w-80" />
        </div>
      </div>
    </div>
  </section>
  
  <section class="py-10">
    <div>
      <h2 class="text-2xl mb-8">Min rows</h2>
      <div class=" border border-slate-400 rounded-lg flex overflow-clip flex-col">
        <Code title="Component.svelte" code={data.minRows} />
        <div class="w-px bg-slate-600" />
        <div class="flex-1 flex p-6">
          <AutoResizeTextarea
            placeholder="Min 5 rows..."
            class="border-2 border-black p-4 rounded-md focus:border-blue-500 w-80"
            minRows={5}
          />
        </div>
      </div>
    </div>
  </section>
  
  <section class="py-10">
    <div>
      <h2 class="text-2xl mb-8">Min/Max rows</h2>
      <div class=" border border-slate-400 rounded-lg flex flex-col overflow-clip">
        <Code title="Component.svelte" code={data.minMaxRows} />
        <div class="w-px bg-slate-600" />
        <div class="flex-1 flex p-6">
          <AutoResizeTextarea
            placeholder="Min 5 - Max 10 rows..."
            class="border-2 border-black p-4 rounded-md focus:border-blue-500 w-80"
            minRows={5}
            maxRows={10}
          />
        </div>
      </div>
    </div>
  </section>
  
  <section class="py-10">
    <div>
      <h2 class="text-2xl mb-8">Controlled textarea</h2>
      <div class=" border border-slate-400 rounded-lg flex overflow-clip flex-col">
        <Code title="Component.svelte" code={data.controlled} />
        <div class="w-px bg-slate-600" />
        <div class="flex-1 flex flex-col p-6">
          <Button on:click={addDummyText} class="mb-4 mr-auto">Add text</Button>
          <AutoResizeTextarea
            placeholder="Value is binded to a script value"
            class="border-2 border-black p-4 rounded-md focus:border-blue-500 w-80"
            bind:value={value}
          />
        </div>
      </div>
    </div>
  </section>
</section>
