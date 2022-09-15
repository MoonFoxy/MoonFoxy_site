<script lang="ts">
  import '../app.css'; // Tailwind CSS
  import { onMount } from 'svelte';
  import { isLoading } from 'svelte-i18n';
  import { startClient } from '$lib/modules/i18n';

  import Cursor from '$lib/components/Cursor.svelte';

  startClient();

  const timeout = 1000;
  let delayedPreloading = true;
  onMount(() => setTimeout(() => {
    delayedPreloading = false;
  }, timeout));
</script>

<main>
  {#if $isLoading || delayedPreloading}
    <div class="fixed inset-0 z-50 flex items-center justify-center">
      <div class="w-16 h-16 border-4 border-t-4 border-gray-500 rounded-full animate-spin"></div>
    </div>
  {:else}
    <slot />
  {/if}
  <Cursor />
</main>
