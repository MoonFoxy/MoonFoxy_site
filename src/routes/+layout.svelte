<script lang="ts">
  import '../app.css'; // Tailwind CSS
  import { onMount } from 'svelte';
  import { isLoading } from 'svelte-i18n';
  import { page } from '$app/stores';
  import { startClient } from '$lib/modules/i18n';
  import { getRandomPair, pair } from '$lib/modules/color';

  import Cursor from '$lib/components/Cursor.svelte';
  import Loading from '$lib/components/Loading.svelte';

  $pair = getRandomPair();
  const [primary, secondary] = $pair;

  startClient();

  const timeout = 1000;
  let delayedPreloading = true;
  onMount(() => setTimeout(() => {
    delayedPreloading = false;
  }, timeout));
</script>

<main>
  {#if !$page.error && ($isLoading || delayedPreloading)}
    <Loading background={primary} color={secondary} />
  {:else}
    <slot />
  {/if}
  <Cursor />
</main>
