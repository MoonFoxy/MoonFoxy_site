<script lang="ts">
  import 'css-doodle';

  export let background = '#000000FF';
  export let color = '#FFFFFFFF';

  const doodle = `
  <css-doodle>
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
  </css-doodle>
  `;
</script>

<div
  style:background
  class="fixed inset-0 z-50 flex items-center justify-center"
>
  {@html doodle}
</div>
