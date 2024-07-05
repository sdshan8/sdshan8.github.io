<script>
export let emote = "BocchiLooksAway"
import { assets } from '$app/paths'
</script>

<img
    src={ assets + "/emote/" + emote + ".webp"}
    title="{emote}"
    alt=":{emote}:"
>

<style>
img {
    display: inline;
    height: 1.1em;
    width: 1.1em;
    transform: translateY(12%);
}
</style>