<script lang="ts">
  import { t } from 'svelte-i18n';
</script>

<svelte:head>
  <title>🌙Moonfoxy</title>
  <meta name="description" content="Moonfoxy home page" />
</svelte:head>

<div class="bg-black text-white flex flex-col items-center justify-center h-screen">
  <div class="text-3xl font-bold underline">
    {$t('hello_world')}
  </div>
  <h1>Welcome to your library project</h1>
  <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>
