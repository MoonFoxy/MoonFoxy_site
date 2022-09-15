<script lang="ts">
  import { t } from 'svelte-i18n';
</script>

<svelte:head>
  <title>🌙Moonfoxy</title>
  <meta name="description" content="Moonfoxy home page" />
</svelte:head>

<div class="bg-black flex flex-col items-center justify-center h-screen">
  <h1 class="text-white text-3xl font-bold underline">
    {$t('hello_world')}
  </h1>
  <h1 class="text-white">Welcome to your library project</h1>
  <p class="text-white">Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
  <p class="text-white">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>
