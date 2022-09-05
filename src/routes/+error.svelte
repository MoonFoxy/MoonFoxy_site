<script lang="ts">
  import { page } from '$app/stores';
  import Temmie from '$lib/components/Temmie.svelte';

  const sides = [
    ['left-10', 'right-10'],
    ['top-10', 'bottom-10'],
  ];

  console.error('Some page ERROR', $page.status, $page.error.message);
</script>

<svelte:head>
  <title>tEMMIE!!</title>
  <meta name="description" content="Error page" />

  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="/temmie/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="/temmie/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="/temmie/favicon-16x16.png"
  />
  <link rel="manifest" href="/temmie/site.webmanifest" />
  <meta name="theme-color" content="#000" />

  <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet" />
</svelte:head>

<div class="bg-black flex flex-col items-center justify-center h-screen">
  <Temmie />
  {#each sides[0] as side1}
    {#each sides[1] as side2}
      <div class="absolute {side1} {side2}">
        <h1 class="text-3xl text-white">{$page.status}</h1>
      </div>
    {/each}
  {/each}
</div>

<style lang="postcss">
  h1 {
    font-family: 'Press Start 2P', cursive;
  }
</style>
