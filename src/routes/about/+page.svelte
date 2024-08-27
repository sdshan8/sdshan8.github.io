<script>
  import Emote from "$lib/Emote.svelte";
  import { pages } from "$lib/config.js";
  import hi_hiura from '$lib/assets/about/About_Hi.jpg'

  const page = pages.list.about;
</script>

<svelte:head>
  <title>{page.name}</title>
  <meta name="description" content={page.description} />
  <meta property="og:url" content={pages.url + page.path} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={page.name} />
  <meta property="og:description" content={page.description} />
  <meta property="og:image" content={page.image} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content={pages.domain} />
  <meta property="twitter:url" content={pages.url + page.path} />
  <meta name="twitter:title" content={page.name} />
  <meta name="twitter:description" content={page.description} />
  <meta name="twitter:image" content={page.image} />
</svelte:head>

<section class="article" id="about" style="color: var(--lavender-pink);">
  <img src={hi_hiura} alt="">
  <p>Hi there, I am Yutsu, You probably know me from Twitter or Discord, and to those people, love every single one of you cuties <Emote emote="HiuraLove"/></p>
  <p></p>
</section>

<style>
section {
  display: flex;
  flex-flow: column;
  font-size: large;
}
img {
  display: inline-flex;
  max-width: 100%;
}
</style>
