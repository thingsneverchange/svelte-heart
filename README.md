<div align="center" style="text-align:center">
  <img src="https://images.themecloset.pictures/github/svelte-heart/logo.png" alt="Svelte Heart" width="350" /><br>
  <a href="https://npmjs.org/package/svelte-heart">
    <img src="https://badgen.now.sh/npm/v/svelte-heart" alt="version" />
  </a><br>
</div>

A simple SVG icon that comes with an animation on the fly. Add a cool additive to the like buttons on your Svelte app.

## How it works
`Svelte Heart` is basically an SVG icon component with the keyframe animation built in. This works by binding your `like` variable to `bind:value`. It detects the change, and triggers the heart animation when it changes to `true`.

## Demo
<div style="margin-bottom:15px;">
<img src="https://images.themecloset.pictures/github/svelte-heart/preview-on-page.gif" width="450px"/></div>

| Heart  | Star  | Thumb  |
| ------- | ------- | ------- |
| <div style="border-radius:15px;overflow:hidden"><img src="https://images.themecloset.pictures/github/svelte-heart/preview-heart.gif" alt="Svelte Heart Heart Animation" width="150px"></div>  | <div style="border-radius:15px;overflow:hidden"><img src="https://images.themecloset.pictures/github/svelte-heart/preview-star.gif" alt="Svelte Heart Star Animation" width="150px"></div> | <div style="border-radius:15px;overflow:hidden"><img src="https://images.themecloset.pictures/github/svelte-heart/preview-thumb.gif" alt="Svelte Heart Thumb Animation" width="150px"></div> |

## Installation

```bash
npm install svelte-heart
```

### Svelte 4

If you're using Svelte 4, install the v1 release line (the current version targets Svelte 5).

```bash
npm install svelte-heart@^1
```
## Usage
```html
<script>
import { SvelteHeart } from 'svelte-heart'
let like = false
const likeEvent = () => { //this is where you set up an ajax call.
	like = like ? false : true
}
</script>
<button on:click={likeEvent}>
	Like
	<SvelteHeart bind:value={like} />
</button>
```

## Props

| Prop                   | Type      | Default         | Description                                                    |
| ---------------------- | --------- | --------------- | -------------------------------------------------------------- |
| value | `boolean` | `false` | The component listens to the change of `value`. When it changes to `true`, the animation triggers. |
| colorLiked | `string` | `"#da3a09"` | The color when `value` is set to `true`|
| colorUnliked | `string` | `"#222"` | The color when `value` is set to `false`|
| symbol | `"heart" ⎮ "star" ⎮ "thumb"` | `"heart"` | Accepts one out of three icon types. (heart, star, thumb) |
| size | `number` | `20` | This sets the size of the `symbol` as well as those in the animation. |

## Caution

There is no event dispatched from this component as its sole purpose is just an icon with an animation.

## License
[LIL License](https://github.com/thingsneverchange/svelte-heart/blob/master/License).

https://yongju.me
