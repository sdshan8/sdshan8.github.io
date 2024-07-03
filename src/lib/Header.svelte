<script>
    import { base } from "$app/paths";
</script>

<header>
    <a href={base + "/"}><i class="bi bi-house"></i> Home</a>
    <!-- <a href={base + '/about'}><i class="bi bi-info-circle"></i> About</a>
    <a href={base + '/projects'}><i class="bi bi-code-slash"></i> Projects</a> -->
    <a href={base + "/social"}><i class="bi bi-chat"></i> Socials</a>
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
