<script lang="ts">
  import { t } from 'svelte-i18n';
  import { pair } from '$lib/modules/color';

  let [background, color] = $pair;
</script>

<svelte:head>
  <title>🌙Moonfoxy</title>
  <meta name="description" content="Moonfoxy home page" />
</svelte:head>

<div style:background class="flex flex-col items-center justify-center h-screen">
  <h1 style:color class="text-3xl font-bold underline">
    {$t('hello_world')}
  </h1>
  <h1 style:color>Welcome to your library project</h1>
  <p style:color>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
  <p style:color>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>
