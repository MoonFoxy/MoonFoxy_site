<script lang="ts">
  import 'css-doodle';
  import { pair } from '$lib/modules/color';

  export let delay = 0;

  let [background, color] = $pair;

  $: rules = `
    @grid: 20 / 60vmin;
    background: ${color};
    scale: 0;
    opacity: 0;
    animation: m 4s linear infinite;

    animation-delay: calc(
      -1s/@I * @i * @sin(@i)
    );

    @keyframes m {
      0%, 50%, 90% { scale: 1; opacity: 1 }
      25%, 75%, 100% { scale: 0; opacity: 0 }
    }
  `;

  function doodle(element: { update: (styles: string) => {} }, rules: string) {
    setTimeout(() => element.update(rules), delay);
    return {
      update(newRules: string) {
        element.update(newRules);
      }
    }
  }
</script>

<div
  style:background
  class="fixed inset-0 z-50 flex items-center justify-center"
>
  <css-doodle use:doodle={rules} />
</div>
