<script>
import Emote from '$lib/Emote.svelte';
import { home_page } from '$lib/config.js'
import { assets } from "$app/paths";

const page = home_page;

const hello = assets + '/images/hiura.jpeg';
const svelte_book = assets + '/images/Koume_Shirasaka_Holding_Svelte_Programming_Language.webp'
</script>

<svelte:head>
    <meta property="og:title" content={page.name} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content={page.description} />
    <meta property="og:image" content={assets + page.image} />
	<title>{page.name}</title>
</svelte:head>

<section class="article" id="intro" style="color: var(--lavender-pink);">
    <div class="article_header">
        <img class="article_img" src={hello} alt="Anime girl">
        <h2>Welcome to My website I guess</h2>
    </div>
    <article>
        <p>You all probably know me one of many names like Shan, Yuco, Rad, Hibiki, Yutsu etc. Yeah I have a lot of names onlines don't ask me why, Anyways have a fun time navigating this website</p>
        <p>Also how do I enable word wrap in vscode? <Emote emote="BocchiLooksAway"></Emote></p>
        <p>Oh as for why I made this website, recently Jan showed me his website for his collage project which kinda inspried me <Emote emote="AdachiBlush"></Emote> </p>
        <p>And Rn i am getting sidetracked into making a ringtone</p>
        <p>Done with ringtone <Emote emote="RainbowRequiemPls"></Emote>, it was a ringtone made from the intro of <a href="https://youtu.be/K1PltwBuDKM">Catch the Moment</a>, in case you were curious</p>
    </article>
</section>
<section class="article" id="svelte" style="color: var(--lavender-orange);">
    <div class="article_header">
        <img src={svelte_book} alt="Koume_Shirasaka_Holding_Svelte_Programming_Language" class="article_img">
        <h2>Moving this website to use Svelte kit</h2>
    </div>
    <article>
        <p>I originally wrote this site in html as it was easy at that time but turns out it's quite hard to use web componnents so now I am here rewriting this site in svelte as thats what I last used on Sveltter</p>
        <p>I used to be quite familiar with svelte but I haven't used it in about an year so I forgot most of it, and had to relearn most of it <Emote emote="BocchiLooksAway" /> </p>
        <p>and I just finished refactoring this home page to svelte.</p>
        <p>Atleast I remember some things about it <Emote emote="AdachiBlush" /> </p>
    </article>
</section>

<style>
.article {
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    height: min-content;
    margin-top: 1rem;
    text-wrap: pretty;
}
article {
    z-index: 1;
    padding: 1em;
    display: flex;
    flex-direction: column;
    height: max-content;
}
.article_header {
    display: flex;
}
.article_img {
    max-width: calc(100px - 1em);
    height: fit-content;
    aspect-ratio: 1;
    margin: .5em;
    border-radius: 10%;
    border: 1.5px solid var(--raisin-gray-50);
}
</style>