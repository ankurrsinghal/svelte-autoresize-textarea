<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  interface $$Props extends HTMLAttributes<HTMLButtonElement> {}

  const classNames = "bg-prime text-white px-4 py-2 rounded-lg ";
</script>

<button on:click class={classNames + $$props.class}>
  <slot />
</button>