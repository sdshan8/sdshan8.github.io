<script>
import Emote from '$lib/Emote.svelte';
import Profile from '$lib/Profile.svelte';
import { socials, pages } from '$lib/config.js'

const page = pages.list.social
</script>

<svelte:head>
    <title>{page.name}</title>
    <meta name="description" content={page.description}/>
    <meta property="og:url" content={pages.url + page.path}/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content={page.name}/>
    <meta property="og:description" content={page.description}/>
    <meta property="og:image" content={page.image}/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta property="twitter:domain" content={pages.domain}/>
    <meta property="twitter:url" content={pages.url + page.path}/>
    <meta name="twitter:title" content={page.name}/>
    <meta name="twitter:description" content={page.description}/>
    <meta name="twitter:image" content={page.image}/>
</svelte:head>

<div id="socials">
    <h2>{socials.description}<Emote emote={socials.emote} /></h2>
    {#each socials.socials as social }
    <section id={social.name + "-socials"}>
        <p>{social.description}<i class={'"bi bi-'+social.name+'"'}></i></p>
        {#each social.list as profile}
            <Profile profile={profile}></Profile>
	    {/each}
    </section>
    {/each}
</div>

<style>
#socials {
    margin: auto;
    max-width: 800px;
    height: 96%;
    padding: 0 2%;
}
h2 {
    text-align: center;
}
section {
    font-size: 1.2em;
}
</style>