<script lang="ts">
  import '../app.css'; // Tailwind CSS
  import Cursor from '$lib/components/Cursor.svelte';
</script>

<main>
  <slot />
  <Cursor />
</main>
