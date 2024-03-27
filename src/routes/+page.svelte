<script lang="ts">
import SvelteHeart from '$lib/SvelteHeart.svelte'
let like = false
const toggleLike = () => {
  like = like ? false : true
}
</script>
<div style="padding:120px;" on:click="{toggleLike}">
 <SvelteHeart symbol="thumb" colorLiked="#4222e5" size="{25}" bind:value="{like}"/>
</div>
