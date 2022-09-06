<script lang="ts">
  import { gsap } from 'gsap';

  let cursor!: HTMLElement;
  let cursorSq!: HTMLElement;

  const size = 8;
  const sizeSq = 36;
  const followSpeed = 0.4;
  const size2 = size / 2;
  const sizeSq2 = sizeSq / 2;

  let touch = false;
  function touchdetect() {
    touch = true;
  }

  function mousemove(event: MouseEvent) {
    cursor.style.top = `${event.clientY - size2}px`;
    cursor.style.left = `${event.clientX - size2}px`;

    gsap.to(cursorSq, {
      top: event.clientY - sizeSq2,
      left: event.clientX - sizeSq2,
      duration: followSpeed,
      ease: 'power3.out'
    });
  }

  function mousedown() {
    gsap.to(cursor, { scale: 4 })
    gsap.to(cursorSq, { scale: 0.35, opacity: 1, duration: 0.2 });
  }

  function mouseup() {
    gsap.to(cursor, { scale: 1 });
    gsap.to(cursorSq, { scale: 1, opacity: 0.5, duration: 0.2 });
  }
</script>

<svelte:body
  on:touchstart|once="{touchdetect}"
  on:mousedown="{mousedown}"
  on:mousemove="{mousemove}"
  on:mouseup="{mouseup}" />

{#if !touch}
  <div id="cursor"
    bind:this='{cursor}'
    style:width={`${size}px`}
    style:height={`${size}px`} />
  <div id="cursor-sq"
    bind:this='{cursorSq}'
    style:width={`${sizeSq}px`}
    style:height={`${sizeSq}px`} />
{/if}

<style lang="postcss">
  * {
    z-index: 10000;
  }

  :global(*) {
    cursor: none !important;
  }

  #cursor {
    top: 0;
    left: 0;
    position: absolute;
    background: white;
    border-radius: 50%;
    mix-blend-mode: difference;
    pointer-events: none;
  }

  #cursor-sq {
    top: 0;
    left: 0;
    position: absolute;
    background-image: url('/images/cursor_square.svg');
    background-size: cover;
    mix-blend-mode: difference;
    opacity: 0.5;
    pointer-events: none;
  }
</style>
