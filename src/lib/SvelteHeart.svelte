<script lang="ts">
 import isHex from './utils/isHex'

 type SymbolType = 'star' | 'heart' | 'thumb'

 let {
 	value = $bindable(false),
 	colorLiked = "#da3a09",
 	colorUnliked = "#222",
 	size = 20,
 	symbol = 'heart'
 } = $props<{
 	value?: boolean;
 	colorLiked?: string;
 	colorUnliked?: string;
 	size?: number;
 	symbol?: SymbolType;
 }>()

 let heartColor = $derived(value ? colorLiked : colorUnliked)
 let SymbolIcon = $state<any>(null)

 const LoadSymbol = async () => {
 	if (symbol == 'star') {
 		SymbolIcon = (await import('./icon/star.svelte')).default
 	} else if (symbol == 'thumb') {
 		SymbolIcon = (await import('./icon/thumb.svelte')).default
 	} else {
 		SymbolIcon = (await import('./icon/heart.svelte')).default
 	}
 }

 $effect(() => {
 	if (!(['star', 'heart', 'thumb'] as const).includes(symbol)) throw new Error("This symbol is not valid.")
 	if (!isHex(colorLiked) || !isHex(colorUnliked)) throw new Error('Only the hex format is allowed for colors.')
 })

 $effect(() => {
 	void LoadSymbol()
 })
</script>

<div class="svelte-heart">
  {#key heartColor}
    {#if value === true}
      {#each Array(5) as _, index}
        <div class={`animation heart-animation-${index.toString()}`}>
          {#if SymbolIcon}
            <SymbolIcon size={`${size}px`} color={heartColor} />
          {/if}
        </div>
      {/each}
    {/if}
    <div class="heart">
      {#if SymbolIcon}
        <SymbolIcon size={`${size}px`} color={heartColor} />
      {/if}
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
.heart-animation-5{animation: animation-5 0.5s linear;opacity:0;}
.svelte-heart{position:relative;cursor:pointer;display:inline-block;}
.svelte-heart .animation{position:absolute;top:0px;left:0px;}
</style>
