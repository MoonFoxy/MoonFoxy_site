<script lang="ts">
  import './app.css'; // Tailwind CSS

  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';

  const routes: {
    [key: string]: any;
  } = {
    // Home page
    '/': wrap({
      asyncComponent: () => import('./pages/Home.svelte'),
    }),

    // Catch all route
    '*': wrap({
      asyncComponent: () => import('./pages/NotFound.svelte'),
    }),
  };
</script>

<Router {routes} />
