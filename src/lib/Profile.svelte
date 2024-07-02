<script>
    export let profile;

    const bg = profile.bg ? `url('${profile.bg}')` : "initial";
    const bgColor = profile.bgColor || "initial";
    const name = profile.name || "YutsuCard";
    const avatar = profile.pic || "/icons/appple-touch-icon.png";
    const username = profile.username || "unknown";
    const link = profile.link || "https://sdshan8.github.io";
    const bio = profile.bio || "";
</script>

<div class="profile" style:background-image={bg}>
    <div class="con" style:background-color={bgColor}>
        <div style="display:flex;flex-grow:1">
            {#if link}
                <a style="all:unset" target="_blank" href={link}>
                    <img class="pfp" src={avatar} alt="{name}'s Profile Pic" />
                </a>
            {:else}
                <img class="pfp" src={avatar} alt="{name}'s Profile Pic" />
            {/if}

            <div class="info">
                {#if link}
                    <a style="all:unset" target="_blank" href={link}>
                        <b class="name">{name}</b>
                    </a>
                    <a style="all:unset" target="_blank" href={link}>
                        <span class="username">{username}</span>
                    </a>
                {:else}
                    <b class="name">{name}</b>
                    <span class="username">{username}</span>
                {/if}
            </div>
        </div>
        <div class="bio">{bio}</div>
    </div>
</div>

<style>
    .profile {
        border: 0.5px solid hsl(259, 12%, 50%);
        border-radius: 20px;
        margin-top: 0.2rem;
        min-width: 350px;
        background-size: cover;
        background-position: center;
    }
    .con {
        display: flex;
        padding: 0.5rem;
        flex-direction: column;
        border-radius: 20px;
    }
    .pfp {
        flex-shrink: 0;
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
        border: 0.5px solid hsl(259, 12%, 50%);
    }
    .info {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        margin-bottom: 0.2rem;
        margin-left: 0.2rem;
    }
    .bio {
        font-size: 0.8em;
        margin-left: 0.3rem;
    }
</style>
