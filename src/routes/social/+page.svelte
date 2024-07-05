<script>
import Emote from '$lib/Emote.svelte';
import Profile from '$lib/Profile.svelte';
import { social_page } from '$lib/config.js'


</script>

<svelte:head>
    <title>YutSocial</title>
</svelte:head>

<div id="socials">
    <h2>{social_page.description}<Emote emote={social_page.emote} /></h2>
    {#each social_page.socials as social }
    <section id={social.name + "-socials"}>
        <p>So lets start with my Twitter <i class={'"bi bi-'+social.name+'"'}></i></p>
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