<script lang="ts">
  import { gsap } from 'gsap';

  let cursor!: HTMLElement;
  let cursorSq!: HTMLElement;
  let width!: number;
  let height!: number;

  const size = 8;
  const sizeSq = 36;
  const followSpeed = 0.4;
  const size2 = size / 2;
  const sizeSq2 = sizeSq / 2;

  function moveDetect() {
    cursor.style.display = 'block';
    cursorSq.style.display = 'block';
  }

  function mouseMove(event: MouseEvent) {
    let cursorX = event.clientX - size2;
    let cursorY = event.clientY - size2;
    if (event.clientX < size2) {
      cursorX = 0;
    } else if (event.clientX > width - size2) {
      cursorX = width - size;
    }

    if (event.clientY < size2) {
      cursorY = 0;
    } else if (event.clientY > height - size2) {
      cursorY = height - size;
    }

    cursor.style.top = `${cursorY}px`;
    cursor.style.left = `${cursorX}px`;

    let cursorSqX = event.clientX - sizeSq2;
    let cursorSqY = event.clientY - sizeSq2;
    if (event.clientX < sizeSq2) {
      cursorSqX = 0;
    } else if (event.clientX > width - sizeSq2) {
      cursorSqX = width - sizeSq;
    }

    if (event.clientY < sizeSq2) {
      cursorSqY = 0;
    } else if (event.clientY > height - sizeSq2) {
      cursorSqY = height - sizeSq;
    }

    gsap.to(cursorSq, {
      top: cursorSqY,
      left: cursorSqX,
      duration: followSpeed,
      ease: 'power3.out'
    });
  }

  function mouseDown() {
    gsap.to(cursor, { scale: 4 })
    gsap.to(cursorSq, { scale: 0.35, opacity: 1, duration: 0.2 });
  }

  function mouseUp() {
    gsap.to(cursor, { scale: 1 });
    gsap.to(cursorSq, { scale: 1, opacity: 0.5, duration: 0.2 });
  }
</script>

<svelte:window
  bind:innerWidth={width}
  bind:innerHeight={height}
  on:mousemove|once="{moveDetect}"
  on:mousedown="{mouseDown}"
  on:mousemove="{mouseMove}"
  on:mouseup="{mouseUp}" />

<div id="cursor"
  bind:this='{cursor}'
  style:width={`${size}px`}
  style:height={`${size}px`} />
<div id="cursor-sq"
  bind:this='{cursorSq}'
  style:width={`${sizeSq}px`}
  style:height={`${sizeSq}px`} />

<style lang="postcss">
  * {
    z-index: 10000;
  }

  :global(*) {
    cursor: none !important;
  }

  #cursor {
    top: 0;
    position: absolute;
    background: white;
    border-radius: 50%;
    mix-blend-mode: difference;
    pointer-events: none;
    display: none;
  }

  #cursor-sq {
    top: 0;
    position: absolute;
    background-image: url('/images/cursor_square.svg');
    background-size: cover;
    mix-blend-mode: difference;
    opacity: 0.5;
    pointer-events: none;
    display: none;
  }
</style>
