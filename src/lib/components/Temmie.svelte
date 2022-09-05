<script lang="ts">
  // import { t } from '$lib/modules/i18n';

  const temmieMessages = [
    "hOI!!!!!! i'm tEMMIE!!",
    'FOOB!!!',
    'awwAwa cute!! (pets u)',
    'NO!!! so hungr... (dies)',
    'fhsdhjfdsfjsddshjfsd',
    "can't blame a BARK for tryin'...",
    '*Temmie vibrates intensely*',
    '*You flex at Temmie...*',
    '*Temmiy accidentally misspells her own name*',
  ];

  let message = temmieMessages[0];

  function temmieMessage() {
    message = temmieMessages[Math.floor(Math.random() * temmieMessages.length)];
  }
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet" />
</svelte:head>

<div class="flex flex-col items-center justify-center text-center" on:click="{temmieMessage}">
  <div id="temmieCont">
    <img
      class="pixelArt unselectable"
      id="temmie"
      width="204"
      height="200"
      src="/images/temmie_body.png"
      alt="Temmie body"
    />
    <img
      class="pixelArt unselectable"
      id="temmieFace"
      width="58"
      height="44"
      src="/images/temmie_face.png"
      alt="Temmie face"
    />
  </div>
  <div class="unselectable" id="message">{message}</div>
</div>

<style lang="postcss">
  @-webkit-keyframes temmieFaceVibe {
    0% {
      top: 73px;
      left: 52px;
    }
    20% {
      top: 71px;
      left: 52px;
    }
    40% {
      top: 71px;
      left: 49px;
    }
    60% {
      top: 72px;
      left: 50px;
    }
    80% {
      top: 71px;
      left: 50px;
    }
    100% {
      top: 74px;
      left: 53px;
    }
  }

  @keyframes temmieFaceVibe {
    0% {
      top: 73px;
      left: 52px;
    }
    20% {
      top: 71px;
      left: 52px;
    }
    40% {
      top: 71px;
      left: 49px;
    }
    60% {
      top: 72px;
      left: 50px;
    }
    80% {
      top: 71px;
      left: 50px;
    }
    100% {
      top: 74px;
      left: 53px;
    }
  }

  @-webkit-keyframes temmieVibe {
    0% {
      top: 1px;
      left: -1px;
    }
    20% {
      top: -1px;
      left: 0px;
    }
    40% {
      top: 1px;
      left: -1px;
    }
    60% {
      top: 1px;
      left: 1px;
    }
    80% {
      top: -1px;
      left: 0px;
    }
    100% {
      top: 1px;
      left: 1px;
    }
  }

  @keyframes temmieVibe {
    0% {
      top: 1px;
      left: -1px;
    }
    20% {
      top: -1px;
      left: 0px;
    }
    40% {
      top: 1px;
      left: -1px;
    }
    60% {
      top: 1px;
      left: 1px;
    }
    80% {
      top: -1px;
      left: 0px;
    }
    100% {
      top: 1px;
      left: 1px;
    }
  }

  #temmieCont {
    position: relative;
    margin: 30px auto;
    display: inline-block;
    cursor: pointer;
    -webkit-animation: temmieVibe 0.25s infinite;
            animation: temmieVibe 0.25s infinite;
    -webkit-animation-timing-function: steps(1, end);
            animation-timing-function: steps(1, end);
  }


  #temmieFace {
    position: absolute;
    top: 74px;
    left: 50px;
    -webkit-animation: temmieFaceVibe 0.25s infinite;
            animation: temmieFaceVibe 0.25s infinite;
    -webkit-animation-timing-function: steps(1, end);
            animation-timing-function: steps(1, end);
  }

  #message {
    color: white;
    font-family: 'Press Start 2P', cursive;
    font-size: 20px;
    cursor: pointer;
  }

  .pixelArt {
    image-rendering: -webkit-optimize-contrast;
    -ms-interpolation-mode: nearest-neighbor;
    image-rendering: pixelated;
  }
</style>
