<script>
export let portableText;

const { href, blank, isInternal } = portableText.value;
</script>

{#if blank}
  <a 
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    <slot />
  </a>
{:else}
  <a 
    href={href}
    rel="noopener noreferrer"
  >
    <slot />
  </a>
{/if}
