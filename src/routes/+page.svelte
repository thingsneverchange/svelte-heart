<script lang="ts">
import SvelteHeart from '$lib/SvelteHeart.svelte'
let like = $state(false)
const toggleLike = () => {
  like = !like
}
</script>
<button type="button" style="padding:120px;" onclick={toggleLike}>
 <SvelteHeart symbol="thumb" colorLiked="#4222e5" size={25} bind:value={like} />
</button>
