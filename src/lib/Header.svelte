<script>
    import { base } from "$app/paths";
    import { pages } from "$lib/config.js"
</script>

<header>
    {#each Object.entries(pages.list) as [title, info]}
    <a href={info.path}><i class={"bi bi-"+info.icon}></i> {info.name}</a>
    {/each}
</header>

<style>
    header {
        border-bottom: 0.5px solid var(--lavender-blue-50);
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }
    header > a {
        color: var(--header-accent);
        justify-content: center;
        flex-basis: 100%;
        display: flex;
        padding: 1em 1em;
        transition:
            background-color 200ms,
            color 200ms,
            flex-basis 200ms;
    }

    header > a:hover {
        flex-basis: 150%;
        color: var(--backgroung);
        background-color: var(--header-accent);
    }
</style>
