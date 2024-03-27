<script>export let value = false;
export let colorLiked = "#da3a09";
export let colorUnliked = "#222";
export let size = 20;
export let symbol = "heart";
import { createEventDispatcher } from "svelte";
import isHex from "./utils/isHex.js";
const dispatch = createEventDispatcher();
let heartColor = value ? colorLiked : colorUnliked;
let SymbolIcon;
const LoadSymbol = async () => {
  if (symbol == "star") {
    SymbolIcon = (await import("./icon/star.svelte")).default;
  } else if (symbol == "thumb") {
    SymbolIcon = (await import("./icon/thumb.svelte")).default;
  } else {
    SymbolIcon = (await import("./icon/heart.svelte")).default;
  }
};
if (!["star", "heart", "thumb"].includes(symbol))
  throw new Error("This symbol is not valid.");
if (!isHex(colorLiked) || !isHex(colorUnliked))
  throw new Error("Only the hex format is allowed for colors.");
LoadSymbol();
$:
  value, heartColor = value ? colorLiked : colorUnliked;
</script>

<div class="svelte-heart">
  {#key heartColor}
    {#if value === true}
      {#each Array(5) as _, index}
        <div class="animation heart-animation-{index.toString()}">
          <svelte:component this="{SymbolIcon}" size="{size.toString()}px" color="{heartColor}"/>
        </div>
      {/each}
    {/if}
    <div class="heart">
      <svelte:component this="{SymbolIcon}" size="{size.toString()}px" color="{heartColor}"/>
    </div>
  {/key}
</div>

<style>
@keyframes animation-1 {
  0% { transform: translate(0%) rotate(0deg); opacity:0  }
  50% { transform: translate(50%, -30%) rotate(-45deg);opacity:1 }
  100% { transform: translate(150%, -250%) rotate(45deg);opacity:0 }
}
.heart-animation-1{animation: animation-1 0.5s linear;opacity:0;}

@keyframes animation-2 {
  0% { transform: translate(0%) rotate(0deg); opacity:0  }
  50% { transform: translate(-50%, -30%) rotate(-45deg);opacity:1 }
  100% { transform: translate(-150%, -350%) rotate(45deg);opacity:0 }
}
.heart-animation-2{animation: animation-2 0.5s linear;opacity:0;}

@keyframes animation-3 {
  0% { transform: translate(0%) rotate(0deg); opacity:0  }
  50% { transform: translate(10%, -30%) rotate(-45deg);opacity:1 }
  100% { transform: translate(-150%, -150%) rotate(45deg);opacity:0 }
}
.heart-animation-3{animation: animation-3 0.5s linear;opacity:0;}

@keyframes animation-4 {
  0% { transform: translate(0%) rotate(0deg); opacity:0  }
  50% { transform: translate(150%, -30%) rotate(-45deg);opacity:1 }
  100% { transform: translate(50%, -250%) rotate(45deg);opacity:0 }
}
.heart-animation-4{animation: animation-4 0.5s linear;opacity:0;}

@keyframes animation-5 {
  0% { transform: translate(0%) rotate(0deg); opacity:0  }
  50% { transform: translate(150%, -30%) rotate(-45deg);opacity:1 }
  100% { transform: translate(50%, -250%) rotate(45deg);opacity:0 }
}
.heart-animation-4{animation: animation-4 0.5s linear;opacity:0;}
.svelte-heart{position:relative;cursor:pointer;display:inline-block;}
.svelte-heart .animation{position:absolute;top:0px;left:0px;}
</style>
