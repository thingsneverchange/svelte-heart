<div align="center" style="text-align:center">
  <img src="https://images.themecloset.pictures/github/svelte-heart/logo.png" alt="Svelte Scrollable Arrow" width="350" />
  <h1>Svelte Heart </h1>
  <a href="https://npmjs.org/package/svelte-heart">
    <img src="https://badgen.now.sh/npm/v/svelte-heart" alt="version" />
  </a>
</div>

A simple SVG icon with an animation on the fly. A simple and cool animation additive to the like buttons on your Svelte app.

## How it works
`Svelte Heart` is just basically an SVG icon with the keyframe animation built in. This works by binding the like value to `bind:value`. It detects the change, and triggers the heart animation when it is `true`.

## Demo
| Heart  | Star  | Thumb  |
| ------- | ------- | ------- |
| <img src="https://images.themecloset.pictures/github/svelte-heart/preview-heart.gif" alt="Svelte Heart Heart Animation" width="300px">  | <img src="https://images.themecloset.pictures/github/svelte-heart/preview-star.gif" alt="Svelte Heart Heart Animation" width="300px"/> | <img src="https://images.themecloset.pictures/github/svelte-heart/preview-thumb.gif" alt="Svelte Heart Heart Animation" width="300px"> |

## Installation

```bash
npm install svelte-heart
```
## Usage
```html
<script>
import { SvelteHeart } from 'svelte-heart'
let like = false
const LikeEvent = () => { //this is where you set up an ajax call.
	like = like ? false : true
}
</script>
<button on:click="{LikeEvent}">
	Like
	<SvelteHaert bind:value="{like}"/>
</button>
```

## Props

| Prop                   | Type      | Default         | Description                                                    |
| ---------------------- | --------- | --------------- | -------------------------------------------------------------- |
| value | `boolean` | `false` | The component listens to the change of this value. It sets `true` from `false` the animation triggers. |
| colorLiked | `string` | `"#da3a09"` | The color when the `value` is set to `true`|
| colorUnliked | `string` | `"#da3a09"` | The color when the `value` is set to `false`|
| size | `number` | `20` | The size of the heart. This increases the icon size of the heart in the animation |
| symbol | `"heart" ⎮ "star" ⎮ "thumb"` | `"heart"` | Accepts only three icon types. |

## Caution

There is no event dispathced from this component as its sole purpose is just an icon with an animation.

## License
[LIL License](https://github.com/thingsneverchange/svelte-heart/blob/master/License).

https://yongju.me
