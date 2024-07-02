<script>
import Emote from '$lib/Emote.svelte';
import Profile from '$lib/Profile.svelte';


const socials = {
    twitter: {
        yutsu: {
            name: "Yutsu",
            pic: "/pfps/twitter/SetsuYuki4.jpg",
            bg: "/pfps/twitter/SetsuYuki4_banner.jpg",
            bgColor: "#00000088",
            username: "SetsuYuki4",
            link: "https://x.com/@SetsuYuki4",
            bio: "He/Him | 19 | Kiana Simp | Likes Coding sometimes | AyuSetsu is life | likes cute things | Watch/Read DaL"
        },
        hibiki: {
            name: "Hibiki",
            pic: "/pfps/twitter/Hibiki146.jpg",
            bg: "/pfps/twitter/Hibiki146_banner.jpg",
            bgColor: "#00000088",
            username: "Hibiki14607682",
            link: "https://x.com/@Hibiki14607682",
            bio: "He/Him"
        }
    },
    discord: {
        yutsu: {
            name: "Yutsu",
            pic: "/pfps/discord/Hibiki146.jpg",
            bg: "/pfps/discord/Hibiki146_banner.jpg",
            bgColor: "#00000088",
            username: "hibiki146",
            bio: "He/Him | 19 | Kiana Simp | Likes Coding sometimes | AyuSetsu is life | likes cute things | Watch/Read DaL"
        }
    },
    github: {
        shan: {
            name: "Shan",
            pic: "/pfps/github/sdshan8.jpg",
            bg: "/pfps/github/sdshan8_banner.jpg",
            bgColor: "#00000088",
            username: "sdshan8",
            link: "https://github.com/sdshan8",
            bio:"Hello There"
        }
    }

}
</script>

<svelte:head>
    <title>YutSocial</title>
</svelte:head>

<div id="socials">
    <h2>So this is the page in which I will put all my socials <Emote emote="BocchiExistentialCrisis"></Emote></h2>
    <section id="Twitters">
        <p>So lets start with my Twitter <i class="bi bi-twitter"></i> accounts:</p>
        <Profile profile={socials.twitter.yutsu}></Profile>
        
        <Profile profile={socials.twitter.hibiki}></Profile>
    </section>
    <section id="Discords">
        <p>Lets move on to my Discord <i class="bi bi-discord"></i> accounts:</p>
        <Profile profile={socials.discord.yutsu}></Profile> 
    </section>
    <section id="Github">
        <p>Now for my Github <i class="bi bi-github"></i> accounts:</p>
        <Profile profile={socials.github.shan}></Profile>
    </section>
</div>

<style>
#socials {
    margin: auto;
    max-width: 800px;
    /* padding: 1em; */
    height: 100%;
}
h2 {
    text-align: center;
}
section {
    font-size: 1.2em;
}
</style>